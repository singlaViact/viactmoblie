import React, { Component } from 'react';
import { Button, View, Text,Image, ImageBackground,StyleSheet } from 'react-native';
import {dimensions, colors, fonts} from '../../styles/variables';
import {responsive} from '../../styles/mixins';
import FastImage from 'react-native-fast-image';

const styles = StyleSheet.create({
    rootStyle: {
      width: dimensions.width,
      height: dimensions.height,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
      }
  });

const Login = () => {
  return (
    <View style={styles.rootStyle}>
         <ImageBackground source={require('../../images/loginBack/loginBack.png')} style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
  </View>
        )
};

export default Login;