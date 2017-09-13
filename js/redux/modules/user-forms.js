// ACTION CONSTANT
export const UPDATE_EMAIL_FIELD = 'UPDATE_EMAIL_FIELD';
export const UPDATE_PASSWORD_FIELD = 'UPDATE_PASSWORD_FIELD';
export const UPDATE_FULLNAME_FIELD = 'UPDATE_FULLNAME_FIELD';
export const UPDATE_BIO_FIELD = 'UPDATE_BIO_FIELD';
export const UPDATE_GOALS_FIELD = 'UPDATE_GOALS_FIELD';

// ACTION CREATORS
export function updateEmailField(email) {
  return {
    type: UPDATE_EMAIL_FIELD,
    email
  };
}

export function updatePasswordField(password) {
  return {
    type: UPDATE_PASSWORD_FIELD,
    password
  };
}

export function updateFullnameField(fullname) {
  return {
    type: UPDATE_FULLNAME_FIELD,
    fullname
  };
}

export function updateBioField(bio) {
  return {
    type: UPDATE_BIO_FIELD,
    bio
  };
}

export function updateGoalsField(goals) {
  return {
    type: UPDATE_GOALS_FIELD,
    goals
  };
}


export function updateSocialMedia(payload) {
  return {
    type: "UPDATE_SOCIAL_MEDIA",
    payload
  }
}

// REDUCERS
const initialState = {
  emailField: '',
  passwordField: '',
  fullnameField: '',
  bioField: '',
  goalsField: '',
  facebook: '',
  linkedin: '',
  twitter: ''
};

export function userFormsReducer(state = initialState, action) {
  switch (action.type) {
  case UPDATE_EMAIL_FIELD:
    return {
      ...state,
      emailField: action.email
    };

  case UPDATE_PASSWORD_FIELD:
    return {
      ...state,
      passwordField: action.password
    };

  case UPDATE_FULLNAME_FIELD:
    return {
      ...state,
      fullnameField: action.fullname
    };

  case UPDATE_BIO_FIELD:
    return {
      ...state,
      bioField: action.bio
    };

  case UPDATE_GOALS_FIELD:
    return {
      ...state,
      goalsField: action.goals
    };

  case "UPDATE_SOCIAL_MEDIA":
    const { value, type } = action.payload;
    const newState = state;
    newState[type] = value
    return {
      ...newState
    };

  default:
    return state;
  }
}