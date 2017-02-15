"use strict";

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

class Dashboard extends Component {
  makeBackground(btn) {
    var obj = {
      //flex: 2,
      height: 90,
      flexDirection: "row",
      alignSelf: "stretch",
      justifyContent: "center",
    }
    if (btn == 0) {
      obj.backgroundColor = "red";
    } else if (btn == 1) {
      obj.backgroundColor = "blue";
    } else {
      obj.backgroundColor = "green";
    }
    return obj;
  }
  gotoProfile() {

  }
  gotoRepos() {

  }
  gotoNotes() {

  }
  render() {
    return (
      <View>
        <Image source={{uri: this.props.userInfo.avatar_url}}
                style={styles.image}/>
        <Text> Hello! </Text>
        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={this.gotoProfile.bind(this)}
          underlayColor="#88D4F5">
            <Text style={styles.buttonText}>View Profile</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this.gotoRepos.bind(this)}
          underlayColor="#88D4F5">
            <Text style={styles.buttonText}>View Repos</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(2)}
          onPress={this.gotoNotes.bind(this)}
          underlayColor="#88D4F5">
            <Text style={styles.buttonText}>View Notes</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1,
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: "white",
    alignSelf: "center",
  },
});

module.exports = Dashboard;