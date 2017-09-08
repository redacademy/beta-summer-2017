import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';

//TODO: Replace Ionicons with logo assets after converting to png

const OnBoardingPopUp = () => {
  return (
    <View style={styles.onBoardingPopUpWrapper}>
      <View style={styles.onBoardingPopUpCloser}>
        <TouchableOpacity
          onPress={() => console.log('mic check')}
        >
          <Icon name="md-close-circle" size={25} color="#FFCC01" />
        </TouchableOpacity>
      </View>  
      <Text style={styles.onBoardingPopUpHeader}>Welcome! Here are some tips to help get you started</Text>
      <View style={styles.onBoardingPopUpData}>
        <Image source={require('../../assets/icons/home_icon.png')} style={styles.onBoardingPopUpImage} />
        <View style={styles.onBoardingPopUpData}>
          <Text style={styles.onBoardingPopUpText}>
            <Text style={styles.onBoardingPopUpHighlight}>home </Text>
            is where you can return to view the main dashboard
          </Text>
        </View>
      </View>
      <View style={styles.onBoardingPopUpData}>
        <Image source={require('../../assets/icons/events_icon.png')} style={styles.onBoardingPopUpImage} />
        <Text style={styles.onBoardingPopUpText}>
          <Text style={styles.onBoardingPopUpHighlight}>events </Text>        
          will take you to upcoming events and tonight's speakers
        </Text>
      </View>
      <View style={styles.onBoardingPopUpData}>
        <Image source={require('../../assets/icons/newtalk_icon.png')} style={styles.onBoardingPopUpImage} />
        <Text style={styles.onBoardingPopUpText}>
          <Text style={styles.onBoardingPopUpHighlight}>new talk </Text>
          launches an e-mail to Soapbox Admin to sign up for a talk or to ask questions
        </Text>
      </View>
      <View style={styles.onBoardingPopUpData}>
        <Image source={require('../../assets/icons/dashboard_icon.png')} style={styles.onBoardingPopUpImage} />
        <Text style={styles.onBoardingPopUpText}>
          <Text style={styles.onBoardingPopUpHighlight}>dashboard </Text>
          is where you will find all your feedback data as a speaker
        </Text>
      </View>
      <View style={styles.onBoardingPopUpData}>
        <Image source={require('../../assets/icons/more_icon.png')} style={styles.onBoardingPopUpImage} />
        <Text style={styles.onBoardingPopUpText}>
          <Text style={styles.onBoardingPopUpHighlight}>menu </Text>
          is where this handy guide lives, along with settings and editing your profile
        </Text>
      </View>
    </View>  
  )
}

export default OnBoardingPopUp;