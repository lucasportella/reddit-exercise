import { combineReducers } from 'redux';
import loginVerifierReducer from './loginVerifierReducer';
import loginChanger from './loginChanger'

const rootReducer = combineReducers({
  loginVerifierReducer,
  loginChanger,
});

export default rootReducer;