import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


const InstantAlert = ({onPressButton}) => {
  return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Alert Screen</Text>
              <Button
              title="Go to About"
              // onPress={() => this.props.navigation.navigate('About')}
              onPress={onPressButton}
    />
          </View>
        )
};

export default InstantAlert;