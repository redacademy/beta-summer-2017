import { betaevents } from '../../../config/firebase';
import store from '../../store';

function getEventsSuccess(events) {
  return { type: 'GET_EVENTS_SUCCESS', events };
}

betaevents.on('value', function (snapshot) {
  store.dispatch(getEventsSuccess(snapshot.val()));
});
