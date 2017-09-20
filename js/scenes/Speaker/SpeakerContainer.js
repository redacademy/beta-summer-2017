import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loader from '../../components/Loader';
import { goToSurvey } from '../../navigation/navHelpers';
import Speaker from './Speaker';

class SpeakerContainer extends Component {

  static route = {
    navigationBar: {
      title: 'speaker',
    }
  }
  
  state = {
    showWarningModal: false,
    showEventCodeModal: false,
    eventInput: ''
  };

  setEventInput = text => this.setState({ eventInput: text });

  displayWarningModal = modalState => this.setState({ showWarningModal: modalState });

  displayEventModal = modalState => this.setState({ showEventCodeModal: modalState });

  inputEventCode = () => this.setState({ showEventCodeModal: true });

  checkEventCode = async (speakerData) => {
    if (this.state.eventInput === this.props.speakerData.item.eventCode) {
      await this.setState({ showEventCodeModal: false });
      goToSurvey({ speakerData });
    } else {
      alert('Wrong event code');
    }
  }

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
        inputEventCode={this.inputEventCode}
        checkEventCode={this.checkEventCode}
        displayWarningModal={this.displayWarningModal}
        displayEventModal={this.displayEventModal}
        warningModalState={this.state.showWarningModal}
        eventModalState={this.state.showEventCodeModal}
        eventInput={this.state.eventInput}
        setEventInput={this.setEventInput}
      />
    )
  }
}

const mapStateToProps = state => ({
  talkData: state.talks.talks
});

export default connect(mapStateToProps)(SpeakerContainer);
