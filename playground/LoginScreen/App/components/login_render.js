"use strict";

import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

var styles = require('../styles/login_style');

const background = require('../images/background_anim.gif')

const lockIcon = require("../images/lock.png")
const personIcon = require("../images/person.png")
const bear = require('../images/bear.png')

module.exports = 
      <Image
        style={[styles.background, styles.container]}
        source={background}
        resizeMode="cover">
        <View style={styles.container} />
        <View style={styles.wrapper} >
          <View style={styles.logoWrap} >
            <View style={styles.logoIconWrap} >
              <Image
                  source={bear}
                  style={styles.logoIcon}
                  resizeMode="contain"
              />
              <Text style={styles.logoText}>bearbnb</Text>
            </View>
          </View>
        </View>
        <View style={styles.wrapper} > 
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image
                source={personIcon}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
            <TextInput
              placeholder="Username goes here"
              style={styles.input}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image
                source={lockIcon}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.input}
              underlineColorAndroid="transparent"
            />
          </View>
          <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Sign In</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <View>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.container} />
      </Image>