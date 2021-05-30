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
      const isRegistered = state.registeredUsers.some((user) => user === action.payload);
      if (isRegistered) { return { 
        checked: true,
        ...state.registeredUsers,
        registeredUsers: [...state.registeredUsers, action.state]} }
      break;
    default:
      return state;
  }
}

export default loginVerifierReducer;
