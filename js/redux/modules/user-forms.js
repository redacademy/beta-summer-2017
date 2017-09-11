// ACTION CONSTANT
export const UPDATE_EMAIL_FIELD = 'UPDATE_EMAIL_FIELD';
export const UPDATE_PASSWORD_FIELD = 'UPDATE_PASSWORD_FIELD';
export const UPDATE_FULLNAME_FIELD = 'UPDATE_FULLNAME_FIELD';
export const UPDATE_BIO_FIELD = 'UPDATE_BIO_FIELD';
export const UPDATE_GOALS_FIELD = 'UPDATE_GOALS_FIELD';
export const UPDATE_FACEBOOK_FIELD = 'UPDATE_FACEBOOK_FIELD';
export const UPDATE_LINKEDIN_FIELD = 'UPDATE_LINKEDIN_FIELD';
export const UPDATE_TWITTER_FIELD = 'UPDATE_TWITTER_FIELD';

// ACTION CREATORS
export function updateEmailField(email) {
  return {
    type: UPDATE_EMAIL_FIELD,
    payload: email
  };
}

export function updatePasswordField(password) {
  return {
    type: UPDATE_PASSWORD_FIELD,
    payload: password
  };
}

export function updateFullnameField(fullname) {
  return {
    type: UPDATE_FULLNAME_FIELD,
    payload: fullname
  };
}

export function updateBioField(bio) {
  return {
    type: UPDATE_BIO_FIELD,
    payload: bio
  };
}

export function updateGoalsField(goals) {
  return {
    type: UPDATE_GOALS_FIELD,
    payload: goals
  };
}

export function updateFacebookField(facebook) {
  return {
    type: UPDATE_FACEBOOK_FIELD,
    payload: facebook
  };
}

export function updateLinkedInField(linkedin) {
  return {
    type: UPDATE_LINKEDIN_FIELD,
    payload: linkedin
  };
}

export function updateTwitterField(twitter) {
  return {
    type: UPDATE_TWITTER_FIELD,
    payload: twitter
  };
}

// REDUCERS
const initialState = {
  emailField: '',
  passwordField: '',
  fullnameField: '',
  bioField: '',
  goalsField: '',
  facebookField: '',
  linkedInField: '',
  twitterField: ''
};

export function userFormsReducer(state = initialState, action) {
  switch (action.type) {
  case UPDATE_EMAIL_FIELD:
    return {
      ...state,
      emailField: action.payload
    };

  case UPDATE_PASSWORD_FIELD:
    return {
      ...state,
      passwordField: action.payload
    };

  case UPDATE_FULLNAME_FIELD:
    return {
      ...state,
      fullnameField: action.payload
    };

  case UPDATE_BIO_FIELD:
    return {
      ...state,
      bioField: action.payload
    };

  case UPDATE_GOALS_FIELD:
    return {
      ...state,
      goalsField: action.payload
    };

  case UPDATE_FACEBOOK_FIELD:
    return {
      ...state,
      facebookField: action.payload
    };

  case UPDATE_LINKEDIN_FIELD:
    return {
      ...state,
      linkedInField: action.payload
    };

  case UPDATE_TWITTER_FIELD:
    return {
      ...state,
      twitterField: action.payload
    };

  default:
    return state;
  }
}