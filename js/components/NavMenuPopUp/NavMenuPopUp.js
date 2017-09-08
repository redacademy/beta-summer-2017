import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { styles } from './styles';

const NavMenuPopUp = () => {
  return (
    <View style={styles.popUpWrapper}>
      <TouchableOpacity
        onPress={() => console.log('export data')}
      >
        <Text style={styles.popUpText}>Export Data</Text>
      </TouchableOpacity>  
      <TouchableOpacity
        onPress={() => console.log('view or edit profile')}
      >
        <Text style={styles.popUpText}>View/Edit Profile</Text>
      </TouchableOpacity>  
      <TouchableOpacity
        onPress={() => console.log('settings page')}
      >  
        <Text style={styles.popUpText}>Settings</Text>
      </TouchableOpacity>  
      <TouchableOpacity
        onPress={() => console.log('quick guide')}
      >          
        <Text style={styles.popUpText}>Quick Guide</Text>
      </TouchableOpacity>  
    </View>  
  )
}

export default NavMenuPopUp;