const initialState = {
  loading: true,
  surveyComments: '',
  surveyAnswers: {},
  talkObj: {}
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
  default:
    return state;
  }
}
