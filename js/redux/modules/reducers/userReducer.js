const initialState = {
  loading: false,
  users: {},
  error: {}
};

export function UsersReducer(state = initialState, action) {
  switch (action.type) {
  case 'GET_USERS_BEGIN':
    return {
      ...state,
      loading: true
    }
  case 'GET_USERS_SUCCESS':
    return {
      ...state,
      loading: false,
      users: action.users
    }
  case 'GET_USERS_ERROR':
    return {
      ...state,
      error: action.error
    }
  default:
    return state;
  }
}