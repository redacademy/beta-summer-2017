const initialState = {
  loading: true,
  users: {}
};

export function UsersReducer(state = initialState, action) {
  switch (action.type) {
  case 'GET_USERS_SUCCESS':
    return {
      ...state,
      loading: false,
      users: action.users
    }
  default:
    return state;
  }
}