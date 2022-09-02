import { Reducer } from 'redux';

import { ConceptAction } from '../action-interfaces';
import { ActionTypes } from '../action-types';
import {  Concept } from '../../types';

const {
  GET_CONCEPTS_REQUEST,
  GET_CONCEPTS_SUCCESS,
  GET_CONCEPTS_FAILURE,
  CREATE_CONCEPT_REQUEST,
  CREATE_CONCEPT_SUCCESS,
  CREATE_CONCEPT_FAILURE,
  UPDATE_CONCEPT_REQUEST,
  UPDATE_CONCEPT_SUCCESS,
  UPDATE_CONCEPT_FAILURE,
  DELETE_CONCEPT_REQUEST,
  DELETE_CONCEPT_SUCCESS,
  DELETE_CONCEPT_FAILURE
} = ActionTypes;

interface ConceptState {
  isFetching: boolean;
  concepts: Concept[];
  error: string;
}

const initialState: ConceptState = {
  isFetching: false,
  concepts: [],
  error: ''
};

const reducer: Reducer<ConceptState, ConceptAction> = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONCEPTS_REQUEST:
      return {
        ...state,
        ...action.payload
      };
    case GET_CONCEPTS_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case GET_CONCEPTS_FAILURE:
      return {
        ...state,
        ...action.payload
      };

    case CREATE_CONCEPT_REQUEST:
      return {
        ...state,
        ...action.payload
      };
    case CREATE_CONCEPT_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case CREATE_CONCEPT_FAILURE:
      return {
        ...state,
        ...action.payload
      };

    case UPDATE_CONCEPT_REQUEST:
      return {
        ...state,
        ...action.payload
      };
    case UPDATE_CONCEPT_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case UPDATE_CONCEPT_FAILURE:
      return {
        ...state,
        ...action.payload
      };

    case DELETE_CONCEPT_REQUEST:
      return {
        ...state,
        ...action.payload
      };
    case DELETE_CONCEPT_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case DELETE_CONCEPT_FAILURE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default reducer;
