const INITIAL_STATE = {
  state: '',
}

function firstReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'NEW_ACTION':
      return { state: action.payload };
    default:
      return state;
  }
}

export default firstReducer;