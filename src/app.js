import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp ({
      apiKey: "AIzaSyBWhG8lDgKiaEQ1_Lz0-kPu6Lmg4hkxyTI",
      authDomain: "authentication-ff904.firebaseapp.com",
      databaseURL: "https://authentication-ff904.firebaseio.com",
      storageBucket: "authentication-ff904.appspot.com",
      messagingSenderId: "724350584519"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
