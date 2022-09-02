import { Dispatch } from 'redux';
import { User } from 'auth0';

import {
  SetUserInfoAction,
  UserAction
} from '../action-interfaces';
import { ActionTypes } from '../action-types';

const { SET_USER_INFO } = ActionTypes;

const setUserInfoSuccess = (user: User): SetUserInfoAction => {
  return {
    type: SET_USER_INFO,
    payload: {
      isFetching: false,
      user,
      error: ''
    }
  }
};

export const setUserInfo = (user: User) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch(setUserInfoSuccess(user));
  };
};
