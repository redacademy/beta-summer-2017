import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import Swiper from 'react-native-swiper';

import TalkStats from './Pages/TalkStats';
import Loader from '../../components/Loader';
import AttendeeComments from './Pages/AttendeeComments';
import CustomPageDot from '../../components/CustomPageDot';
import { findRespondentDetails } from '../Lib/helperFunctions';
import { colors } from '../../config/styles';
import { styles } from './styles';

const TalkStatsContainer = ({ talkData, userData }) => {
  const talkStats = talkData.talk.talkStats;
  if (!talkStats || userData.loading) return <Loader />;
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
      <AttendeeComments comments={findRespondentDetails(talkData.talk.respondents, userData.users)} />
    </Swiper>
  );
}

TalkStatsContainer.route = {
  navigationBar: {
    title(params) {
      return params.talkData.talk.title.toLowerCase();
    }
  }
};

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
  }).isRequired,
  userData: PropTypes.shape({
    loading: PropTypes.bool,
    users: PropTypes.shape({
      bio: PropTypes.string,
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
  }).isRequired
}