import { betaquestions } from '../../../config/firebase';
import store from '../../store';

function getQuestionsBegin() {
  return { type: 'GET_QUESTIONS_BEGIN' };
}

function getQuestionsSuccess(questions) {
  return { type: 'GET_QUESTIONS_SUCCESS', questions };
}

function getQuestionsError(error) {
  return { type: 'GET_QUESTIONS_ERROR', error };
}

(function() {
  store.dispatch(getQuestionsBegin());
  betaquestions.on('value', function (snapshot, error) {
    if (error) {
      store.dispatch(getQuestionsError(error));
    }
    store.dispatch(getQuestionsSuccess(snapshot.val()));
  });
})();