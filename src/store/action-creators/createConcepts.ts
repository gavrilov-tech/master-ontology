import axios from 'axios';
import { Dispatch } from 'redux';

import {
  CreateConceptRequestAction,
  CreateConceptSuccessAction,
  CreateConceptFailureAction,
  ConceptAction
} from '../action-interfaces';
import { ActionTypes } from '../action-types';
import { UNAUTHORIZED_HTTP_ERROR } from '../../constants';
import { Concept } from '../../types';
import { RootState } from '../reducers';

const { CREATE_CONCEPT_REQUEST, CREATE_CONCEPT_SUCCESS, CREATE_CONCEPT_FAILURE } = ActionTypes;

const createConceptRequest = (): CreateConceptRequestAction => {
  return {
    type: CREATE_CONCEPT_REQUEST,
    payload: {
      isFetching: true,
      error: ''
    }
  }
};

const createConceptSuccess = (concepts: Concept[]): CreateConceptSuccessAction => {
  return {
    type: CREATE_CONCEPT_SUCCESS,
    payload: {
      isFetching: false,
      concepts
    }
  }
};

const createConceptFailure = (error: string): CreateConceptFailureAction => {
  return {
    type: CREATE_CONCEPT_FAILURE,
    payload: {
      isFetching: false,
      error
    }
  }
};

export const createConcept = ({ accessToken, concept }: { accessToken: string, concept: Concept }) => {
  return async (dispatch: Dispatch<ConceptAction>, getState: () => RootState) => {
    dispatch(createConceptRequest());

    try {
      const { data, status } = await axios.post(`${process.env.REACT_APP_SERVICE_DOMAIN}/api/concept`,
        concept,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );
      if (status === 200) {
        const currentConcepts = getState().concepts.concepts;
        dispatch(createConceptSuccess([...currentConcepts, {...concept, _id: data.insertedId }]));
      }
    } catch (error: any) {
      if (error?.response.status === 401) {
        dispatch(createConceptFailure(UNAUTHORIZED_HTTP_ERROR));
      } else {
        dispatch(createConceptFailure(error?.message));
      }
    }
  };
};
