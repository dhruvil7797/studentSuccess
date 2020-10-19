//This is an example code for React Native Collapsible toolbar// 
import React, { Component } from 'react';
//import react in our code.

import {Image, ScrollView, StyleSheet, View, Animated, Text, Platform} from 'react-native';
import { Link, NavigationContainer } from '@react-navigation/native';
//import all the components we are going to use. 

const Header_Maximum_Height = 150;
//Max Height of the Header
const Header_Minimum_Height = 30;
//Min Height of the Header

export default class Mynewproject extends Component{
  constructor() {
    super();
    this.AnimatedHeaderValue = new Animated.Value(0);
  }

  render() {
    const AnimateHeaderBackgroundColor = this.AnimatedHeaderValue.interpolate({
      inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
      outputRange: ['#ffffff', '#ffffff'],
      extrapolate: 'clamp',
    });

    const AnimateHeaderHeight = this.AnimatedHeaderValue.interpolate({
      inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
      outputRange: [Header_Maximum_Height, 0],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.MainContainer}>
          <Text style={styles.imageprop}>myWellness</Text>
        <ScrollView
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingTop: Header_Maximum_Height-Header_Minimum_Height }}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.AnimatedHeaderValue } } },
          ])}>
          {/* Put all your Component here inside the ScrollView */}
          
          <View style = {styles.container}>
                <Text style={styles.titleText}>myWellness!</Text>
                  <Text style={styles.paraText}>
                        <Text style={styles.initial}>C</Text>
                        <Text> 
                        onestoga College offers a variety of services that support your wellness. Students currently living in Ontario can access the college’s remote medical care and mental health supports to discuss any physical and mental health issues they are experiencing.
                        </Text>
                  </Text>
                  <Text style={styles.titleText}>myWellness!</Text>
                  <Text style={styles.paraText}>
                        <Text style={styles.initial}>C</Text>
                        <Text> 
                        onestoga College offers a variety of services that support your wellness. Students currently living in Ontario can access the college’s remote medical care and mental health supports to discuss any physical and mental health issues they are experiencing.
                        </Text>
                  </Text>
                  <Text style={styles.titleText}>myWellness!</Text>
                  <Text style={styles.paraText}>
                        <Text style={styles.initial}>C</Text>
                        <Text> 
                        onestoga College offers a variety of services that support your wellness. Students currently living in Ontario can access the college’s remote medical care and mental health supports to discuss any physical and mental health issues they are experiencing.
                        </Text>
                  </Text>
                <View style={styles.scrollviewset}> 
                    <Text style={styles.titleText1}>Our Services + Supports</Text>
                <View style={styles.viewset}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Link to ='/MentalHealth'>
                            <View style={styles.imageview}>
                                <Image source={require('./assets/res/mental_health.png')}
                                style={styles.imageprop}></Image>
                            </View>
                        </Link>
                        <Link to ='/Medical_Care'>
                            <View style={styles.imageview}>
                            <   Image source={require('./assets/res/medical_care.png')}
                                style={styles.imageprop}></Image>
                            </View>
                        </Link>
                        <Link to ='/Counselling'>
                        <View style={styles.imageview}>
                            <Image source={require('./assets/res/counselling.png')}
                            style={styles.imageprop}></Image>
                        </View>
                        </Link>
                        <Link to ='/HealthInsurance'>
                        <View style={styles.imageview}>
                            <Image source={require('./assets/res/health_insurance.png')}
                            style={styles.imageprop}></Image>
                        </View>
                        </Link>
                        <Link to ='/Related_service'>
                        <View style={styles.imageview}>
                            <Image source={require('./assets/res/related_resources.png')}
                            style={styles.imageprop}></Image>
                        </View>
                        </Link>
                        <Link to ='/Help_Student'>
                        <View style={styles.imageview}>
                            <Image source={require('./assets/res/help_student.png')}
                            style={styles.imageprop}></Image>
                        </View>
                        </Link>
                        <Link to ='/Contact'>
                        <View style={styles.imageview1}>
                            <Image source={require('./assets/res/contact.png')}
                            style={styles.imageprop}></Image>
                        </View>
                    </Link>
                    
        </ScrollView>
        </View>
        </View>
        </View>
        </ScrollView>
        <Animated.View
          style={[
            styles.Header,
            {
              height: AnimateHeaderHeight,
              backgroundColor: AnimateHeaderBackgroundColor,
            },
          ]}>
               <Image source={require('./assets/res/bg1.jpg')}
                           style={[styles.HeaderInsideText,{height:AnimateHeaderHeight === 10 ?  10 : 180,},]}></Image>
          
            
        </Animated.View>
        
      </View>
    );
    
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS == 'ios' ? 20 : 0,
  },

  Header: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: Platform.OS == 'ios' ? 20 : 0,
  },

  HeaderInsideText: {
    
    width:"100%",
    
  },

  TextViewStyle: {
    textAlign: 'center',
    color: '#000',
    fontSize: 18,
    margin: 5,
    padding: 7,
  },
  
});
