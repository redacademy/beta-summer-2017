import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import SurveyButton from '../../components/SurveyButton/';
import { styles } from './styles';

const AccountSettings = ({ handleImageUpload, imageUrl, handleEmail, emailField, handlePassword, passwordField, handleFullname, fullnameField }) => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={() => handleImageUpload()}>
            <Image
              style={styles.image}
              source={{ uri: imageUrl }}
            />
            {/* <Image
            style={styles.pencil}
            source={require('../../assets/icons/pencil.png')}
          /> */}
          </TouchableOpacity>
        </View>
        <Text style={styles.headings}>First & Last Name</Text>
        <View style={styles.fieldsContainer}>
          <TextInput
            style={styles.inputSmall}
            onChangeText={handleFullname}
            value={fullnameField}
            placeholder="First & Last Name"
          />
          {/* <Image
            style={styles.pencil}
            source={require('../../assets/icons/pencil.png')}
          /> */}
        </View>

        <Text style={styles.headings}>Email</Text>
        <View style={styles.fieldsContainer}>
          <TextInput
            style={styles.inputSmall}
            onChangeText={handleEmail}
            autoCapitalize="none"
            value={emailField}
            placeholder="Email"
          />
          {/* <Image
            style={styles.pencil}
            source={require('../../assets/icons/pencil.png')}
          /> */}
        </View>

        <Text style={styles.headings}>Password</Text>
        <View style={styles.fieldsContainer}>
          <TextInput
            style={styles.inputSmall}
            onChangeText={handlePassword}
            autoCapitalize="none"
            value={passwordField}
            placeholder="Password"
          />
          {/* <Image
            style={styles.pencil}
            source={require('../../assets/icons/pencil.png')}
          /> */}
        </View>
        <SurveyButton
          text="save settings"
        />
      </View>
    </ScrollView>
  )
}

export default AccountSettings;