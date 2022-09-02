import { Reducer } from 'redux';

import { UploadFileAction } from '../action-interfaces';
import { ActionTypes } from '../action-types';

const { SEND_FILE_REQUEST, SEND_FILE_SUCCESS, SEND_FILE_FAILURE } = ActionTypes;

interface UploadFileState {
  isFetching: boolean;
  error: string;
}

const initialState: UploadFileState = {
  isFetching: false,
  error: ''
};

const reducer: Reducer<UploadFileState, UploadFileAction> = (state = initialState, action) => {
  switch (action.type) {
    case SEND_FILE_REQUEST:
      return {
        ...state,
        ...action.payload
      };
    case SEND_FILE_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case SEND_FILE_FAILURE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default reducer;
