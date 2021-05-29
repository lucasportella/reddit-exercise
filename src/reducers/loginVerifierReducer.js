const INITIAL_STATE = {
    registeredUsers: {
      'lucas@gmail.com': {
        'password': '123'
      },
      'bob@gmail.com': {
        'password': '321'
      }
    }
  };


function loginVerifierReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'NEW_ACTION':
      return { state: action.payload };
    default:
      return state;
  }
}

export default loginVerifierReducer;