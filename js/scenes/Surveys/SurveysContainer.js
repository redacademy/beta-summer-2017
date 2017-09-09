import React, { Component } from 'react';
import { Dimensions, Image, Text } from 'react-native';
import Surveys from './Surveys';
import Loader from '../../components/Loader';

class SurveysContainer extends Component {
  static route = {
    navigationBar: {
      title: <Image
        style={{ width: Dimensions.get('window').width / 2.5, height: 27 }}
        source={require('../../assets/images/beta_talks_logo_white_header.png')}
      />
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      loading: true, 
      questions: [],
      answers: {},
      selectedValue: -1,
      n: 0
    };
  }

  componentDidMount() {
    fetch("https://betatalks-7fc6d.firebaseio.com/questions.json")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ questions: data, loading: false })
      }).catch(err => console.log('Error fetching JSON', err))
  }

  dispatchAnswer(question, quality, answer) {
    const answerWithQ = { ...answer, quality, question };
    this.setState({
      answers: { [question]: answerWithQ },
      selectedValue: answer.value
    });
  }

  nextQuestion = () => {
    this.setState({ n: this.state.n + 1})
  }

  previousQuestion = () => {
    this.setState({ n: this.state.n - 1})
  }

  renderQuestion = (questions, dispatch, selectedValue, n) => {
    if (n + 1 >= questions.length) {
      return <Text>Boom!</Text>
    } else {
      return (
        <Surveys
          n={n}
          dispatchAnswer={dispatch}
          questions={questions}
          question={questions[n]}
          nextQuestion={this.nextQuestion}
          previousQuestion={this.previousQuestion}
          selectedValue={selectedValue}
        />
      );
    }
  }

  render() {
    if (this.state.loading) return <Loader />;
    return this.renderQuestion(this.state.questions, this.dispatchAnswer.bind(this), this.state.selectedValue, this.state.n);
  }
}

export default SurveysContainer;
