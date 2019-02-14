// Initialize Firebase
var config = {
  apiKey: APIKEY,
  authDomain: "cards-1b7fe.firebaseapp.com",
  databaseURL: "https://cards-1b7fe.firebaseio.com",
  projectId: "cards-1b7fe",
  storageBucket: "cards-1b7fe.appspot.com",
  messagingSenderId: "361481415273"
};
firebase.initializeApp(config);
var database = firebase.database().ref();
var pending = firebase.database().ref("pending");
var completed = firebase.database().ref('completed');

var tags = firebase.database().ref("tags");
