import React, { Component } from 'react'
import { Text, View } from 'react-native';

import { styles } from './styles';
import SurveyButton from '../../components/SurveyButton';
import { returnToHome, returnToEvents, returnToSpeaker } from '../../navigation/navHelpers';

class SurveyCompleteContainer extends Component {

  static route = {
    navigationBar: {
      title: "Submit Complete",
      renderLeft: () => null
    }
  }

  render() {
    const buttons = [
      { text: "Home", action: returnToHome },
      { text: "Events", action: returnToEvents },
      { text: "Speaker's Page", action: returnToSpeaker }
    ];

    return (
      <View style={styles.sceneContainer}>
        <View style={styles.background}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Thanks!</Text>
            <Text style={styles.text}>Your feedback has been submitted.</Text>
            {buttons.map(button => (
              <SurveyButton
                key={button.text}
                text={button.text}
                onPress={() => button.action()}
                cStyle={styles.buttonContainer}
              />
            ))}
          </View>
        </View>
      </View>
    )
  }
}

export default SurveyCompleteContainer;
