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

class Login extends Component {

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
          <Item floatingLabel last>

            <Label>Password</Label>

            <Input
              autoCorrect={false}
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={password => this.setState({ password })} />
          </Item>
        </Form>

        <Button block onPress={this.login.bind(this)}>
        <Text>Log in</Text>
        </Button>

        <Button block onPress={() => this.props.navigation.navigate('ForgotPassword')}>
        <Text>Forgot Password</Text>
        </Button>

        <Button block onPress={() => this.props.navigation.navigate('Landing')}>
        <Text>Go Back</Text>
        </Button>

        <Button block onPress={() => this.props.navigation.navigate('Home')}>
        <Text>Skip</Text>
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
  login(){
    firebase.auth().signInWithEmailAndPassword( this.state.email, this.state.password)

    // Navigate to the homescreen
    .then(() => {
      this.props.navigation.navigate('Home');
    })

    // Display error message
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      // ...
    });
  }
}

  module.exports = Login;
