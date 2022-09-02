import { User } from 'auth0';
import { ActionTypes } from '../action-types';

export interface SetUserInfoAction {
  type: ActionTypes.SET_USER_INFO;
  payload: {
    isFetching: boolean;
    user: User;
    error: string;
  }
}

export type UserAction = SetUserInfoAction;
