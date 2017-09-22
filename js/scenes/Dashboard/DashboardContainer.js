import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { auth } from '../../config/firebase';

import Dashboard from './Pages/Dashboard';
import MyTalks from './Pages/MyTalks';
import Loader from '../../components/Loader';
import CustomPageDot from '../../components/CustomPageDot';
import { findTalks } from '../Lib/helperFunctions';
import { colors } from '../../config/styles';
import { styles } from './styles';

const DashboardContainer = ({ userData, talksData }) => {
  const { uLoading, users } = userData;
  const { tLoading, talks } = talksData;
  const currUser = users[auth.currentUser.uid];
  if (uLoading || tLoading) return <Loader />;
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
      <Dashboard stats={currUser.speakerStats} />
      <MyTalks 
        talks={findTalks(currUser.myTalks, talks)} 
        userName={currUser.fullName}
      />
    </Swiper>
  );
}

DashboardContainer.route = {
  navigationBar: {
    title: "my speaker dashboard"
  }
};

const mapStateToProps = state => ({
  userData: state.users,
  talksData: state.talks
});

export default connect(mapStateToProps)(DashboardContainer);

DashboardContainer.propTypes = {
  userData: PropTypes.shape({
    uLoading: PropTypes.bool,
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
    })
  }).isRequired,
  talksData: PropTypes.shape({
    tLoading: PropTypes.bool,
    talks: PropTypes.shape({
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
};
