import * as firebase from "firebase";
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyA_gcngCxWcHroYviY2MdvFiPwapjmI_sY",
  authDomain: "betatalks-7fc6d.firebaseapp.com",
  databaseURL: "https://betatalks-7fc6d.firebaseio.com",
  projectId: "betatalks-7fc6d",
  storageBucket: "betatalks-7fc6d.appspot.com",
  messagingSenderId: "999985598876"
};
firebase.initializeApp(config);

export const betadb = firebase.database().ref();
export const betausers = firebase.database().ref('users'); //only users
export const betaevents = firebase.database().ref('events'); //only events
export const betaquestions = firebase.database().ref('questions'); //only questions
export const betatalks = firebase.database().ref('talks'); //only talks
export const auth = firebase.auth();

  //listeners
  // nameofthedatabase.on('value', function(snapshot){ //create listener for changes in db
  //   dispatch(dispatchfunc(snapshot.val())); //dispatch changes in redux
  // }, function(error){ 
  //   console.log(error) // handle errors 
  // });
