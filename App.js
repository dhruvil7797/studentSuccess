import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Animated, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import AnimatedForm from 'react-native-animated-form';
import styles from './style';
import image from './assets/CSS.jpg'

const AnimatedInput = Animated.createAnimatedComponent(TextInput);

export default class App extends Component {
  render(){
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <AnimatedForm style={styles.animatedForm} delay={250} distance={5}>
        <AnimatedInput style={styles.animatedInput} placeholder='User name' />
        <AnimatedInput secureTextEntry={true} style={styles.animatedInput} placeholder='Password' />
        <TouchableOpacity> 
          <Animated.View style={styles.button}>               
            <Text style={{color: '#ffffff', fontSize:25, fontStyle:''}}>LOGIN</Text>
          </Animated.View>
        </TouchableOpacity>
      </AnimatedForm>
      <StatusBar style="auto" />
    </View>
  );
  }
}


