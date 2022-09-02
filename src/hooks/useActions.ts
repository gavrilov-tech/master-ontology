import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import { actionCreators } from '../store';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch)
};
