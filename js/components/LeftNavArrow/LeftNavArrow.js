import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';

import { styles } from './styles';

const LeftNavArrow = ({ navAction }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowContainer} onPress={navAction}>
        <Image style={styles.navArrowImg}
          source={require('../../assets/images/arrow.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default LeftNavArrow;