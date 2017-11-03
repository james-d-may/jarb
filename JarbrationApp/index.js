'use strict'

import React, { Component } from 'react';
import ReactNative from 'react-native';

const {
  AppRegistry
} = ReactNative;

import { Root } from './src/config/routes';

class JarbrationApp extends Component {
  render(){
    return <Root />;
  }
}

// import { AppRegistry } from 'react-native';
// import App from './App';

AppRegistry.registerComponent('JarbrationApp', () => JarbrationApp);
