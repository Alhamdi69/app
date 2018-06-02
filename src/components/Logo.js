import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Logo extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Image style={{borderRadius: 200}} source={require('../images/log.jpg')} width={100} height={100} />
        <Text style={styles.logoText}>Welcome to My Apps Al-Bahri</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    logoText:{
      marginVertical:16,
       fontSize:18,
       color:'rgba(225, 225, 225, 0.7)' 
    }
})