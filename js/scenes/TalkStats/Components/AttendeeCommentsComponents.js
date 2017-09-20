import React from 'react';
import {
  Image,
  View,
  Text
} from 'react-native';

export const Comment = ({ imgStyle, comment, cStyles, commentDir }) => (
  <View style={commentDir}>
    <Image
      style={[ cStyles.commenterAvatar, imgStyle ]}
      source={{ uri: comment.imageUrl }}
    />
    <View style={cStyles.commentContainer}>
      <Text style={cStyles.commentText}>
        {comment.comment}
      </Text>
      <Text style={cStyles.commenterName}>
        {comment.name}
      </Text>
    </View>
  </View>
);
