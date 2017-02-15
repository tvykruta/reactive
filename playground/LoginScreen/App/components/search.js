"use strict";

import React, { Component } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

var api = require('../utils/api');
var Dashboard = require('./dashboard');

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false,
    };
  }
  handleChange(event) {
      this.setState({
        username: event.nativeEvent.text,
      });
  }
  handleSubmit() {
    // update our indicatorIOS spinner
    this.setState({
      isLoading: true,
    });
    console.log("submit", this.state.username);
    // fetch data from github
    // reroute to next 
    api.getBio(this.state.username)
      .then((res) => {
        console.log(res.message);
        if (res.message === 'Not Found') {
          this.setState({
            error: 'User not found',
            isLoading: false});
        } else {
          console.log(res);
          this.props.navigator.push({
            title: res.name || "Select an option",
            component: Dashboard,
            passProps: {userInfo: res}});
          this.setState({
          isLoading: false,
          error: false,
          username: ''});

        };
      }).catch((error) => {console.log(error)});
  }
  render() {
    var showError = (
      this.state.error ? <Text>{this.state.error}</Text> : <Text></Text>
    );
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Search for a github user</Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.username}
          autoCapitalize='none'
          onChange={this.handleChange.bind(this)}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="white">
          <Text style={styles.buttonText}>Search</Text>
        </TouchableHighlight>
        <ActivityIndicator
          animating={this.state.isLoading}
          color="#111"
          size="large">
        </ActivityIndicator>
        {showError}
      </View>
    )
  }
}

var styles=StyleSheet.create({
  mainContainer: {
    flex: 1,
    //alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  title: {
    color: "white",
    fontSize: 20,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  searchInput: {
    height: 35,
    margin: 10,
    padding: 10,
    borderColor: "white",
    borderWidth: 1,
    color: "white",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "white",
    margin: 5,
    padding: 5,
    justifyContent: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  buttonText: {
    color: "black",
    backgroundColor: "white",
    fontSize: 20,
    padding: 10,
    margin: 10,
  },
});


module.exports = Search;