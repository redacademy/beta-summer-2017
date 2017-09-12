import { betausers } from '../../../config/firebase';
import store from '../../store';

function getUsersSuccess(users) {
  return { type: 'GET_USERS_SUCCESS', users };
}

betausers.on('value', function (snapshot) {
  store.dispatch(getUsersSuccess(snapshot.val()));
});


