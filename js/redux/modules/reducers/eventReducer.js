const initialState = {
  loading: false,
  events: [],
  error: {}
};

export function EventsReducer(state = initialState, action) {
  switch (action.type) {
  case 'GET_EVENTS_BEGIN':
    return {
      ...state,
      loading: true
    }
  case 'GET_EVENTS_SUCCESS':
    return {
      ...state,
      loading: false,
      events: action.events
    }
  case 'GET_EVENTS_ERROR':
    return {
      ...state,
      error: action.error
    }
  default:
    return state;
  }
}