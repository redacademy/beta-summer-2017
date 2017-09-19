import React from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { logout } from '../../config/helpers';
import { popModal } from '../../redux/modules/moreModal';
import { styles } from './styles';
import settings from '../../assets/icons/setting.png';
import profile from '../../assets/icons/profile.png';
import logoutIcon from '../../assets/icons/cancel_icon.png';

const NavMenuPopUp = ({ isModalVisible, dispatch }) => {

  const popUpItems = [
    {title: 'Settings', icon: settings, func: null},
    {title: 'View / Edit Profile', icon: profile, func: null},
    {title: 'Log Out', icon: logoutIcon, func: logout}
  ];

  const PopUpList = ({ data }) => {
    const { title, icon, func } = data;
    return (
      <TouchableOpacity
        onPress={() => func()}
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
  isModalVisible: state.modal.isModalVisible
})

PropTypes.NavMenuPopUp = {
  isModalVisible: PropTypes.bool.isRequired,
  dispatch: PropTypes.func,
}

export default connect(mapStateToProps)(NavMenuPopUp);