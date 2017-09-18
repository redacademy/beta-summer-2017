// ACTION CONSTANT
export const UPDATE_EMAIL_FIELD = 'UPDATE_EMAIL_FIELD';
export const UPDATE_PASSWORD_FIELD = 'UPDATE_PASSWORD_FIELD';
export const UPDATE_FULLNAME_FIELD = 'UPDATE_FULLNAME_FIELD';
export const UPDATE_BIO_FIELD = 'UPDATE_BIO_FIELD';
export const UPDATE_GOALS_FIELD = 'UPDATE_GOALS_FIELD';
export const UPDATE_IMAGEURL_FIELD = 'UPDATE_IMAGEURL_FIELD';
export const UPDATE_SOCIAL_MEDIA = 'UPDATE_SOCIALMEDIA';
export const CURRENT_EMAIL = 'CURRENT_EMAIL';
export const CURRENT_PASSWORD = 'CURRENT_PASSWORD';

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

export function updateImageUrlField(imageurl) {
  return {
    type: UPDATE_IMAGEURL_FIELD,
    imageurl
  };
}

export function updateSocialMedia(smUrls) {
  return {
    type: UPDATE_SOCIAL_MEDIA,
    smUrls
  };
}

export function takeCurrentEmail(currentEmail) {
  return {
    type: CURRENT_EMAIL,
    currentEmail
  };
}

export function takeCurrentPassword(currentPassword) {
  return {
    type: CURRENT_PASSWORD,
    currentPassword
  };
}

// REDUCERS
const initialState = {
  emailField: null,
  passwordField: null,
  fullnameField: null,
  bioField: null,
  goalsField: {},
  imageUrl: null,
  socialMediaUrls: {},
  currentEmail: null,
  currentPassword: null
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
      goalsField: {
        ...state.goalsField,
        ...action.goals
      }
    }

  case UPDATE_IMAGEURL_FIELD:
    return {
      ...state,
      imageUrl: action.imageurl
    };

  case UPDATE_SOCIAL_MEDIA:
    return {
      ...state,
      socialMediaUrls: {
        ...state.socialMediaUrls,
        ...action.smUrls
      }
    };

  case CURRENT_EMAIL:
    return {
      ...state,
      currentEmail: action.currentEmail
    };

  case CURRENT_PASSWORD:
    return {
      ...state,
      currentPassword: action.currentPassword
    };

  default:
    return state;
  }
}