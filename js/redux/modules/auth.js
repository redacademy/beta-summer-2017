// ACTION CONSTANT
export const SET_AUTH_STATE = 'SET_AUTH_STATE';
export const SHOW_LOGIN_ERROR = 'LOGIN_ERROR';

// ACTION CREATORS
export function setAuthState(authentication) {
  return {
    type: SET_AUTH_STATE,
    payload: authentication
  };
}


export const loginSuccess = (user) => ({ type: "LOGIN_SUCCESS", user })
export const loginBegin = () => ({ type: "LOGIN_SUCCESS" })
export const loginError = (error) => ({ type: "LOGIN_SUCCESS", error })




export function showLoginError(loginError) {
  return {
    type: SHOW_LOGIN_ERROR,
    payload: loginError
  };
}

// REDUCERS
const initialState = {
  authentication: '',
  user: {},
  isLoading: false,
  error: {},
  showLoginError: false
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH_STATE:
      const authState = {
        ...state,
        authentication: action.payload
      };
      return authState;

    case SHOW_LOGIN_ERROR:
      const loginErrorState = {
        ...state,
        showLoginError: action.payload
      };
      return loginErrorState;
    case "LOGIN_SUCCESS":
     return {
      ...state,
      isLoading: false,
      user: action.user
     }
     case "LOGIN_ERROR":
     return {
      ...state,
      error: action.error
     }
     case "LOGIN_BEGIN":
     return {
       ...state,
       isLoading: true
     }
    default:
      return state;
  }
}