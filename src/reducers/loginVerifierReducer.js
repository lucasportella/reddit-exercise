import { LOGIN_VALIDATION } from "../actions/index";

const INITIAL_STATE = {
  user: { email: '', password: '' },
  checked: false,
  registeredUsers: [
    { email: "lucas@gmail.com", password: "123" },
    { email: "bob@gmail.com", password: "321" },
  ],
};

function loginVerifierReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_VALIDATION:
        return Object.assign({}, state, {checked: state.registeredUsers.some((user) => user.email === action.state.email && user.password === action.state.password)})
        // { 
        // user: action.state,
        // checked: true,
        // registeredUsers: [...state.registeredUsers, action.state]}; 
    default:
      return state;
  }
}

export default loginVerifierReducer;
