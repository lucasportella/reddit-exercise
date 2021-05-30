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
      const isRegistered = state.registeredUsers.some((user) => user === action.state);
      console.log(isRegistered);
      if (isRegistered) { return { 
        user: action.state,
        checked: true,
        registeredUsers: [...state.registeredUsers, action.state]}; }
      return state;
    default:
      return state;
  }
}

export default loginVerifierReducer;
