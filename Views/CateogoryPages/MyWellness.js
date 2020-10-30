import React from 'react'
import { Text, StyleSheet, View, ScrollView, Image, Animated,SafeAreaView, StatusBar } from 'react-native';
import { Link, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Component } from 'react';
import styles from '../../style';
import { BorderlessButton, TouchableOpacity } from 'react-native-gesture-handler';
import { Platform } from 'react-native';
import CollapsibleToolbar from 'react-native-collapsible-toolbar';
import CardView from 'react-native-cardview';
import { Card } from 'react-native-elements';
import Unorderedlist from 'react-native-unordered-list';


export default class MyWellness extends Component {
  constructor() {
    super();
    this.scrollYAnimatedValue = new Animated.Value(0);
  }

  render() {
    const HEADER_MAX_HEIGHT = 250;
    const HEADER_MIN_HEIGHT = 100;
    const headerHeight = this.scrollYAnimatedValue.interpolate(
      {
        inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp'
      });

    return (
     
      <View style={{backgroundColor:"#ffffff"}}>
        <StatusBar barStyle="dark-content" />
        <ScrollView
          scrollEventThrottle={16}
          contentContainerStyle={{paddingTop: HEADER_MAX_HEIGHT }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.scrollYAnimatedValue } } }]
          )}
          style={{ backgroundColor: "white", marginTop: 30 }}
          >


          <View style={[styles.container,{backgroundColor:"#ffffff"}]}>
            
          <CardView
            cardElevation={4}
            cardMaxElevation={4}
            style={{marginLeft:20,marginRight:20, backgroundColor:"#eff0f1", 
            shadowColor: "#000",
            shadowOffset: {
              width: 5,
              height: 5,
            },
            shadowOpacity: 0.5,
            shadowRadius: 3.84,
            elevation: 5,
            }}
            >
              <Text style={styles.titleText}>What is myWellness?</Text>              
            <Text style={styles1.paragraph}>
              <Text style={styles.initial}>C</Text>
              <Text>
                onestoga College offers a variety of services that support your wellness. Students currently living in Ontario can access the college’s remote medical care and mental health supports to discuss any physical and mental health issues they are experiencing.
                        </Text>
            </Text>
          </CardView>
          
            <View style={styles.scrollviewset}>
            <CardView
            cardElevation={4}
            cardMaxElevation={4}
            cornerRadius={5}>
              <Text style={styles.titleText1}>Our Services + Supports</Text>
              <View style={styles.viewset}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <TouchableOpacity onPress={()=>{this.props.navigation.navigate('MentalHealth')}}>
                    <View style={styles.imageview}>
                      <Image source={require('../../assets/res/mental_health.png')}
                        style={styles.imageprop}></Image>
                    </View>
                    </TouchableOpacity>
                  <Link to='/Medical_Care'>
                    <View style={styles.imageview}>
                      <Image source={require('../../assets/res/medical_care.png')}
                        style={styles.imageprop}></Image>
                    </View>
                  </Link>
                  <Link to='/Counselling'>
                    <View style={styles.imageview}>
                      <Image source={require('../../assets/res/counselling.png')}
                        style={styles.imageprop}></Image>
                    </View>
                  </Link>
                  <Link to='/HealthInsurance'>
                    <View style={styles.imageview}>
                      <Image source={require('../../assets/res/health_insurance.png')}
                        style={styles.imageprop}></Image>
                    </View>
                  </Link>
                  <Link to='/Related_service'>
                    <View style={styles.imageview}>
                      <Image source={require('../../assets/res/related_resources.png')}
                        style={styles.imageprop}></Image>
                    </View>
                  </Link>
                  <Link to='/Help_Student'>
                    <View style={styles.imageview}>
                      <Image source={require('../../assets/res/help_student.png')}
                        style={styles.imageprop}></Image>
                    </View>
                  </Link>
                  <Link to='/Contact'>
                    <View style={styles.imageview1}>
                      <Image source={require('../../assets/res/contact.png')}
                        style={[styles.imageprop, { marginRight: 20 }]}></Image>
                    </View>
                  </Link>
                  
                </ScrollView>
                
              </View>
              </CardView>
              <View style={{paddingTop:30}}></View>
              <CardView
            cardElevation={4}
            cardMaxElevation={4}
            style={{marginLeft:20,marginRight:20, backgroundColor:"#eff0f1", 
            shadowColor: "#000",
            shadowOffset: {
              width: 5,
              height: 5,
            },
            shadowOpacity: 0.5,
            shadowRadius: 3.84,
            elevation: 5,
            marginTop:30,
            marginBottom:20
            }}
            >
             <Text style={styles.titleText2}>We Support</Text>
              
              <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 22 , marginLeft:20 }}><Text style={styles.paraText1 }>Stress Managements</Text></Unorderedlist>
              <View style = {styles1.lineStyle} ></View>
              <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 22 , marginLeft:20 }} ><Text style={styles.paraText1}>Relationships</Text></Unorderedlist>
              <View style = {styles1.lineStyle} ></View>
              <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 22 , marginLeft:20 }}><Text style={styles.paraText1}>Mental Health</Text></Unorderedlist>
              <View style = {styles1.lineStyle} ></View>
              <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 22 , marginLeft:20 }}><Text style={styles.paraText1}>Anxiety and/or depression</Text></Unorderedlist>
              <View style = {styles1.lineStyle} ></View>
              <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 22 , marginLeft:20 }}><Text style={styles.paraText1}>Transition issues</Text></Unorderedlist>
              <View style = {styles1.lineStyle} ></View>
              <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 22 , marginLeft:20 }}><Text style={styles.paraText1}>Financial stress</Text></Unorderedlist>
              <View style = {styles1.lineStyle} ></View>
              <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 22 , marginLeft:20 }}><Text style={styles.paraText1}>Immunization</Text></Unorderedlist>
              <View style = {styles1.lineStyle} ></View>
              <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 22 , marginLeft:20 }}><Text style={styles.paraText1}>Prescription medications/ renewals</Text></Unorderedlist>
              <View style = {styles1.lineStyle} ></View>
              <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 22 , marginLeft:20 }}><Text style={styles.paraText1}>Allergy shots</Text></Unorderedlist>
              <View style = {styles1.lineStyle} ></View>
              <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 22 , marginLeft:20 }}><Text style={styles.paraText1}>Nutrition</Text></Unorderedlist>
              <View style = {styles1.lineStyle} ></View>
              <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 22 , marginLeft:20 }}><Text style={styles.paraText1}>Specialist referrals</Text></Unorderedlist>
              <View style = {styles1.lineStyle} ></View>
              <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 22 , marginLeft:20 }}><Text style={styles.paraText1}>First Aid</Text></Unorderedlist>
              <View style = {styles1.lineStyle} ></View>
              <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 22 , marginLeft:20 }}><Text style={styles.paraText2}>Sexual health information</Text></Unorderedlist>
            </CardView>
           <View style={{marginBottom:100}}></View>
            </View>
          </View>
        </ScrollView>


        <Animated.View
          style={[
            styles1.Header,
            {
              height: headerHeight,
            },
          ]}
        >
          <Image
            source={require("../../assets/res/myWellness.png")}
            style={[{
              width: "100%", height: "100%"
            }
            ]}
          ></Image>
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
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'black',
    marginLeft:20,
    marginRight:20,
    marginBottom:10,
    marginTop:5
},

  Header: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },

  HeaderInsideText: {

    width: "100%",
    height:200

  },

  TextViewStyle: {
    textAlign: 'center',
    color: '#000',
    fontSize: 18,
    margin: 5,
    padding: 7,
  },
  
  paragraph:{
    margin: 24,
    fontSize: 18,
    textAlign: 'justify',
    justifyContent:'center',
    color: '#34495e'}
});


