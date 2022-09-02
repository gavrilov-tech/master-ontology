import { Reducer } from 'redux';
import { User } from 'auth0';

import { UserAction } from '../action-interfaces';
import { ActionTypes } from '../action-types';

const { SET_USER_INFO } = ActionTypes;

interface UserState {
  isFetching: boolean;
  user: User;
  error: string;
}

const initialState: UserState = {
  isFetching: false,
  user: {},
  error: ''
};

const reducer: Reducer<UserState, UserAction> = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default reducer;
