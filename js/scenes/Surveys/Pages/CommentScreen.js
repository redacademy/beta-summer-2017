import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  Text,
  TextInput,
  View
} from 'react-native';
import { GoalsModal } from '../SurveyComponents/SurveysComponents';
import LeftNavArrow from '../../../components/LeftNavArrow';
import SurveyButton from '../../../components/SurveyButton';
import { styles } from '../styles';

const CommentScreen = ({
  dispatchComments,
  displayGoalModal,
  modalState,
  prevQuestion,
  previousQuestionFunc,
  submitSurvey
}) => (
  <ScrollView style={styles.sceneContain}>
    <View style={styles.background}>
      <View>
        <GoalsModal
          onPress={() => displayGoalModal(!modalState)}
          modalState={modalState}
        />
        <Text style={styles.titleQuestion}>
          Any Additional Comments?
        </Text>
        <View style={styles.questionsContainer}>
          <TextInput
            style={styles.commentBox}
            multiline
            onChangeText={text => dispatchComments(text)}
          />
        </View>
      </View>
      <View style={styles.progressContainer}>
        <LeftNavArrow navAction={() => previousQuestionFunc(prevQuestion.question)} />
        <SurveyButton
          text="Submit &amp; Finish"
          onPress={() => submitSurvey()}
        />
      </View>
    </View>
  </ScrollView>
);

export default CommentScreen;

CommentScreen.propTypes = {
  dispatchComments: PropTypes.func.isRequired,
  displayGoalModal: PropTypes.func.isRequired,
  modalState: PropTypes.bool.isRequired,
  prevQuestion: PropTypes.shape({
    quality: PropTypes.string,
    question: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.shape({
      answer: PropTypes.string,
      value: PropTypes.number
    })),
  }).isRequired,
  previousQuestionFunc: PropTypes.func.isRequired,
  submitSurvey: PropTypes.func.isRequired
};
