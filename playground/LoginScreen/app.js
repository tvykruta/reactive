"use strict";

import React, { Component } from 'react';
import {
  NavigatorIOS,
  StyleSheet,
} from 'react-native';

var Login = require('./App/components/login');
var Profile = require('./App/components/profile');
var Search = require('./App/components/search');

var ComponentActive = Search;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
  },
});

export default class App extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Search Screen',
          component: ComponentActive,
        }}
      />
    )
  }
}

