import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: false };
  componentWillMount() {
    firebase.initializeApp ({
      apiKey: "AIzaSyBWhG8lDgKiaEQ1_Lz0-kPu6Lmg4hkxyTI",
      authDomain: "authentication-ff904.firebaseapp.com",
      databaseURL: "https://authentication-ff904.firebaseio.com",
      storageBucket: "authentication-ff904.appspot.com",
      messagingSenderId: "724350584519"
    });

    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({  loggedIn: false });
      }
    });

  }

  renderContent() {
    if (this.state.loggedIn) {
      return (
        <Button>
          Log Out
        </Button>
      );
    }

    return <LoginForm />;
  }


  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
