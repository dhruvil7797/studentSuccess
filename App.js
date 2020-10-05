import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Animated,KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AnimatedForm from 'react-native-animated-form';
import styles from './style';
import image from './assets/CSS.jpg'

const AnimatedInput = Animated.createAnimatedComponent(TextInput);

export default class App extends Component {
  render(){
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback style={styles.animatedInput} onPress={Keyboard.dismiss}>
      <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <AnimatedForm style={styles.animatedForm} delay={250} distance={5}>
        <AnimatedInput style={styles.animatedInput} placeholder='User name' />
        <AnimatedInput secureTextEntry={true} style={styles.animatedInput} placeholder='Password' />
        <TouchableOpacity> 
          <Animated.View style={styles.button}>               
            <Button title="LOGIN" onPress={() => null}  style={{color: '#000000', fontSize:25} }></Button>
          </Animated.View>
        </TouchableOpacity>
      </AnimatedForm>
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    
  );
  }
}


