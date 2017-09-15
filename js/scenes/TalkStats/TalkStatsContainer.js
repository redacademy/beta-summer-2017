import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import Swiper from 'react-native-swiper';

import TalkStats from './Pages/TalkStats';
import Loader from '../../components/Loader';
import AttendeeComments from './Pages/AttendeeComments';
import CustomPageDot from '../../components/CustomPageDot';
import { colors } from '../../config/styles';
import { styles } from './styles';

class TalkStatsContainer extends Component {

  static route = {
    navigationBar: {
      title(params) {
        return params.talkData.talk.title.toLowerCase();
      } 
    }
  }

  render() {
    const talkStats = this.props.talkData.talk.talkStats;
    
    if (!talkStats) return <Loader />;
    return (
      <Swiper 
        loop={false}
        showsButtons
        activeDotColor={colors.taxiYellow}
        dot={<CustomPageDot />}
        nextButton={<Text style={styles.buttonText}>›</Text>}
        prevButton={<Text style={styles.buttonText}>‹</Text>}
        paginationStyle={{ bottom: 11 }}
      >
        <TalkStats talkStats={talkStats} />
        <AttendeeComments />
      </Swiper>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.users,
  talksData: state.talks
});

export default connect(mapStateToProps)(TalkStatsContainer);

TalkStatsContainer.propTypes = {
  talkData: PropTypes.shape({
    talk: PropTypes.shape({
      eventCode: PropTypes.string,
      event_id: PropTypes.string,
      respondents: PropTypes.objectOf(PropTypes.bool),
      score: PropTypes.number,
      speaker_id: PropTypes.string,
      talkStats: PropTypes.arrayOf(PropTypes.shape({
        quality: PropTypes.string,
        value: PropTypes.number,
        submitAmnt: PropTypes.number
      })),
      talk_id: PropTypes.string,
      title: PropTypes.string
    })
  }).isRequired
}