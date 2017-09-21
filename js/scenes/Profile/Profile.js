import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import SurveyButton from '../../components/SurveyButton/';
import pencil from '../../assets/icons/pencil.png';
import accountIcon from '../../assets/icons/account_icon.png';
import { styles } from './styles';

const Profile = ({ updateProfile, user, handleImageUpload, imageUrl, handleBio, bioField, handleGoals, goalsField, socialMedia, handleSocialMedia }) => {

  const getImage = imageUrl || user.imageUrl

  return (
    <ScrollView style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => handleImageUpload()}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={getImage ? { uri: getImage } : accountIcon}
            />
            <Image
              style={styles.pencil}
              source={pencil}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.headings}>Personal Bio</Text>
        <View style={styles.fieldsContainer}>
          <TextInput
            style={styles.inputBig}
            onChangeText={(text) => handleBio(text)}
            value={bioField}
            multiline={true}
            maxLength={100}
            placeholder={user.bio}
          />
        </View>
        <Text style={styles.headings}>Goal One</Text>
        <View style={styles.fieldsContainer}>
          <TextInput
            style={styles.inputBig}
            onChangeText={(text) => handleGoals(text, "goalOne")}
            value={goalsField.goalOne}
            multiline={true}
            maxLength={100}
            placeholder={user.goals.goalOne}
          />
        </View>
        <Text style={styles.headings}>Goal Two</Text>
        <View style={styles.fieldsContainer}>
          <TextInput
            style={styles.inputBig}
            onChangeText={(text) => handleGoals(text, "goalTwo")}
            value={goalsField.goalTwo}
            multiline={true}
            maxLength={100}
            placeholder={user.goals.goalTwo}
          />
        </View>
        <Text style={styles.headings}>Goal Three</Text>
        <View style={styles.fieldsContainer}>
          <TextInput
            style={styles.inputBig}
            onChangeText={(text) => handleGoals(text, "goalThree")}
            value={goalsField.goalThree}
            multiline={true}
            maxLength={100}
            placeholder={user.goals.goalThree}
          />
        </View>
        <Text style={styles.headings}>Facebook</Text>
        <View style={styles.fieldsContainer}>
          <TextInput
            style={styles.inputSmall}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => handleSocialMedia(text, "facebook")}
            value={socialMedia.facebook}
            placeholder={user.socialMediaUrls.facebook}
          />
        </View>
        <Text style={styles.headings}>Twitter</Text>
        <View style={styles.fieldsContainer}>
          <TextInput
            style={styles.inputSmall}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => handleSocialMedia(text, "twitter")}
            value={socialMedia.twitter}
            placeholder={user.socialMediaUrls.twitter}
          />
        </View>
        <Text style={styles.headings}>LinkedIn</Text>
        <View style={styles.fieldsContainer}>
          <TextInput
            style={styles.inputSmall}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => handleSocialMedia(text, "linkedIn")}
            value={socialMedia.linkedIn}
            placeholder={user.socialMediaUrls.linkedIn}
          />
        </View>
        <SurveyButton
          text="save profile"
          onPress={updateProfile}
        />
        <View style={styles.button} />
      </View>
    </ScrollView >
  )
}

Profile.propTypes = {
  updateProfile: PropTypes.func.isRequired,
  user: PropTypes.shape({
    bio: PropTypes.string,
    email: PropTypes.string,
    fullName: PropTypes.string,
    goals: PropTypes.shape({
      goalOne: PropTypes.string,
      goalTwo: PropTypes.string,
      goalThree: PropTypes.string,
    }),
  }),
  handleImageUpload: PropTypes.func.isRequired,
  imageUrl: PropTypes.string,
  handleBio: PropTypes.func.isRequired,
  bioField: PropTypes.string,
  handleGoals: PropTypes.func.isRequired,
  goalsField: PropTypes.shape({
    goalOne: PropTypes.string,
    goalTwo: PropTypes.string,
    goalThree: PropTypes.string,
  }),
  socialMedia: PropTypes.shape({
    facebook: PropTypes.string,
    linkedIn: PropTypes.string,
    twitter: PropTypes.string,
  }),
  handleSocialMedia: PropTypes.func.isRequired
}

export default Profile;
