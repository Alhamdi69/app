import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  YellowBox
} from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import {Actions} from 'react-native-router-flux';


import Routes from './src/Routes'


export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
        backgroundColor="#1c313a"
        barStyle="light-content"
      />
      <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex:1,
    justifyContent:'center'
  },
});
