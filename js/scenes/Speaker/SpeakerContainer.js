import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader';
import Speaker from './Speaker';

class SpeakerContainer extends Component {

  static route = {
    navigationBar: {
      title: 'speaker',
    }
  }

  render() {
    return (
      <Speaker
        speakerData={this.props.speakerData.item}
      />
    )
  }
}
export default SpeakerContainer;
