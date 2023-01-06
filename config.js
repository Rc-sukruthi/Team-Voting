import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {

  apiKey: "AIzaSyArTvU66lmC1gav_pjs-C-buW5Dy7RPbAw",
  authDomain: "project-67-b4fec.firebaseapp.com",
  projectId: "project-67-b4fec",
  storageBucket: "project-67-b4fec.appspot.com",
  messagingSenderId: "778244544436",
  appId: "1:778244544436:web:92de909f5a2a3f82c204e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();