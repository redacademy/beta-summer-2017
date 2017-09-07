const SET_EVENT_DATA = 'FETCH_EVENT_DATA';

const initialState = {
  loading: true,
  nextEvent: {}
};

export function setEventData(eventData) {
  return {
    type: SET_EVENT_DATA,
    payload: eventData
  };
}

export function HomeReducer(state = initialState, action) {
  switch (action.type) {
  case SET_EVENT_DATA:
    return {
      loading: false,
      nextEvent: action.payload
    }
  default:
    return state;
  }
}

//Thunk actions
export function fetchEventData() {
  return function (dispatch) {
    fetch("https://betatalks-7fc6d.firebaseio.com/events.json")
      .then(response => response.json())
      .then(data => {
        // returns the next first event with a timestamp greater than current timestamp
        const nextEvent = data.find(event => event.date > Math.floor(Date.now() / 1000));
        fetch("https://betatalks-7fc6d.firebaseio.com/users.json")
          .then(res => res.json())
          .then(users => {
            const attendeesWithData = nextEvent.attendees.reduce((acc, val) => {
              acc.push(users[val]);
              return acc;
            }, []);
            nextEvent.attendees = attendeesWithData;
            dispatch(setEventData(nextEvent));
          }).catch(err => `Error fetching JSON: ${err}`);
      }).catch(error => `Error fetching JSON: ${error}`);
  }
}