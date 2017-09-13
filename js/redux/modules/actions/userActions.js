import { betausers } from '../../../config/firebase';
import store from '../../store';

function getUsersBegin() {
  return { type: 'GET_USERS_BEGIN' };
}

function getUsersSuccess(users) {
  return { type: 'GET_USERS_SUCCESS', users };
}

function getUsersError(error) {
  return { type: 'GET_USERS_ERROR', error };
}

(function() {
  store.dispatch(getUsersBegin());
  betausers.on('value', function (snapshot, error) {
    if (error) {
      store.dispatch(getUsersError(error));
    }
    store.dispatch(getUsersSuccess(snapshot.val()));
  });
})();
