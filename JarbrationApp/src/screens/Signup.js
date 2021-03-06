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

// Set up components from Native base
import { Container, Content, Form, Item, Label, Input, Button, Text } from 'native-base';

class Signup extends Component {

	constructor(props) {
		super(props);

		// Realtime database listener
		this.usersRef = firebase.database().ref().child('users');

		// Set default state
		this.state = {
			name: '',
			email: '',
			password: ''
		};
	}

	render() {
		return (
			<Container>
			<Content>
	          <Form>
								<Item floatingLabel>

								<Label>Name</Label>

								<Input
								value={this.state.name}
										onChangeText={name => this.setState({ name })} />

								</Item>
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

	          <Button block onPress={this.signup.bind(this)}>
	          <Text>Sign Up</Text>
	          </Button>

	          <Button block onPress={() => this.props.navigation.navigate('Landing')}>
	          <Text>Go Back</Text>
	          </Button>

		    </Content>
	        </Container>
		)
	}

	// Sign Up method
	signup(){

		firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)

		// Enter user email into database
		.then((user) => {
			console.log("this is the users email:" + user.email)
			console.log("this is the users name:" + this.state.name)
			firebase.database().ref().child('users').push({ email: user.email, name: this.state.name});
		})

		// Navigate to home
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

module.exports = Signup;
