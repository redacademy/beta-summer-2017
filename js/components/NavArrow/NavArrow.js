import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';

import { styles } from './styles';

const NavArrow = ({ navAction }) => {
  return (
    <View>
      <TouchableOpacity>
        <Image style={styles.r10LogoImage}
          source={require('../../assets/images/left_arrow.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NavArrow;