import { LOGIN_VALIDATION } from "../actions/index";

const INITIAL_STATE = {
  checked: false,
  registeredUsers: [
    { email: "lucas@gmail.com", password: "123" },
    { email: "bob@gmail.com", password: "321" },
  ],
};

function loginVerifierReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_VALIDATION:
      const isRegistered = state.registeredUsers.some((user) => user === action.payload);
      if (isRegistered) { return { ...state, state: { checked: true} } }
      break;
    default:
      return state;
  }
}

export default loginVerifierReducer;
