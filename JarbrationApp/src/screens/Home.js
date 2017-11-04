'use strict'

// Import Firebase
import * as firebase from 'firebase';

// Add required stylesheet
var styles = require('../config/styles.js');

// Add required components
const StatusBar = require('../components/StatusBar');
const ActionButton = require('../components/ActionButton');
const ListItem = require('../components/ListItem');

// Set up components from react
import React, { Component } from 'react';
import ReactNative from 'react-native';
const {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
  Navigation
} = ReactNative;

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

class Home extends Component {

  constructor(props) {
    super(props);
    // Set up data source and start state
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([{ title: 'Enter your first item' }]),
    };
    // Realtime database listener
    this.itemsRef = firebaseApp.database().ref().child('items');
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>

        <StatusBar title="Grocery List"/>

        <ListView
        style={styles.listview}
        dataSource={this.state.dataSource}
        renderRow={this._renderItem.bind(this)} />

        <ActionButton title="Add" onPress={this._addItem.bind(this)}>
        </ActionButton>

      </View>
    );
  }

  _addItem() {
    AlertIOS.prompt(
      'Add New Item',
      null,
      [
        {
          text: 'Add',
          onPress: (text) => {
            this.itemsRef.push({ title: text })
          }
        },
      ],
      'plain-text'
    );
  }

  _renderItem(item) {

    // Provide the ability to remove entries
    const onPress = () => {
      AlertIOS.prompt(
        'Complete',
        null,
        [
          {text: 'Complete', onPress: (text) => this.itemsRef.child(item._key).remove()},
          {text: 'Cancel', onPress: (text) => console.log('Cancel')}
        ],
        'default'
      );
    };

    // Return the list item component for each row
    return (
      <ListItem item={item} onPress={onPress} />
    );
  }

  // Create value listener. Whenever an item is added, changed or removed you get a data snapshot back
  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
        console.log(items);
      });

      // update dataSource
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

}

module.exports = Home;
