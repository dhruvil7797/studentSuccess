import React from 'react'
import {Text,StyleSheet, View,ScrollView,Image,Animated} from 'react-native'
import { Link, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Component } from 'react';
import styles from './style';
import { BorderlessButton } from 'react-native-gesture-handler';
import {Platform} from 'react-native';
import CollapsibleToolbar from 'react-native-collapsible-toolbar';

const Header_Max_Height = 200;
const Header_Min_Height = 50;

export default class MyWellness extends Component
{
    constructor()
    {
        super();
        this.AnimatedHeader = new Animated.Value(0);
    }
    render()
    {
        const HeaderHeight= this.AnimatedHeader.interpolate
        ({
            inputRange : [0,Header_Max_Height-Header_Min_Height],
            outputRange:[Header_Max_Height,Header_Min_Height],
            extrapolate: 'clamp',
        });
        const BackgroundColor=this.AnimatedHeader.interpolate
        ({
            inputRange:[0,Header_Max_Height-Header_Min_Height],
            outputRange: ['#4286F4', '#00BCD4'],
            extrapolate: 'clamp',
        });
    
            return(   
               
                <View style = {styles.MainContent}>
                    
                <ScrollView
                  scrollEventThrottle={16}
                  contentContainerStyle={{ paddingTop: Header_Max_Height }}
                  onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { y: this.AnimatedHeader } } },
                  ])}>  
                  <Animated.View
                    style={[
                    styles.Header,
                    {
                        height: HeaderHeight,
                        backgroundColor: BackgroundColor,
                    },
                ]}>
                 </Animated.View>
        <View style = {styles.container}>
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
           
     </View>
         );
    }
}



