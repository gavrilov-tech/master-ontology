import axios from 'axios';
import { Dispatch } from 'redux';

import {
  DeleteConceptRequestAction,
  DeleteConceptSuccessAction,
  DeleteConceptFailureAction,
  ConceptAction
} from '../action-interfaces';
import { ActionTypes } from '../action-types';
import { UNAUTHORIZED_HTTP_ERROR } from '../../constants';
import { Concept } from '../../types';
import { RootState } from '../reducers';

const { DELETE_CONCEPT_REQUEST, DELETE_CONCEPT_SUCCESS, DELETE_CONCEPT_FAILURE } = ActionTypes;

const deleteConceptRequest = (): DeleteConceptRequestAction => {
  return {
    type: DELETE_CONCEPT_REQUEST,
    payload: {
      isFetching: true,
      error: ''
    }
  }
};

const deleteConceptSuccess = (concepts: Concept[]): DeleteConceptSuccessAction => {
  return {
    type: DELETE_CONCEPT_SUCCESS,
    payload: {
      isFetching: false,
      concepts
    }
  }
};

const deleteConceptFailure = (error: string): DeleteConceptFailureAction => {
  return {
    type: DELETE_CONCEPT_FAILURE,
    payload: {
      isFetching: false,
      error
    }
  }
};

export const deleteConcept = ({ accessToken, id }: { accessToken: string, id: string }) => {
  return async (dispatch: Dispatch<ConceptAction>, getState: () => RootState) => {
    dispatch(deleteConceptRequest());

    try {
      const { data, status } = await axios.delete(`${process.env.REACT_APP_SERVICE_DOMAIN}/api/concept/${id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );

      if (status === 200) {
        const currentConcepts = getState().concepts.concepts;
        const newConcepts = currentConcepts.filter((concept) => concept._id !== data._id);
        dispatch(deleteConceptSuccess(newConcepts));
      }
    } catch (error: any) {
      if (error?.response.status === 401) {
        dispatch(deleteConceptFailure(UNAUTHORIZED_HTTP_ERROR));
      } else {
        dispatch(deleteConceptFailure(error?.message));
      }
    }
  };
};
