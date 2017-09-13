const initialState = {
  loading: false,
  talks: [],
  error: {}
};

export function TalksReducer(state = initialState, action) {
  switch (action.type) {
  case 'GET_TALKS_BEGIN':
    return {
      ...state,
      loading: true
    }
  case 'GET_TALKS_SUCCESS':
    return {
      ...state,
      loading: false,
      talks: action.talks
    }
  case 'GET_TALKS_ERROR':
    return {
      ...state,
      error: action.error
    }
  default:
    return state;
  }
}