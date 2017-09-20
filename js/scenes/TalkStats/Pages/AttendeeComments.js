import React from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Comment } from '../Components/AttendeeCommentsComponents';
import { colors } from '../../../config/styles';
import { styles, commentStyles } from '../styles';

const AttendeeComments = ({ comments }) => {
  return (
    <View style={styles.sceneContainer}>
      <LinearGradient
        colors={[colors.lightGrey, colors.darkGrey]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.8 }}
      >
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.skillsHeader}>
            Talk Feedback
          </Text>
          <Comment 
            cStyles={commentStyles} 
            commentDir={commentStyles.commentBarRight}
          />
          <Comment 
            cStyles={commentStyles} 
            commentDir={commentStyles.commentBarLeft}
          />
        </ScrollView>
      </LinearGradient >
    </View>
  );
}

export default AttendeeComments;
