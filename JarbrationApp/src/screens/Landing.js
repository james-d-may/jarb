// Import Firebase
import * as firebase from 'firebase';

// Add required stylesheet
var styles = require('../config/styles.js');

// Add required components
const ActionButton = require('../components/ActionButton');

// Set up components from react
import React, { Component } from 'react';
import ReactNative from 'react-native';
const {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  AlertIOS,
  Navigation
} = ReactNative;
import { StackNavigator} from 'react-navigation';

// Set up components from Native base
import { H1 } from 'native-base';


const Signup = require('./Signup');

class Landing extends Component {

  render() {
    return (
      <View style={styles.topPadded}>

        <H1> Welcome to the Jarbration </H1>

        <ActionButton title="Join Now" onPress={() => this.props.navigation.navigate('Signup')}>
        </ActionButton>  

        <ActionButton title="Sign In" onPress={() => this.props.navigation.navigate('Login')}>
        </ActionButton>  
                    
      </View>


      )
  }
}

  module.exports = Landing;