'use strict'

// Import Firebase
import * as firebase from 'firebase';

import React, { Component } from 'react';
import ReactNative from 'react-native';

const {
  AppRegistry
} = ReactNative;

import { Root } from './src/config/routes';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBMg9XkL5PIBZJi3leGo19JgMreI8ZGbCI",
  authDomain: "jarbration.firebaseapp.com",
  databaseURL: "https://jarbration.firebaseio.com",
  storageBucket: "jarbration.appspot.com"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log("User logged in:" + user.email);
  } else {
    // No user is signed in.
    console.log("No user logged in");
  }
});

////////////

class ListApp extends Component {
  render(){
    return <Root />;
  }
}

AppRegistry.registerComponent('ListApp', () => ListApp);
