import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import Swiper from 'react-native-swiper';

import Dashboard from './Pages/Dashboard';
import MyTalks from './Pages/MyTalks';
import Loader from '../../components/Loader';
import CustomPageDot from '../../components/CustomPageDot';
import { findTalks } from '../Lib/helperFunctions';
import { colors } from '../../config/styles';
import { styles } from './styles';

class DashboardContainer extends Component {

  static route = {
    navigationBar: {
      title: "my speaker dashboard"
    }
  }

  render() {
    const { uLoading, users } = this.props.userData;
    const { tLoading, talks } = this.props.talksData;
    const testUser = users["dKJaZ8tuniPW1Ee2BduSQQ8wSsp2"];

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
        <Dashboard stats={testUser.speakerStats} />
        <MyTalks talks={findTalks(testUser.myTalks, talks)} />
      </Swiper>
    );
  }
}

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
