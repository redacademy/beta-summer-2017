import React from 'react';
import {
  Image,
  View,
  ScrollView,
  Text
} from 'react-native';
import RadioButton from '../../components/RadioButton';
import ProgressBar from '../../components/ProgressBar';
import LeftNavArrow from '../../components/LeftNavArrow';
import RightNavArrow from '../../components/RightNavArrow';
import { styles } from './styles';

const Surveys = ({
  n, 
  dispatchAnswer, 
  finishPopUp,
  question, 
  questions, 
  nextQuestion,
  previousQuestion,
  selectedValue 
}) => {
  return (
    <ScrollView style={styles.sceneContain}>
      <View style={styles.background}>
        {(question) ?
          <View>
            <Image
              style={styles.targetIcon}
              source={require('../../assets/icons/target.png')}
            />
            <Text style={styles.titleQuestion}>
              {questions.indexOf(question) + 1}. {question.question}
            </Text>
            <View style={styles.questionsContainer}>
              {question.answers.map(answer => (
                <View key={answer.answer}>
                  <RadioButton
                    isSelected={answer.value === selectedValue}
                    onPress={() => dispatchAnswer(question.question, question.quality, answer)}
                    value={answer.value}
                  >
                    <View>
                      <Text style={(answer.subtext) ? styles.questionsTextWSub : styles.questionsText}>{answer.answer}</Text>
                      {(answer.subtext) && <Text style={styles.questionSubtext}>{answer.subtext}</Text>}
                    </View>
                  </RadioButton>
                </View>
              ))}
            </View>
          </View>
          : null}
        <View style={styles.progressContainer}>
          {(questions.indexOf(question) === 0)
            ? null
            : <LeftNavArrow navAction={() => previousQuestion()} />}
          <ProgressBar
            overlayText={`${questions.indexOf(question) + 1}/${questions.length}`}
            completePerc={questions.indexOf(question) + 1}
            totalSteps={questions.length}
          />
          <RightNavArrow
            navAction={(questions.indexOf(question) >= questions.length - 1)
              ? () => finishPopUp()
              : () => nextQuestion()
            } 
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default Surveys;
