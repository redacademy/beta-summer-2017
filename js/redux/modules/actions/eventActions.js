
function getEventsBegin() {
  return { type: 'GET_EVENTS_BEGIN' };
}

function getEventsSuccess(events) {
  return { type: 'GET_EVENTS_SUCCESS', events };
}

function getEventsError(error) {
  return { type: 'GET_EVENTS_ERROR', error };
}

//Thunk actions
export function getEvents() {
  return function (dispatch) {
    dispatch(getEventsBegin());
    fetch("https://betatalks-7fc6d.firebaseio.com/events.json")
      .then(response => response.json())
      .then(events => {
        dispatch(getEventsSuccess(events));
      }).catch(error => dispatch(getEventsError(error)));
  }
}

