import React from 'react'
import {Text,StyleSheet, View,ScrollView,Image,Animated} from 'react-native';
import { Link, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Component } from 'react';
import styles from '../../style';
import { BorderlessButton } from 'react-native-gesture-handler';
import {Platform} from 'react-native';
import CollapsibleToolbar from 'react-native-collapsible-toolbar';


const Header_Max_Height = 170;
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
        
        const AnimatedHeaderBackgroundColor=this.AnimatedHeader.interpolate
        ({
            inputRange:[0,Header_Max_Height-Header_Min_Height],
            outputRange: ['#ffffff', '#ffffff'],
            extrapolate: 'clamp',
        });
        const AnimateHeaderHeight = this.AnimatedHeader.interpolate({
            inputRange: [0, Header_Max_Height - Header_Min_Height],
            outputRange: [Header_Max_Height, 0],
            extrapolate: 'clamp',
          });
    
            return(   
               
                <View style = {styles.MainContent}>
                     <Text style={styles.titleText}>myWellness!</Text>
                <ScrollView
                  scrollEventThrottle={16}
                  contentContainerStyle={{ paddingTop: Header_Max_Height-Header_Min_Height }}
                  onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { y: this.AnimatedHeader } } },
                  ])}>  
                  
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
                                <Image source={require('../../assets/res/mental_health.png')}
                                style={styles.imageprop}></Image>
                            </View> 
                        </Link>
                        <Link to ='/Medical_Care'>
                            <View style={styles.imageview}>
                            <Image source={require('../../assets/res/medical_care.png')}
                                style={styles.imageprop}></Image>
                            </View>
                        </Link>
                        <Link to ='/Counselling'>
                        <View style={styles.imageview}>
                            <Image source={require('../../assets/res/counselling.png')}
                            style={styles.imageprop}></Image>
                        </View>
                        </Link>
                        <Link to ='/HealthInsurance'>
                        <View style={styles.imageview}>
                            <Image source={require('../../assets/res/health_insurance.png')}
                            style={styles.imageprop}></Image>
                        </View>
                        </Link>
                        <Link to ='/Related_service'>
                        <View style={styles.imageview}>
                            <Image source={require('../../assets/res/related_resources.png')}
                            style={styles.imageprop}></Image>
                        </View>
                        </Link>
                        <Link to ='/Help_Student'>
                        <View style={styles.imageview}>
                            <Image source={require('../../assets/res/help_student.png')}
                            style={styles.imageprop}></Image>
                        </View>
                        </Link>
                        <Link to ='/Contact'>
                        <View style={styles.imageview1}>
                            <Image source={require('../../assets/res/contact.png')}
                            style={styles.imageprop}></Image>
                        </View>
                    </Link>
                   </ScrollView>
                   </View>
                   
               <Text style={styles.titleText2}>We Support</Text>
                
                    <Text style={styles.paraText1}>Stress Managements</Text>
                    <Text style={styles.paraText1}>Relationships</Text>
                    <Text style={styles.paraText1}>Mental Health</Text>
                    <Text style={styles.paraText1}>Anxiety and/or depression</Text>
                    <Text style={styles.paraText1}>Transition issues</Text>
                    <Text style={styles.paraText1}>Financial stress</Text>
                    <Text style={styles.paraText1}>Immunization</Text>
                    <Text style={styles.paraText1}>Prescription medications/ renewals</Text>
                    <Text style={styles.paraText1}>Allergy shots</Text>
                    <Text style={styles.paraText1}>Nutrition</Text>
                    <Text style={styles.paraText1}>Specialist referrals</Text>
                    <Text style={styles.paraText1}>First Aid</Text>
                    <Text style={styles.paraText2}>Sexual health information- pregnancy, birth control, prenatal care, and sexually transmitted infections (STI’s)</Text>
                   
                    
            </View>        
            </View>                        
        </ScrollView>
           
    
      <Animated.View
      style={[
        styles1.Header,
        {
          height: AnimateHeaderHeight,
          backgroundColor: AnimatedHeaderBackgroundColor,
        },
      ]}>
           <Image source={require('../../assets/res/bg1.jpg')}
                       style={[styles1.HeaderInsideText,{height:AnimateHeaderHeight === 10 ?  10 : 180,},]}></Image>
      
        
    </Animated.View>
    </View>
         );
    }
}
const styles1 = StyleSheet.create({
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
    imageprop1:{
      backgroundColor:"#ffffff",
      height:Header_Min_Height,
    },
  });


