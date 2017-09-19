import React from 'react';
import { Image, View, Text } from 'react-native';
import { styles } from './styles';

const SurveyGoalModal = ({ goals = ["No goals specified..."] }) => {
  return (
    <View style={styles.popup}>
      <Text style={styles.title}>Speaker Goals</Text>
      <Text style={styles.text}>
        When answering the survey please keep in mind the following goals the speaker would like feedback on:
      </Text>
      <View style={styles.goals}>
        {goals.map((goal, index) => {
          return (
            <Text key={index} style={styles.goalText}>
              {index + 1}. {goal}
            </Text>
          );
        })}
      </View>
      <Text style={[styles.text, styles.popUpInstructions]}>
        You can review the speaker goals at any time during the survey by clicking here:
      </Text>
      <Image
        style={styles.targetIcon}
        source={require('../../assets/icons/target.png')}
      />
    </View>
  );
}

export default SurveyGoalModal;