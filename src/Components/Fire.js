import * as firebase from 'firebase';



var firebaseConfig = {
    apiKey: "AIzaSyANcE6AE8gPGKzUd8Qfy8jK5ker_yXOKaM",
    authDomain: "tweetx-18481.firebaseapp.com",
    databaseURL: "https://tweetx-18481.firebaseio.com",
    projectId: "tweetx-18481",
    storageBucket: "tweetx-18481.appspot.com",
    messagingSenderId: "74402910874",
    appId: "1:74402910874:web:43a9ac88e8edf56edc8523",
    measurementId: "G-NQLF6FK6VF"
};

//initialize firebase

const Fire = firebase.initializeApp(firebaseConfig);

export default Fire;