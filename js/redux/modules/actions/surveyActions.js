import { giveFeedback } from '../../../config/surveyhelpers';


export function setTalkData(talkData) {
  return { type: 'SET_TALK_DATA', talkData }
}


export function setSurveyAnswers(surveyAnswers) {
  return { type: 'SET_SURVEY_ANSWERS', surveyAnswers };
}

export function setSurveyComments(surveyComments) {
  return { type: 'SET_SURVEY_COMMENTS', surveyComments };
}


const giveFeedBackSuccess = () => ({ type: "FEEDBACK_SUCCESS" })
const giveFeedBackError = error => ({ type: "FEEDBACK_ERROR", error })
const giveFeedBackBegin = () => ({ type: "FEEDBACK_BEGIN" })

export const ExecFeedBackAsync = (talk, user, surveyAns, textfeedback) => {
  try {
    giveFeedBackBegin()
    giveFeedback(talk, user, surveyAns, textfeedback);
    giveFeedBackSuccess();
  } catch (e) {
    giveFeedBackError(e)
  }
}
