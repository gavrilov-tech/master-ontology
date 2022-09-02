import { ActionTypes } from '../action-types';

export interface SendFileRequestAction {
  type: ActionTypes.SEND_FILE_REQUEST;
  payload: {
    isFetching: boolean;
    error: string;
  }
}

export interface SendFileSuccessAction {
  type: ActionTypes.SEND_FILE_SUCCESS;
  payload: {
    isFetching: boolean;
  }
}

export interface SendFileFailureAction {
  type: ActionTypes.SEND_FILE_FAILURE;
  payload: {
    isFetching: boolean;
    error: string;
  }
}

export type UploadFileAction = SendFileRequestAction | SendFileSuccessAction | SendFileFailureAction;
