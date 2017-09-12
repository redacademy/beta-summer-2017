import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ImagePickerIOS } from 'react-native';
import Profile from './Profile';
import { 
  updateBioField,
  updateGoalsField,
  updateSocialMedia,
  updateImageUrlField
} from '../../redux/modules/user-forms';

import { customFieldsUpdater } from '../../config/helpers';
import { auth } from '../../config/firebase';

class ProfileContainer extends Component {

  static route = {
    navigationBar: {
      title: 'EDIT PROFILE',
    }
  }

  handleBio = (value) => {
    this.props.dispatch(updateBioField(value));
  }

  handleGoals = (value, id) => {
    this.props.dispatch(updateGoalsField({ [id]: value }));
  }

  handleSocialMedia = (value, type) => {
    this.props.dispatch(updateSocialMedia({ [type]: value }))
  }

  handleImageUpload = () => {
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.props.dispatch(updateImageUrlField(imageUri));
    }, error => console.error(error));
  }

  updateProfile = () => {
    const options = {
      bio: this.props.bioField,
      goals: this.props.goalsField,
      socialMedia: this.props.socialMedia
    }
    customFieldsUpdater(auth.currentUser.uid, options)
  }

  render() {
    return (
      <Profile
        bioField={this.props.bioField}
        goalsField={this.props.goalsField}
        imageUrl={this.props.imageUrl}
        socialMedia={this.props.socialMedia}
        user={this.props.users.users[auth.currentUser.uid]}
        handleBio={this.handleBio}
        handleGoals={this.handleGoals}
        handleSocialMedia={this.handleSocialMedia}
        handleImageUpload={this.handleImageUpload}
        updateProfile={this.updateProfile}
      />
    )
  }
}

const mapStateToProps = state => ({
  bioField: state.forms.bioField,
  goalsField: state.forms.goalsField,
  imageUrl: state.forms.imageUrl,
  socialMedia: state.forms.socialMediaUrls,
  users: state.users
});

ProfileContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  bioField: PropTypes.string,
  goalsField: PropTypes.shape({
    goalOne: PropTypes.string,
    goalTwo: PropTypes.string,
    goalThree: PropTypes.string
  }),
  imageUrl: PropTypes.string,
  socialMedia: PropTypes.shape({
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    linkedIn: PropTypes.string
  }),
  users: PropTypes.shape({
    users: PropTypes.shape({
      bio: PropTypes.string,
      email: PropTypes.string,
      fullName: PropTypes.string,
      goals: PropTypes.shape({
        goalOne: PropTypes.string,
        goalTwo: PropTypes.string,
        goalThree: PropTypes.string,
      }),
      imageUrl: PropTypes.string,
      socialMediaUrls: PropTypes.shape({
        facebook: PropTypes.string,
        linkedIn: PropTypes.string,
        twitter: PropTypes.string,
      }),
      speakerStats: PropTypes.arrayOf(PropTypes.shape({
        quality: PropTypes.string,
        submitAmnt: PropTypes.number,
        value: PropTypes.number
      })),
      user_id: PropTypes.string
    })
  })
};

export default connect(mapStateToProps)(ProfileContainer);
