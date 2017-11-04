// Import Firebase
import * as firebase from 'firebase';

// Add required components
const ActionButton = require('../components/ActionButton');

// Set up components from react
import React, { Component } from 'react';
import ReactNative from 'react-native';

// Set up components from Native base
import { Container, Content, Form, Item, Label, Input, Button, Text } from 'native-base';

const Login = require('./Login.js');

class Account extends Component {

  render (){
    return (

      <Container>
      <Content>
        <Text>{firebase.auth().currentUser.email}</Text>

        <Button block onPress={this.logout.bind(this)}>
          <Text>Log out</Text>
        </Button>

      </Content>
      </Container>

      );
  }

  //log out method
  logout() {

    firebase.auth().signOut();
    this.props.navigation.navigate('Landing');

  }

}


module.exports = Account;
