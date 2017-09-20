import React from 'react';
import {
  Image,
  View,
  Text
} from 'react-native';

export const Comment = ({ comment, cStyles, commentDir }) => (
  <View style={commentDir}>
    <Image
      style={cStyles.commenterAvatar}
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
