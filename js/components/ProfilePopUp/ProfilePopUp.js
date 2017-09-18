import React from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const ProfilePopUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.popup}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}

export default ProfilePopUp;