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
import { styles } from './styles';

const Profile = ({ updateProfile, user, handleImageUpload, imageUrl, handleBio, bioField, handleGoals, goalsField, socialMedia, handleSocialMedia }) => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.imageContainer} onPress={() => handleImageUpload()}>
            <Image
              style={styles.image}
              source={{ uri: (imageUrl ? imageUrl || user.imageUrl : 'https://image.ibb.co/moG48k/account_icon.png') }}
            />
            <Image
              style={styles.pencil}
              source={require('../../assets/icons/pencil.png')}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.headings}>Personal Bio</Text>
        <View style={styles.fieldsContainer}>
          <TextInput
            style={styles.inputBig}
            onChangeText={(text) => handleBio(text)}
            value={
              bioField ?
                bioField :
                handleBio(user.bio)
            }
            multiline={true}
            maxLength={100}
            placeholder="Personal bio"
          />
        </View>
        <Text style={styles.headings}>Things you're working on</Text>
        <View style={styles.fieldsContainer}>
          <TextInput
            style={styles.inputBig}
            onChangeText={(text) => handleGoals(text, "goalOne")}
            value={
              goalsField.goalOne ?
                goalsField.goalOne :
                handleGoals(user.goals.goalOne, "goalOne")
            }
            multiline={true}
            maxLength={100}
            placeholder="Goal #1"
          />
        </View>
        <View style={styles.fieldsContainer}>
          <TextInput
            style={styles.inputBig}
            onChangeText={(text) => handleGoals(text, "goalTwo")}
            value={
              goalsField.goalTwo ?
                goalsField.goalTwo :
                handleGoals(user.goals.goalTwo, "goalTwo")
            }
            multiline={true}
            maxLength={100}
            placeholder="Goal #2"
          />
        </View>
        <View style={styles.fieldsContainer}>
          <TextInput
            style={styles.inputBig}
            onChangeText={(text) => handleGoals(text, "goalThree")}
            value={
              goalsField.goalThree ?
                goalsField.goalThree :
                handleGoals(user.goals.goalThree, "goalThree")
            }
            multiline={true}
            maxLength={100}
            placeholder="Goal #3"
          />
        </View>
        <Text style={styles.headings}>Facebook</Text>
        <View style={styles.fieldsContainer}>
          <TextInput
            style={styles.inputSmall}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => handleSocialMedia(text, "facebook")}
            value={
              socialMedia.facebook ?
                socialMedia.facebook :
                handleSocialMedia(user.socialMediaUrls.facebook, "facebook")
            }
            placeholder="Facebook"
          />
        </View>
        <Text style={styles.headings}>Twitter</Text>
        <View style={styles.fieldsContainer}>
          <TextInput
            style={styles.inputSmall}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => handleSocialMedia(text, "twitter")}
            value={
              socialMedia.twitter ?
                socialMedia.twitter :
                handleSocialMedia(user.socialMediaUrls.twitter, "twitter")
            }
            placeholder="Twitter"
          />
        </View>
        <Text style={styles.headings}>LinkedIn</Text>
        <View style={styles.fieldsContainer}>
          <TextInput
            style={styles.inputSmall}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => handleSocialMedia(text, "linkedIn")}
            value={
              socialMedia.linkedIn ?
                socialMedia.linkedIn :
                handleSocialMedia(user.socialMediaUrls.linkedIn, "linkedIn")
            }
            placeholder="LinkedIn"
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
