import React, { Component } from 'react';
import { Dimensions, Image } from 'react-native';
import Surveys from './Surveys';

class SurveysContainer extends Component {
  static route = {
    navigationBar: {
      title: <Image
        style={{ width: Dimensions.get('window').width / 2.5, height: 27 }}
        source={require('../../assets/images/beta_talks_logo_black_header.png')}
      />
    }
  }
  render() {
    return (
      <Surveys />
    )
  }
}

export default SurveysContainer;
