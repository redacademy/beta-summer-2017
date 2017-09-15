import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import Modal from 'react-native-modal';
import { logout } from '../../config/helpers';
import { popModal } from '../../redux/modules/moreModal';
import { styles } from './styles';

class NavMenuPopUp extends Component {
  render() {
    return (
      <View>
        <Modal
          isVisible={this.props.isModalVisible}
          onBackdropPress={() => this.props.dispatch(popModal(!this.props.isModalVisible))}
        >
          <View style={styles.modal}>
            <TouchableOpacity
              onPress={() => console.log('settings page')}
            >
              <View style={styles.menuItem}>
                <Image style={styles.menuIcon} source={require('../../assets/icons/setting.png')} />
                <Text style={styles.popUpText}>Settings</Text>
              </View>  
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.log('go to settings page')}
            >
              <View style={styles.menuItem}>
                <Image style={styles.menuIcon} source={require('../../assets/icons/profile.png')} />
                <Text style={styles.popUpText}>View / Edit Profile</Text>
              </View>  
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => logout()}
            >
              <View style={styles.menuItem}>
                <Image style={styles.menuIcon} source={require('../../assets/icons/cancel_icon.png')} />
                <Text style={styles.popUpText}>Log Out</Text>
              </View>  
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  isModalVisible: state.modal.isModalVisible
})

export default connect(mapStateToProps)(NavMenuPopUp);