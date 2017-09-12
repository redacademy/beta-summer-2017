function getUsersBegin() {
  return { type: 'GET_USERS_BEGIN' };
}

function getUsersSuccess(users) {
  return { type: 'GET_USERS_SUCCESS', users };
}

function getUsersError(error) {
  return { type: 'GET_USERS_ERROR', error };
}

//Thunk actions
export function getUsers() {
  return function (dispatch) {
    dispatch(getUsersBegin());
    fetch("https://betatalks-7fc6d.firebaseio.com/users.json")
      .then(response => response.json())
      .then(users => {
        dispatch(getUsersSuccess(users));
      }).catch(error => dispatch(getUsersError(error)));
  }
}
