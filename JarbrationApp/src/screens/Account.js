// Import Firebase
import * as firebase from 'firebase';

// Add required stylesheet
var styles = require('../styles.js');

// Add required components
const ActionButton = require('../components/ActionButton');

// Set up components from react
import React, { Component } from 'react';
import ReactNative from 'react-native';
const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = ReactNative;

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBMg9XkL5PIBZJi3leGo19JgMreI8ZGbCI",
  authDomain: "jarbration.firebaseapp.com",
  databaseURL: "https://jarbration.firebaseio.com",
  storageBucket: "jarbration.appspot.com"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

/////

const Login = require('./Login.js');

class Account extends Component {

  render (){
    return (

      <View style={styles.container}>
        <View>
        {
          this.state.user &&
            <View >
              <View>
                <Text>{this.state.user.password.email}</Text>
              </View>
              <ActionButton
                  title="Logout"
                  onpress={this.logout.bind(this)}
            </View>
        }
        </View>
      </View>

      );
  }

  logout() {

    this.props.navigator.push({
      component:Login
    });

  }

}