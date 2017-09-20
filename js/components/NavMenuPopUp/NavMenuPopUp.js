import React from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { logout } from '../../config/helpers';
import { auth } from '../../config/firebase';
import { pushSceneFromModal } from '../../navigation/navHelpers';
import { popModal } from '../../redux/modules/moreModal';
import { styles } from './styles';
import settings from '../../assets/icons/setting.png';
import profile from '../../assets/icons/profile.png';
import logoutIcon from '../../assets/icons/cancel_icon.png';
import question from '../../assets/icons/quick_guide.png';

const NavMenuPopUp = ({ isModalVisible, navigatorUID, dispatch }) => {

  function dismissModalWithPush([navigatorUID, scene]) {
    if(auth.currentUser) {
      dispatch(popModal(!isModalVisible));
      pushSceneFromModal([navigatorUID, scene]);
    } else {
      Alert.alert('You must be logged in to view the requested page')
    }  
  }

  function combinedLogout([navigatorUID, scene]) {
    if(auth.currentUser) {
      dispatch(popModal(!isModalVisible));      
      logout();
      pushSceneFromModal([navigatorUID, scene]);
    } else {
      Alert.alert('You are not currently logged in');
    }
  }

  const popUpItems = [
    {title: 'Settings', icon: settings, func: dismissModalWithPush, action: [navigatorUID, 'settings']},
    {title: 'View / Edit Profile', icon: profile, func: dismissModalWithPush, action: [navigatorUID, 'profile']},
    {title: 'Log Out', icon: logoutIcon, func: combinedLogout, action: [navigatorUID, 'landing']},
  ];

  const PopUpList = ({ data }) => {
    const { title, icon, func, action } = data;
    return (
      <TouchableOpacity
        onPress={() => func(action)}
      >
        <View style={styles.menuItem}>
          <Image style={styles.menuIcon} source={icon} />
          <Text style={styles.popUpText}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => dispatch(popModal(!isModalVisible))}
      >
        <View style={styles.modal}>
          {
            popUpItems.map((data, idx) => (
              <PopUpList data={data} key={idx} />
            ))
          }
        </View>
      </Modal>
    </View>
  )
}

const mapStateToProps = (state) => ({
  isModalVisible: state.modal.isModalVisible,
  navigatorUID: state.navigation.currentNavigatorUID
})

PropTypes.NavMenuPopUp = {
  isModalVisible: PropTypes.bool.isRequired,
  dispatch: PropTypes.func,
}

export default connect(mapStateToProps)(NavMenuPopUp);