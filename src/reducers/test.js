// const initialState = {
//   visibilityFilter: 'SHOW_ALL',
//   todos: []
// }

// function appReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'SET_VISIBILITY_FILTER': {
//       return Object.assign({}, state, {
//         visibilityFilter: action.filter
//       })
//     }
//     case 'ADD_TODO': {
//       return Object.assign({}, state, {
//         todos: state.todos.concat({
//           id: action.id,
//           text: action.text,
//           completed: false
//         })
//       })
//     }
//     case 'TOGGLE_TODO': {
//       return Object.assign({}, state, {
//         todos: state.todos.map(todo => {
//           if (todo.id !== action.id) {
//             return todo
//           }

//           return Object.assign({}, todo, {
//             completed: !todo.completed
//           })
//         })
//       })
//     }
//     case 'EDIT_TODO': {
//       return Object.assign({}, state, {
//         todos: state.todos.map(todo => {
//           if (todo.id !== action.id) {
//             return todo
//           }

//           return Object.assign({}, todo, {
//             text: action.text
//           })
//         })
//       })
//     }
//     default:
//       return state
//   }
// }

const INITIAL_STATE = {
  user: { email: '', password: '' },
  checked: false,
  registeredUsers: [
    { email: "lucas@gmail.com", password: "123" },
    { email: "bob@gmail.com", password: "321" },
  ],
};

const lucasAction = { email: "lucas@gmail.com", password: "123" }

const isChecked = INITIAL_STATE.registeredUsers.some((user) => {
  console.log(user, 'user')
  console.log(lucasAction, 'lucasAction')
  console.log('------------');
  return user.email === lucasAction.email && user.password === lucasAction.password})

console.log(isChecked);