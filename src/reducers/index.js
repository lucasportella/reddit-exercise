import { combineReducers } from 'redux';
import loginVerifierReducer from './loginVerifierReducer';

const rootReducer = combineReducers({
  loginVerifierReducer,
});

export default rootReducer;