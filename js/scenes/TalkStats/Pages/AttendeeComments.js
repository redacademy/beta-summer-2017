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

const AttendeeComments = ({ comments = [] }) => {
  const isEven = (n) => !!(n % 2 === 0)

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
          {comments.map((comment, index) => {
            const { imgRight, commentBarRight, commentBarLeft, imgLeft } = commentStyles;
            return (<Comment
              key={index}
              comment={comment}
              cStyles={commentStyles}
              imgStyle={isEven(index) ? imgRight : imgLeft}
              commentDir={isEven(index) ? commentBarRight : commentBarLeft}
            />);
          })}
        </ScrollView>
      </LinearGradient >
    </View>
  );
}

export default AttendeeComments;
