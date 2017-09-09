import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loader from '../../components/Loader';
import Speaker from './Speaker';

class SpeakerContainer extends Component {

  static route = {
    navigationBar: {
      title: 'speaker',
    }
  }
  
  constructor(props) {
    super(props);
    this.state = {
      showWarningModal: false
    };
  }

  displayWarningModal = modalState => this.setState({ showWarningModal: modalState });
  
  checkRespondent = () => {
    const currTalk = this.props.speakerData.item.talk_id;
    // using a static id for testing
    const currUser = 'EVyPYeHeziX06GqVO9nMZ8ieONh1';
    return this.props.talkData[currTalk].respondents[currUser];
  }

  render() {
    return (
      <Speaker
        speakerData={this.props.speakerData.item}
        checkRespondent={this.checkRespondent}
        displayWarningModal={this.displayWarningModal}
        warningModalState={this.state.showWarningModal}
      />
    )
  }
}

const mapStateToProps = state => ({
  talkData: state.talks.talks
});

export default connect(mapStateToProps)(SpeakerContainer);
