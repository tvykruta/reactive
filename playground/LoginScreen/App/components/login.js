"use strict";

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

var renderTree = require("./login_render");

//export default class Login extends Component {
class Login extends Component {
  render() {
    return renderTree;
  }
}

module.exports = Login;