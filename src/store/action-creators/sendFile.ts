import axios from 'axios';
import { Dispatch } from 'redux';


import {
  SendFileRequestAction,
  SendFileSuccessAction,
  SendFileFailureAction,
  UploadFileAction
} from '../action-interfaces';
import { ActionTypes } from '../action-types';
import { UNAUTHORIZED_HTTP_ERROR } from '../../constants';

const { SEND_FILE_REQUEST, SEND_FILE_SUCCESS, SEND_FILE_FAILURE } = ActionTypes;

const sendFileRequest = (): SendFileRequestAction => {
  return {
    type: SEND_FILE_REQUEST,
    payload: {
      isFetching: true,
      error: ''
    }
  }
};

const sendFileSuccess = (): SendFileSuccessAction => {
  return {
    type: SEND_FILE_SUCCESS,
    payload: {
      isFetching: false,
    }
  }
};

const sendFileFailure = (error: string): SendFileFailureAction => {
  return {
    type: SEND_FILE_FAILURE,
    payload: {
      isFetching: false,
      error
    }
  }
};

export const sendFile = ({ accessToken, data }: { accessToken: string, data: Object[] }) => {
  return async (dispatch: Dispatch<UploadFileAction>) => {
    dispatch(sendFileRequest());
    try {
      const { status } = await axios.post(`${process.env.REACT_APP_SERVICE_DOMAIN}/api/upload`,
        data,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          }
        }
      );
      if (status === 200) dispatch(sendFileSuccess());
    } catch (error: any) {
      if (error?.response.status === 401) {
        dispatch(sendFileFailure(UNAUTHORIZED_HTTP_ERROR));
      } else {
        dispatch(sendFileFailure(error?.message));
      }
    }
  };
};
