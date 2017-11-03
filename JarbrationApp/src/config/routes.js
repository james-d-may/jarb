'use strict';

import React from 'react';
import { TabNavigator, StackNavigator} from 'react-navigation';

const LandingScreen = require('../screens/Landing.js');
const LoginScreen = require('../screens/Login.js');
const SignupScreen = require('../screens/Signup.js');
const ForgotPasswordScreen = require('../screens/ForgotPassword.js');
const HomeScreen = require('../screens/Home.js');

// Set up tab navigator with home screen
export const Tabs = TabNavigator ({
  Home: { screen: HomeScreen },
});

// Set landing screen as the root modal
export const Root = StackNavigator ({
	Landing: { screen: LandingScreen },
	Login: { screen: LoginScreen },
	Signup: { screen: SignupScreen },
	ForgotPassword: { screen: ForgotPasswordScreen },
	Home: { screen: Tabs },
}, {
	mode: 'modal',
	headerMode: 'none',
});