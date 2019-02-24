import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyAJRpEgoOcPgbJETtqwpwjbIaL2I7DHpSQ',
  authDomain: 'react-slack-clone-5d445.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-5d445.firebaseio.com',
  projectId: 'react-slack-clone-5d445',
  storageBucket: 'gs://react-slack-clone-5d445.appspot.com',
  messagingSenderId: '310133821430'
};
firebase.initializeApp(config);

export default firebase;
