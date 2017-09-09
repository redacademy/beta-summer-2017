import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Modal from 'react-native-modal';

import SurveyWarningModal from '../../../components/SurveyWarningModal';
import RadioButton from '../../../components/RadioButton';
import SurveyGoalModal from '../../../components/SurveyGoalModal';
import { styles } from '../styles';

export const WarningModal = ({ modalState, onPress }) => (
  <View>
    <Modal
      isVisible={modalState}
      onBackdropPress={onPress}
    >
      <View style={{ alignSelf: 'center' }}>
        <SurveyWarningModal 
          text={"Please select an answer before attempting to progress with the survey."}
        />
      </View>
    </Modal>
  </View>
);

export const GoalsModal = ({ modalState, onPress, speakerGoals }) => (
  <View>
    <TouchableOpacity
      onPress={onPress}
      style={styles.targetIconContainer}
    >
      <Image
        style={styles.targetIcon}
        source={require('../../../assets/icons/target.png')}
      />
    </TouchableOpacity>
    <Modal
      isVisible={modalState}
      onBackdropPress={onPress}
    >
      <View style={{ alignSelf: 'center' }}>
        <SurveyGoalModal
          goals={speakerGoals}
        />
      </View>
    </Modal>
  </View>
);

export const RadioAnswers = ({ answer, onPress, selectedValue, subtext, value }) => (
  <View>
    <RadioButton
      isSelected={selectedValue}
      onPress={onPress}
      value={value}
    >
      <View>
        <Text style={(subtext) ? styles.questionsTextWSub : styles.questionsText}>{answer}</Text>
        {(subtext) && <Text style={styles.questionSubtext}>{subtext}</Text>}
      </View>
    </RadioButton>
  </View>
);

WarningModal.propTypes = {
  modalState: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

GoalsModal.propTypes = {
  modalState: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  speakerGoals: PropTypes.arrayOf(PropTypes.string).isRequired,
};

RadioAnswers.defaultProps = {
  subtext: null
};

RadioAnswers.propTypes = {
  answer: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  selectedValue: PropTypes.bool.isRequired,
  subtext: PropTypes.string,
  value: PropTypes.number.isRequired
};