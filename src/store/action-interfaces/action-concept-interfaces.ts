import { ActionTypes } from '../action-types';
import { Concept } from '../../types';

export interface GetConceptsRequestAction {
  type: ActionTypes.GET_CONCEPTS_REQUEST;
  payload: {
    isFetching: boolean;
    concepts: Concept[];
    error: string;
  }
}

export interface GetConceptsSuccessAction {
  type: ActionTypes.GET_CONCEPTS_SUCCESS;
  payload: {
    isFetching: boolean;
    concepts: Concept[];
  }
}

export interface GetConceptsFailureAction {
  type: ActionTypes.GET_CONCEPTS_FAILURE;
  payload: {
    isFetching: boolean;
    error: string;
  }
}

export interface CreateConceptRequestAction {
  type: ActionTypes.CREATE_CONCEPT_REQUEST;
  payload: {
    isFetching: boolean;
    error: string;
  }
}

export interface CreateConceptSuccessAction {
  type: ActionTypes.CREATE_CONCEPT_SUCCESS;
  payload: {
    isFetching: boolean;
    concepts: Concept[];
  }
}

export interface CreateConceptFailureAction {
  type: ActionTypes.CREATE_CONCEPT_FAILURE;
  payload: {
    isFetching: boolean;
    error: string;
  }
}

export interface UpdateConceptRequestAction {
  type: ActionTypes.UPDATE_CONCEPT_REQUEST;
  payload: {
    isFetching: boolean;
    error: string;
  }
}

export interface UpdateConceptSuccessAction {
  type: ActionTypes.UPDATE_CONCEPT_SUCCESS;
  payload: {
    isFetching: boolean;
    concepts: Concept[];
  }
}

export interface UpdateConceptFailureAction {
  type: ActionTypes.UPDATE_CONCEPT_FAILURE;
  payload: {
    isFetching: boolean;
    error: string;
  }
}

export interface DeleteConceptRequestAction {
  type: ActionTypes.DELETE_CONCEPT_REQUEST;
  payload: {
    isFetching: boolean;
    error: string;
  }
}

export interface DeleteConceptSuccessAction {
  type: ActionTypes.DELETE_CONCEPT_SUCCESS;
  payload: {
    isFetching: boolean;
    concepts: Concept[];
  }
}

export interface DeleteConceptFailureAction {
  type: ActionTypes.DELETE_CONCEPT_FAILURE;
  payload: {
    isFetching: boolean;
    error: string;
  }
}

export type ConceptAction =
  GetConceptsRequestAction |
  GetConceptsSuccessAction |
  GetConceptsFailureAction |
  CreateConceptRequestAction |
  CreateConceptSuccessAction |
  CreateConceptFailureAction |
  UpdateConceptRequestAction |
  UpdateConceptSuccessAction |
  UpdateConceptFailureAction |
  DeleteConceptRequestAction |
  DeleteConceptSuccessAction |
  DeleteConceptFailureAction;
