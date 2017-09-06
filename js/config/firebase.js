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

export const betadb = firebase.database().ref('users'); 

// betadb.on('value', function(snapshot){
//     console.log(snapshot.val());
//   }, function(error){
//     console.log(error)
//   });
