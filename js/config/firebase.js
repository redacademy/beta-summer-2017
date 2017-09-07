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
export const auth = firebase.auth();

  //listeners
  // betadb.on('value', function(snapshot){ //create listener for changes in db
  //   dispatch(dispatchfunc(snapshot.val())); //dispatch changes in redux
  // }, function(error){ 
  //   console.log(error) // handle errors 
  // });
