import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';

import { styles } from './styles';

const RightNavArrow = ({ navAction }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowContainer} onPress={navAction}>
        <Image style={styles.navArrowImg}
          source={require('../../assets/images/right_arrow.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default RightNavArrow;