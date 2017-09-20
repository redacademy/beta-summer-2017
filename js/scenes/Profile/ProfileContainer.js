import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Profile from './Profile';
import {
  updateBioField,
  updateGoalsField,
  updateSocialMedia
} from '../../redux/modules/user-forms';
import { customFieldsUpdater, takePicture } from '../../config/helpers';
import { auth } from '../../config/firebase';


const ProfileContainer = ({ bioField, goalsField, socialMedia, imageUrl, users, dispatch }) => {

  const handleBio = (value) => {
    dispatch(updateBioField(value));
  }

  const handleGoals = (value, id) => {
    dispatch(updateGoalsField({ [id]: value }));
  }

  const handleSocialMedia = (value, type) => {
    dispatch(updateSocialMedia({ [type]: value }))
  }

  const handleImageUpload = () => {
    takePicture()
  }

  const updateProfile = () => {
    const options = {
      bio: bioField,
      goals: goalsField,
      socialMedia: socialMedia
    }
    customFieldsUpdater(auth.currentUser.uid, options)
  }

  return (
    <Profile
      bioField={bioField}
      goalsField={goalsField}
      imageUrl={imageUrl}
      socialMedia={socialMedia}
      user={users.users[auth.currentUser.uid]}
      handleBio={handleBio}
      handleGoals={handleGoals}
      handleSocialMedia={handleSocialMedia}
      handleImageUpload={handleImageUpload}
      updateProfile={updateProfile}
    />
  )
}

const mapStateToProps = state => ({
  bioField: state.forms.bioField,
  goalsField: state.forms.goalsField,
  imageUrl: state.forms.imageUrl,
  socialMedia: state.forms.socialMediaUrls,
  users: state.users
});

ProfileContainer.route = {
  navigationBar: {
    title: 'EDIT PROFILE',
  }
}

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
