import { LOGIN_CHANGE } from '../actions/index';
const INITIAL_STATE = {
  email: '',
  password: '',
}

function loginChanger(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_CHANGE:
      return action.state;
    default:
      return state;
  }
}

export default loginChanger;