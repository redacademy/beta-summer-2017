// ACTION CONSTANTS
export const TOGGLE_POPUP = 'TOGGLE_POPUP';

// ACTION CREATORS
export const togglePopup = () => ({ type: TOGGLE_POPUP })

const initialState = {
  isVisible: false
}

// REDUCERS
export function settingsPopUp(state = initialState, action) {
  switch(action.type) {
  case TOGGLE_POPUP:
    return {
      ...state,
      isVisible: !state.isVisible 
    }
  default: 
    return state;
  }
}