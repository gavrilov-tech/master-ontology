import axios from 'axios';
import { Dispatch } from 'redux';

import {
  GetConceptsFailureAction,
  GetConceptsRequestAction,
  GetConceptsSuccessAction,
  ConceptAction
} from '../action-interfaces';
import { ActionTypes } from '../action-types';
import { Concept } from '../../types';

const { GET_CONCEPTS_REQUEST, GET_CONCEPTS_SUCCESS, GET_CONCEPTS_FAILURE } = ActionTypes;

const getConceptRequest = (): GetConceptsRequestAction => {
  return {
    type: GET_CONCEPTS_REQUEST,
    payload: {
      isFetching: true,
      concepts: [],
      error: ''
    }
  }
};

const getConceptSuccess = (concepts: Concept[]): GetConceptsSuccessAction => {
  return {
    type: GET_CONCEPTS_SUCCESS,
    payload: {
      isFetching: false,
      concepts
    }
  }
};

const getConceptFailure = (error: string): GetConceptsFailureAction => {
  return {
    type: GET_CONCEPTS_FAILURE,
    payload: {
      isFetching: false,
      error
    }
  }
};

export const getConcepts = () => {
  return async (dispatch: Dispatch<ConceptAction>) => {
    dispatch(getConceptRequest());

    try {
      const { data, status } = await axios.get(`${process.env.REACT_APP_SERVICE_DOMAIN}/api/public/concept`);
      if (status === 200) dispatch(getConceptSuccess(data));
    } catch (error: any) {
      dispatch(getConceptFailure(error?.message));
    }
  };
};
