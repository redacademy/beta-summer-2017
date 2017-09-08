import { auth, betadb } from './firebase';
//users
const user = { //input format for initial signup form;
  email: 'test@pest.com',
  password: 'password',
  name: 'Firstname Lastname'
}
//input format for profile data;
const profile = {
  "bio": "Entrepreneur, traveller",
  "goals": {
    "goalOne": "Become a better speaker",
    "goalThree": "",
    "goalTwo": "Improve my posture"
  },
  "myTalks": ["id", "id2"],
  "socialMediaUrls": {
    "facebook": "",
    "linkedIn": "",
    "twitter": ""
  },
  "speakerStats": [{
    "quality": "Credibility",
    "submitAmnt": 1,
    "value": 6
  }, {
    "quality": "Clarity",
    "submitAmnt": 1,
    "value": 8
  }, {
    "quality": "Audience Engagement",
    "submitAmnt": 1,
    "value": 6
  }, {
    "quality": "Adaptability to Audience",
    "submitAmnt": 1,
    "value": 5
  }, {
    "quality": "Body Language",
    "submitAmnt": 1,
    "value": 8
  }, {
    "quality": "Deliverability",
    "submitAmnt": 1,
    "value": 7
  }, {
    "quality": "Story Telling",
    "submitAmnt": 1,
    "value": 5
  }]
}

//login/logout
export function login(profile) {
  auth.signInWithEmailAndPassword(profile.email, profile.password)
    .catch(function (error) {
      console.log(error.code, ' -code', error.message, ' -message');
    });
}
export function logout() {
  auth.signOut().catch(function (error) {
    console.log('logout fail', error)
  });
}
//create
export async function signUp(profile) {
  await auth.createUserWithEmailAndPassword(profile.email, profile.password).catch(function (error) {
    console.log(error.code, ' -code', error.message, ' -message');
  });
  await updateFullname(profile.name, auth.currentUser);
  await profilesetup(auth.currentUser.uid);
}
profilesetup = (key) => {
  const updates = {}
  updates['/users/' + key] = { profile: 'mockdata' }
  betadb.update(updates)
}
//update
export function updateEmail(email, user) {
  user.updateEmail(email).catch(function (error) {
    console.log(error)
  });
}
export function updateFullname(name, user) {
  user.updateProfile({
    displayName: name,
  }).catch(function (error) {
    console.log(error)
  });
}

//update speakerstats after survey
//delete

//events

//attend an event (leave?)

//talks
//update talks speaker stats