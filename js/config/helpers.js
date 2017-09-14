import { auth, betadb, betaevents, betatalks, betaquestions, betausers } from './firebase';
//users
const user = { //input format for initial signup form;
  email: 'test@pest.com',
  password: 'password',
  name: 'Firstname Lastname'
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
  await initialProfileSetup(auth.currentUser.uid, profile.email, profile.name);
}
//update
export function updateEmail(email, user) {
  user.updateEmail(email).catch(function (error) {
    console.log(error)
  });
  updateEmailField(user.uid, email)
}
export function updateFullname(name, user) {
  user.updateProfile({
    displayName: name,
  }).catch(function (error) {
    console.log(error)
  });
  updateNameField(user.uid, name)
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
      "facebook": "",
      "linkedIn": "",
      "twitter": ""
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
    }]
  }
  betadb.update(updates)
}
//update user custom fields
const updateEmailField = (key, email) => {
  const updates = {}
  updates['/users/' + key + '/email'] = email
  betadb.update(updates)
}
const updateNameField = (key, name) => {
  const updates = {}
  updates['/users/' + key + '/fullName'] = name
  betadb.update(updates)
}
export const updateBio = (key, bio) => {
  const updates = {}
  updates['/users/' + key + '/bio'] = bio
  betadb.update(updates)
}
export const updateMyGoals = (key, goals) => {
  const updates = {}
  updates['/users/' + key + '/goals'] = goals
  betadb.update(updates)
}
export const updateSocialMedia = (key, sm) => {
  const updates = {}
  updates['/users/' + key + '/socialMediaUrls'] = sm
  betadb.update(updates)
}
export const updateImg = (key, imageurl) => {
  const updates = {}
  updates['/users/' + key + '/imageUrl'] = imageurl
  betadb.update(updates)
}
//update speakerstats after survey

//delete

//events
export const eventCodeSet = (event_id, events, code) => { //pass in specific event id, all events to find this one and new code
  const event = events.find(event=>{return event.id === event_id});
  const index = events.findIndex(elem=>{return elem.id === event_id});
  const updates = {}
  updates[index+'/eventCode/'] = code //set up updates for the event
  betaevents.update(updates, ()=>{talkCode(event, code)}); //update event, onSuccess update all corresponding talks
}
const talkCode = (event, code) => { //this one returns a promise if you need it to check whether the db write happened;
  const updates = event.talks.reduce((acc, talk)=>{
    acc[talk+'/eventCode/'] = code
    return acc
  }, {})
  return betatalks.update(updates) 
}

//attend an event (leave?)

//talks
export const enterSurvey = (talk, code) => { //attach to the button 
  if(code===talk.eventCode) {
    console.log('replace me with navigator redirect')
  } else {
    throw new Error('Unacceptable event code')
  }
}
//update talks speaker stats
