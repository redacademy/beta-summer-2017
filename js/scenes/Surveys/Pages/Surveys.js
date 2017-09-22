import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View } from 'react-native';
import { GoalsModal, RadioAnswers, WarningModal } from '../SurveyComponents/SurveysComponents';
import ProgressBar from '../../../components/ProgressBar';
import LeftNavArrow from '../../../components/LeftNavArrow';
import RightNavArrow from '../../../components/RightNavArrow';
import { styles } from '../styles';

const Surveys = ({
  dispatchAnswer,
  displayGoalModal,
  closeWarningModal,
  goalModalState,
  warningModalState,
  question,
  questions,
  nextQuestion,
  nextQuestionFunc,
  previousQuestionFunc,
  prevQuestion,
  selectedValue,
  speakerGoals
}) => {
  return (
    <ScrollView style={styles.sceneContain}>
      <View style={styles.background}>
        {(question) &&
          <View>
            <GoalsModal
              onPress={() => displayGoalModal(!goalModalState)}
              modalState={goalModalState}
              speakerGoals={speakerGoals}
            />
            <WarningModal 
              onPress={() => closeWarningModal()}
              modalState={warningModalState}
            />
            <Text style={styles.titleQuestion}>
              {questions.indexOf(question) + 1}. {question.question}
            </Text>
            <View style={styles.questionsContainer}>
              {question.answers.map(answer => (
                <RadioAnswers 
                  key={answer.answer}
                  onPress={() => dispatchAnswer(question.question, question.quality, answer)}
                  selectedValue={answer.value === selectedValue}
                  value={answer.value}
                  answer={answer.answer}
                  subtext={answer.subtext}
                />
              ))}
            </View>
          </View>}
        <View style={styles.progressContainer}>
          {(questions.indexOf(question) === 0) ||
            <LeftNavArrow navAction={() => previousQuestionFunc(prevQuestion.question)} />}
          <ProgressBar
            overlayText={`${questions.indexOf(question) + 1}/${questions.length + 1}`}
            completePerc={questions.indexOf(question) + 1}
            totalSteps={questions.length + 1}
          />
          <RightNavArrow navAction={() => nextQuestionFunc(nextQuestion.question)} />
        </View>
      </View>
    </ScrollView>
  )
}

export default Surveys;

Surveys.defaultProps = {
  prevQuestion: null,
  nextQuestion: null
};

Surveys.propTypes = {
  dispatchAnswer: PropTypes.func.isRequired,
  displayGoalModal: PropTypes.func.isRequired,
  closeWarningModal: PropTypes.func.isRequired,
  goalModalState: PropTypes.bool.isRequired,
  warningModalState: PropTypes.bool.isRequired,
  speakerGoals: PropTypes.arrayOf(PropTypes.string).isRequired,
  question: PropTypes.shape({
    quality: PropTypes.string,
    question: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.shape({
      answer: PropTypes.string,
      value: PropTypes.number
    }))
  }).isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape({
    quality: PropTypes.string,
    question: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.shape({
      answer: PropTypes.string,
      value: PropTypes.number
    }))
  })).isRequired,
  nextQuestion: PropTypes.shape({
    quality: PropTypes.string,
    question: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.shape({
      answer: PropTypes.string,
      value: PropTypes.number
    }))
  }),
  nextQuestionFunc: PropTypes.func.isRequired,
  previousQuestionFunc: PropTypes.func.isRequired,
  prevQuestion: PropTypes.shape({
    quality: PropTypes.string,
    question: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.shape({
      answer: PropTypes.string,
      value: PropTypes.number
    }))
  }),
  selectedValue: PropTypes.number.isRequired
};
