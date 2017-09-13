import { betatalks } from '../../../config/firebase';
import store from '../../store';

function getTalksBegin() {
  return { type: 'GET_TALKS_BEGIN' };
}

function getTalksSuccess(talks) {
  return { type: 'GET_TALKS_SUCCESS', talks };
}

function getTalksError(error) {
  return { type: 'GET_TALKS_ERROR', error };
}

(function() {
  store.dispatch(getTalksBegin());
  betatalks.on('value', function (snapshot, error) {
    if (error) {
      store.dispatch(getTalksError(error));
    }
    store.dispatch(getTalksSuccess(snapshot.val()));
  });
})();