import React, { Component } from 'react';
import { Button, View, Text,Image,StyleSheet } from 'react-native';
import {dimensions, colors, fonts} from '../../styles/variables';
import {responsive} from '../../styles/mixins';
import FastImage from 'react-native-fast-image';

const styles = StyleSheet.create({
    rootStyle: {
      width: dimensions.width,
      height: dimensions.height,
      backgroundColor: colors.white,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  const imgStyleFun = (src) => {
    return {
      backgroundColor: colors.white,
      width: responsive.horizontal(103),
      height: responsive.vertical(121),
    };
  };

const SplashScreen = () => {
  return (
    <View style={styles.rootStyle}>
    <FastImage
      style={imgStyleFun(require('../../images/splash/splash.png'))}
      source={require('../../images/splash/splash.png')}
      resizeMode={FastImage.resizeMode.contain}
    />
  </View>
        )
};

export default SplashScreen;