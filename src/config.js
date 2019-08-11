import * as firebase from "firebase";

let config = {
  apiKey: "AIzaSyDwnh2qOlR8RdfHi3A4KGXcVN8KVKwLJgg",
  authDomain: "swiftpay-45498.firebaseapp.com",
  databaseURL: "https://swiftpay-45498.firebaseio.com",
  projectId: "swiftpay-45498",
  storageBucket: "",
  messagingSenderId: "1047965127718",
  appId: "1:1047965127718:web:5cd3a026de0f79e0"
};

export default (!firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app());
