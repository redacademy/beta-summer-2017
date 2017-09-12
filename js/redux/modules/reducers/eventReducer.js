const initialState = {
  loading: false,
  events: [],
  error: {},
  nextEvent: {
    attendees: [],
    date: null,
    endTime: null,
    eventCode: null,
    id: null,
    location: {},
    speakers: [],
    startTime: null,
    talks: []
  }
};


const nextEvent = (events) => events.find(event => event.date > Math.floor(Date.now() / 1000));



export function EventsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_EVENTS_BEGIN':
      return {
        ...state,
        loading: true
      }
    case 'GET_EVENTS_SUCCESS':
      const evts = action.events

      return {
        ...state,
        loading: false,
        events: evts,
        nextEvent: nextEvent(evts)
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