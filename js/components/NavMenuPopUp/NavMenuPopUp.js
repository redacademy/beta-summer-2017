import React from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import Modal from 'react-native-modal';
import { logout } from '../../config/helpers';
import { pushSceneFromModal } from '../../navigation/navHelpers';
import { popModal } from '../../redux/modules/moreModal';
import { styles } from './styles';
import settings from '../../assets/icons/setting.png';
import profile from '../../assets/icons/profile.png';
import logoutIcon from '../../assets/icons/cancel_icon.png';
import question from '../../assets/icons/quick_guide.png';

const NavMenuPopUp = ({ isModalVisible, navigatorUID, dispatch }) => {

  const popUpItems = [
    {title: 'Settings', icon: settings, func: console.log, action: 'settings page'},
    {title: 'View / Edit Profile', icon: profile, func: console.log, action: 'profile page'},
    {title: 'Survey', icon: question, func: pushSceneFromModal, action: [navigatorUID, 'surveys']},
    {title: 'Log Out', icon: logoutIcon, func: logout, action: null},
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

export default connect(mapStateToProps )(NavMenuPopUp);