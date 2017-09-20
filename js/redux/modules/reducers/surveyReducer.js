const initialState = {
  loading: true,
  surveyComments: '',
  surveyAnswers: {},
  talkObj: {},
  feedbackError: {},
  feebackSuccess: false,
  feedbackLoading: false
};

export function SurveyReducer(state = initialState, action) {
  switch (action.type) {
  case 'SET_SURVEY_ANSWERS':
    return {
      ...state,
      surveyAnswers: {
        ...state.surveyAnswers,
        ...action.surveyAnswers
      }
    };
  case 'SET_SURVEY_COMMENTS':
    return {
      ...state,
      surveyComments: action.surveyComments
    };
  case 'SET_TALK_DATA': 
    return {
      ...state,
      talkObj: action.talkData
    }
  case 'FEEDBACK_SUCCESS':
    return {
      ...state,
      feedbackSuccess: true
    }
  case 'FEEDBACK_ERROR':
    return {
      ...state,
      feedbackError: action.error
    }
  case 'FEEDBACK_BEGIN': 
    return {
      ...state,
      feedbackLoading: false 
    }
  default:
    return state;
  }
}
