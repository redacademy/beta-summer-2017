const EVENTS_DATA = "EVENTS_DATA";

const initialState = {
  eventsData: [],
  loading: true
}

export function loadEvents(eventsData) {
  return {
    type: EVENTS_DATA,
    payload: eventsData
  }
}

export function getEventsData() {
  return function (dispatch) {
    fetch('https://betatalks-7fc6d.firebaseio.com/events/.json')
      .then(response => response.json())
      .then(data => {
        dispatch(loadEvents(data));
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));    
  }
}

export function EventsReducer(state = initialState, action) {
  switch(action.type) {
    case EVENTS_DATA:
      return {
        ...state,
        loading: false,
        eventsData: action.payload
      }
      default:
        return state;
  }
}