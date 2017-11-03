// Import Firebase
import * as firebase from 'firebase';

// Add required stylesheet
var styles = require('../config/styles.js');

const Home = require('../../index.ios.js');

// Add required components
const StatusBar = require('../components/StatusBar');
const ActionButton = require('../components/ActionButton');
const ListItem = require('../components/ListItem');

// Set up components from react
import React, { Component } from 'react';
import ReactNative from 'react-native';

import { StackNavigator} from 'react-navigation';

// Set up components from Native base
import { Container, Content, Form, Item, Label, Input, Button, Text } from 'native-base';

class ForgotPassword extends Component {

  render() {
    return (

      <Container>
      <Content>
        <Form>
          <Item floatingLabel>

          <Label>Email Address</Label>

          <Input 
            value={this.state.email}
            onChangeText={email => this.setState({ email })} />

          </Item>

        </Form>

        <Button block onPress={this.forgot.bind(this)}>
        <Text>Reset Email</Text>
        </Button>

        <Button block onPress={() => this.props.navigation.navigate('Landing')}>
        <Text>Go Back</Text>
        </Button>

      </Content>            
      </Container>
    )
  }

  // Set the defualt state
  constructor(props) {
    super(props);
  
    this.state = {
      email: '',
      password: ''
    };
  }

  // Log in method
  forgot(){
    firebase.auth().sendPasswordResetEmail( this.state.email).then(function() {

      alert("Email sent. Please check you email to reset your passowrd");

    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
}

  module.exports = ForgotPassword;