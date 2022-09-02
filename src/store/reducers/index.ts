import { combineReducers } from 'redux';

import concepts from './concepts';
import user from './user';
import uploadFile from './uploadFile';

export type RootState = ReturnType<typeof reducers>;

export const reducers = combineReducers({
  concepts,
  user,
  uploadFile
});
