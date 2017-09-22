import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Dimensions, Image } from 'react-native';
import { auth } from '../../config/firebase';

import logo from '../../assets/images/beta_talks_logo_white_header.png';
import '../../redux/modules/actions/questionsActions';
import Surveys from './Pages/Surveys';
import CommentScreen from './Pages/CommentScreen';
import Loader from '../../components/Loader';
import {
  setSurveyAnswers,
  setSurveyComments,
  setTalkData,
  ExecFeedBackAsync
} from '../../redux/modules/actions/surveyActions';
import { goToSurveyComplete } from '../../navigation/navHelpers';
import { parseGoalsObjToArr } from '../Lib/helperFunctions';

class SurveysContainer extends Component {
  static route = {
    navigationBar: {
      title: <Image
        style={{ width: Dimensions.get('window').width / 2.5, height: 27 }}
        source={logo}
      />
    }
  }

  state = {
    showWarningModal: false,
    showGoalModal: false,
    selectedValue: -1,
    n: 0
  };

  componentDidMount() {
    this.props.dispatch(setTalkData(this.props.talkObj.speakerData));
    setTimeout(() => this.displayGoalModal(!this.state.showGoalModal), 500);
  }

  dispatchAnswer = (question, quality, answer) => {
    const answerWithQ = { ...answer, quality, question };
    this.props.dispatch(setSurveyAnswers({ [question]: answerWithQ }));
    this.setState({
      selectedValue: answer.value
    });
  }

  displayGoalModal = modalState => this.setState({ showGoalModal: modalState });

  closeWarningModal = () => this.setState({ showWarningModal: false });

  dispatchComments = comment => this.props.dispatch(setSurveyComments(comment))

  submitSurvey = () => {
    const talk = this.props.talkObj.speakerData;
    const surveyAns = this.props.surveyAnswers;
    const textfeedback = this.props.comments;
    const user = auth.currentUser.uid;
    // placeholder id for testing
    ExecFeedBackAsync(talk, user, surveyAns, textfeedback);
    goToSurveyComplete();
  }

  nextQuestion = (nextQuestion) => {
    const selectedAnswer = this.props.surveyAnswers[nextQuestion];
    if (this.state.selectedValue === -1) {
      this.setState({ showWarningModal: true });
    } else {
      this.setState({ 
        n: this.state.n + 1, 
        selectedValue: (selectedAnswer) ? selectedAnswer.value : -1 
      });
    }
  }

  previousQuestion = prevQuestion => {
    const prevSelectedAnswer = this.props.surveyAnswers[prevQuestion];
    this.setState({
      n: this.state.n - 1,
      selectedValue: prevSelectedAnswer.value
    })
  }

  renderQuestion = (questions, dispatch, selectedValue, n) => {
    if (n + 1 > questions.length) {
      return (
        <CommentScreen
          modalState={this.state.showGoalModal}
          displayGoalModal={this.displayGoalModal}
          submitSurvey={this.submitSurvey}
          speakerGoals={parseGoalsObjToArr(this.props.talkObj.speakerData.speaker_id.goals)}          
          dispatchComments={this.dispatchComments}
          previousQuestionFunc={this.previousQuestion}
          prevQuestion={questions[n - 1]}
        />
      );
    } else {
      return (
        <Surveys
          dispatchAnswer={dispatch}
          speakerGoals={parseGoalsObjToArr(this.props.talkObj.speakerData.speaker_id.goals)}
          goalModalState={this.state.showGoalModal}
          warningModalState={this.state.showWarningModal}
          closeWarningModal={this.closeWarningModal}
          displayGoalModal={this.displayGoalModal}
          questions={questions}
          question={questions[n]}
          nextQuestionFunc={this.nextQuestion}
          previousQuestionFunc={this.previousQuestion}
          prevQuestion={questions[n - 1]}
          nextQuestion={questions[n + 1]}
          selectedValue={selectedValue}
        />
      );
    }
  }

  render() {
    const { loading, questions } = this.props.questions;
    if (loading) return <Loader />;
    return this.renderQuestion(questions, this.dispatchAnswer, this.state.selectedValue, this.state.n);
  }
}

const mapStateToProps = state => ({
  questions: state.questions,
  surveyAnswers: state.survey.surveyAnswers,
  comments: state.survey.surveyComments
});

export default connect(mapStateToProps)(SurveysContainer);

SurveysContainer.defaultProps = {
  comments: null
};

SurveysContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  comments: PropTypes.string,
  questions: PropTypes.shape({
    loading: PropTypes.bool,
    questions: PropTypes.arrayOf(PropTypes.shape({
      quality: PropTypes.string,
      question: PropTypes.string,
      answers: PropTypes.arrayOf(PropTypes.shape({
        answer: PropTypes.string,
        value: PropTypes.number
      }))
    }))
  }).isRequired,
  surveyAnswers: PropTypes.shape({
    answer: PropTypes.string,
    value: PropTypes.number,
    quality: PropTypes.string,
    question: PropTypes.string
  }).isRequired,
  talkObj: PropTypes.shape({
    speakerData: PropTypes.shape({
      event_id: PropTypes.string,
      respondants: PropTypes.shape({
        init: PropTypes.bool,
      }),
      score: PropTypes.number,
      speaker_id: PropTypes.PropTypes.shape({
        bio: PropTypes.string,
        user_id: PropTypes.string,
        email: PropTypes.string,
        fullName: PropTypes.string,
        goals: PropTypes.objectOf(PropTypes.string),
        myTalks: PropTypes.arrayOf(PropTypes.string),
        socialMediaUrls: PropTypes.objectOf(PropTypes.string),
        speakerStats: PropTypes.arrayOf(PropTypes.shape({
          quality: PropTypes.string,
          submitAmnt: PropTypes.number,
          value: PropTypes.number
        }))
      }),
      talkStats: PropTypes.arrayOf(PropTypes.shape({
        quality: PropTypes.string,
        submitAmnt: PropTypes.number,
        value: PropTypes.number
      })),
      talk_id: PropTypes.string,
      title: PropTypes.string
    })
  }).isRequired
};
