import axios from 'axios';
import { Dispatch } from 'redux';

import {
  UpdateConceptRequestAction,
  UpdateConceptSuccessAction,
  UpdateConceptFailureAction,
  ConceptAction
} from '../action-interfaces';
import { ActionTypes } from '../action-types';
import { UNAUTHORIZED_HTTP_ERROR } from '../../constants';
import { Concept } from '../../types';
import { RootState } from '../reducers';

const { UPDATE_CONCEPT_REQUEST, UPDATE_CONCEPT_SUCCESS, UPDATE_CONCEPT_FAILURE } = ActionTypes;

const updateConceptRequest = (): UpdateConceptRequestAction => {
  return {
    type: UPDATE_CONCEPT_REQUEST,
    payload: {
      isFetching: true,
      error: ''
    }
  }
};

const updateConceptSuccess = (concepts: Concept[]): UpdateConceptSuccessAction => {
  return {
    type: UPDATE_CONCEPT_SUCCESS,
    payload: {
      isFetching: false,
      concepts
    }
  }
};

const updateConceptFailure = (error: string): UpdateConceptFailureAction => {
  return {
    type: UPDATE_CONCEPT_FAILURE,
    payload: {
      isFetching: false,
      error
    }
  }
};

export const updateConcept = ({ accessToken, concept }: { accessToken: string, concept: Concept }) => {
  return async (dispatch: Dispatch<ConceptAction>, getState: () => RootState) => {
    dispatch(updateConceptRequest());

    try {
      const { data, status } = await axios.put(`${process.env.REACT_APP_SERVICE_DOMAIN}/api/concept`,
        concept,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );
      if (status === 200) {
        const currentConcepts = getState().concepts.concepts;
        const indexUpdatedConcept = currentConcepts.findIndex((item: Concept) => {
          const updatedId = data?.value._id || data._id;
          return item._id === updatedId;
        });
        currentConcepts.splice(indexUpdatedConcept, 1, data);
        dispatch(updateConceptSuccess(currentConcepts));
      }
    } catch (error: any) {
      if (error?.response.status === 401) {
        dispatch(updateConceptFailure(UNAUTHORIZED_HTTP_ERROR));
      } else {
        dispatch(updateConceptFailure(error?.message));
      }
    }
  };
};
