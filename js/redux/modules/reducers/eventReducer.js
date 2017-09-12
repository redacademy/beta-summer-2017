const initialState = {
  loading: true,
  events: []
};

export function EventsReducer(state = initialState, action) {
  switch (action.type) {
  case 'GET_EVENTS_SUCCESS':
    return {
      ...state,
      loading: false,
      events: action.events
    }
  default:
    return state;
  }
}