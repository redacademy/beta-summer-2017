import firebase from 'firebase';
import { auth, betadb, betaevents, betatalks, betaquestions, betausers } from './firebase';

//users
const user = { //input format for initial signup form;
  email: 'test@pest.com',
  password: 'password',
  name: 'Firstname Lastname'
}

//login/logout
export function login(profile) {
  return auth.signInWithEmailAndPassword(profile.email, profile.password)
    .catch(function (error) {
      console.log(error.code, ' -code', error.message, ' -message');
    });
}
export function logout() {
  return auth.signOut()
    .catch(function (error) {
      console.log('logout fail', error)
    });
}
//create
export async function signUp(profile) {
  try {
    await auth.createUserWithEmailAndPassword(profile.email, profile.password)
    await updateFullname(profile.name, auth.currentUser);
    await initialProfileSetup(auth.currentUser.uid, profile.email, profile.name);
  } catch (error) {
    console.log(error.code, ' -code', error.message, ' -message');
  }
}
//update
function updateEmail(email, user) {
  if(email) {
   return user.updateEmail(email)
    .then(()=>updateEmailField(user.uid, email))
    .catch(function (error) {
      console.log(error)
    });
  } else {
    console.log('empty email')
  }
}
function updateFullname(name, user) {
  if(name) {
    user.updateProfile({
      displayName: name,
    })
      .then(()=>updateNameField(user.uid, name))
      .catch(function (error) {
        console.log(error)
      });
  } else {
    console.log('empty name')
  }
}
function updatePass(password, user) {
  if(password) {
    user.updatePassword(password)
    .catch(function (error) {
      console.log(error)
    });
  } else {
    console.log('empty pass')
  }
}
export const batchProfileUpdate = async (options, user, currentdata) => { 
  const credential = firebase.auth.EmailAuthProvider.credential(
    currentdata.email,
    currentdata.password
)
  try {
    await auth.currentUser.reauthenticateWithCredential(credential)
    await updateEmail(options.email, user)
    await updateFullname(options.name, user)
    await updatePass(options.password, user)
  } catch (e) {console.log(e)}
}

//set up custom profile fields
export const initialProfileSetup = (key, email, name) => {
  const updates = {}
  updates['/users/' + key] = {
    "bio": "",
    "email": email,
    "fullName": name,
    "goals": {
      "goalOne": "",
      "goalThree": "",
      "goalTwo": ""
    },
    "imageUrl": "",
    "myTalks": [],
    "socialMediaUrls": {
      "facebook": " ",
      "linkedIn": " ",
      "twitter": " "
    },
    "speakerStats": [{
      "quality": "Credibility",
      "submitAmnt": 0,
      "value": 0
    }, {
      "quality": "Clarity",
      "submitAmnt": 0,
      "value": 0
    }, {
      "quality": "Audience Engagement",
      "submitAmnt": 0,
      "value": 0
    }, {
      "quality": "Adaptability to Audience",
      "submitAmnt": 0,
      "value": 0
    }, {
      "quality": "Body Language",
      "submitAmnt": 0,
      "value": 0
    }, {
      "quality": "Deliverability",
      "submitAmnt": 0,
      "value": 0
    }, {
      "quality": "Story Telling",
      "submitAmnt": 0,
      "value": 0
    }],
    "user_id": key
  }
  betadb.update(updates)
}
//update user custom fields
const updateEmailField = (key, email) => {
  const updates = {}
  updates['/users/' + key + '/email'] = email
  return betadb.update(updates)
}
const updateNameField = (key, name) => {
  const updates = {}
  updates['/users/' + key + '/fullName'] = name
  return betadb.update(updates)
}
export const updateBio = (key, bio) => {
  const updates = {}
  updates['/users/' + key + '/bio'] = bio
  return betadb.update(updates)
}
export const updateMyGoals = (key, goals) => {
  const updates = {}
  updates['/users/' + key + '/goals'] = goals
  return betadb.update(updates)
}
export const updateSocialMedia = (key, sm) => {
  const updates = {}
  updates['/users/' + key + '/socialMediaUrls'] = sm
  return betadb.update(updates)
}
export const updateImg = (key, imageurl) => {
  const updates = {}
  updates['/users/' + key + '/imageUrl'] = imageurl
  return betadb.update(updates)
}
export const customFieldsUpdater = (key, options) => {
  updateBio(key, options.bio)
    .then(updateMyGoals(key, options.goals))
    .then(updateSocialMedia(key, options.sm))
    .catch(e => { console.log(e) })
}
//update speakerstats after survey

//delete

//events
export const eventCodeSet = (event_id, events, code) => { //pass in specific event id, all events to find this one and new code
  let hit = findEvent(event_id, events)
  const updates = {}
  updates[hit.index + '/eventCode/'] = code //set up updates for the event
  betaevents.update(updates, () => { talkCode(hit.event, code) }); //update event, onSuccess update all corresponding talks
}
export const attendEvent = (event_id, events, user_id) => {
  let hit = findEvent(event_id, events)
  if(!hit.event.attendees.includes(user_id)){
    let updates = {}
    hit.event.attendees.push(user_id)
    updates[hit.index] = hit.event
    betaevents.update(updates)
  }
}
const findEvent = (event_id, events) => {
  let result = {}
  events.find((event, index) => {
    if(event.id === event_id){
      result = {
        event, 
        index
      }
    } 
  })
  return result;
}
const talkCode = (event, code) => { //this one returns a promise if you need it to check whether the db write happened;
  const updates = event.talks.reduce((acc, talk) => {
    acc[talk + '/eventCode/'] = code
    return acc
  }, {})
  return betatalks.update(updates)
}

//talks
export const enterSurvey = (talk, code) => { //attach to the button 
  if (code === talk.eventCode) {
    console.log('replace me with navigator redirect')
  } else {
    throw new Error('Unacceptable event code')
  }
}
//update talks speaker stats
