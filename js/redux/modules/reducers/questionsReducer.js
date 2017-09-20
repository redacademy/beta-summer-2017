const initialState = {
  loading: false,
  questions: [],
  error: {}
};

export function QuestionsReducer(state = initialState, action) {
  switch (action.type) {
  case 'GET_QUESTIONS_BEGIN':
    return {
      ...state,
      loading: true
    }
  case 'GET_QUESTIONS_SUCCESS':
    return {
      ...state,
      loading: false,
      questions: action.questions
    }
  case 'GET_QUESTIONS_ERROR':
    return {
      ...state,
      error: action.error
    }
  default:
    return state;
  }
}