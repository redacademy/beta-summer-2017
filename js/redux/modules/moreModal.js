const POP_MODAL = "POP_MODAL";

const initialState = {
  isModalVisible: false
}

//Action creator
export function popModal(isModalVisible) {
  return {
    type: POP_MODAL,
    payload: isModalVisible
  }
}

//Reducer
export function HandleModal(state = initialState, action) {
  switch(action.type) {
    case POP_MODAL:
      return {
        ...state,
        isModalVisible: action.payload
      };
      default: 
        return state;
  }
}