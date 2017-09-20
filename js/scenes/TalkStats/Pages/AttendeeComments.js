import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Comment } from '../Components/AttendeeCommentsComponents';
import { colors } from '../../../config/styles';
import { styles, commentStyles } from '../styles';

const AttendeeComments = ({ comments }) => {
  return (
    <View style={styles.sceneContainer}>
      <LinearGradient
        style={StyleSheet.absoluteFill}
        colors={[colors.lightGrey, colors.darkGrey]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.8 }}
      >
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.skillsHeader}>
            Talk Feedback
          </Text>
          {(comments) && comments.map((comment, index) => {
            if (index === 0 || index % 2 === 0) {
              return (<Comment
                key={index}
                comment={comment}
                cStyles={commentStyles}
                imgStyle={commentStyles.imgRight}
                commentDir={commentStyles.commentBarRight}
              />);
            } else {
              return (<Comment
                key={index}
                comment={comment}
                cStyles={commentStyles}
                imgStyle={commentStyles.imgLeft}
                commentDir={commentStyles.commentBarLeft}
              />);
            }
          })}
        </ScrollView>
      </LinearGradient >
    </View>
  );
}

export default AttendeeComments;
