import { betaevents } from '../../../config/firebase';
import store from '../../store';

function getEventsBegin() {
  return { type: 'GET_EVENTS_BEGIN' };
}

function getEventsSuccess(events) {
  return { type: 'GET_EVENTS_SUCCESS', events };
}

function getEventsError(error) {
  return { type: 'GET_EVENTS_ERROR', error };
}

(function() {
  store.dispatch(getEventsBegin());
  betaevents.on('value', function (snapshot, error) {
    if (error) {
      store.dispatch(getEventsError(error));
    }
    store.dispatch(getEventsSuccess(snapshot.val()));
  });
})();
