'use strict'

import React, { Component } from 'react';
import ReactNative from 'react-native';

const {
  AppRegistry
} = ReactNative;

import { Root } from './src/config/routes';

class ListApp extends Component {
  render(){
    return <Root />;
  }
}

AppRegistry.registerComponent('ListApp', () => ListApp);
