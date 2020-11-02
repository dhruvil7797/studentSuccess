import React, { Component } from 'react';
import { Animated, KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Button, TouchableWithoutFeedback, Keyboard, Linking } from 'react-native';
import styles from '../../style';
import style2 from '../../CSS/MyWellnessStyle';
import CardView from 'react-native-cardview';
import FlipCard from 'react-native-flip-card';
import { Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Unorderedlist from 'react-native-unordered-list';
const mailSubject = 'Mobile Solution Development!!!';
import { Link, NavigationContainer } from '@react-navigation/native';
import HealthInsurance from './HealthInsurance'
class RelatedService extends Component{
  render() {
    return (
      <View style={style2.container}>
      <Text style={[style2.titleText, { paddingBottom: 20 }]}>Related Services</Text>
      <View style={{width:"100%", marginBottom:20}}>
          <Text style={{textAlign:"center", color:"grey"}}>Click on card to view description</Text>
        </View>
        <ScrollView>
        <View style={style2.outer1}>
        <View style={ medicalCareCSS.CardView }>
            <Text style={[style2.paraText,medicalCareCSS.CardViewText]}>Related College Services and Community Resources</Text>
              
            </View>
          <FlipCard style={[style2.flipcard,{paddingBottom:20}]}
            flipVertical={false}
            flipHorizontal={true}
            friction={20}
          >

<View style={{ width: "100%" ,alignItems: 'center'  }}>


              <View style= {medicalCareCSS.border}>
              <Image style={medicalCareCSS.image2} source={require('../../assets/res/gym.png')}></Image>
              
              </View>
            </View>
            <View style={medicalCareCSS.viewlist}>
              
              <Text style={style2.titleText2}>Athletics and Recreation</Text>
            <Unorderedlist bulletUnicode={0x2022} style={[medicalCareCSS.orderlist,{marginLeft:30}]}>
              <Text style={style2.paraText}>
                <Text style={[style2.paraText],{color:'blue'}} onPress={()=>{Linking.openURL('https://www.conestogac.on.ca/athletics/varsity/');}}>Join a varsity team</Text>
                </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022} style={[medicalCareCSS.orderlist,{marginLeft:30}]}>
              <Text style={style2.paraText}>
                <Text style={[style2.paraText],{color:'blue'}} onPress={()=>{Linking.openURL('https://www.conestogac.on.ca/athletics/studentprogramming/');}}>Play an intramural sport</Text>
                </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022} style={[medicalCareCSS.orderlist,{marginLeft:30}]}>
              <Text style={style2.paraText}>
                <Text style={[style2.paraText],{color:'blue'}} onPress={()=>{Linking.openURL('https://www.conestogac.on.ca/athletics/facilities/');}}>Workout at Conestoga’s Athletic and Recreation Centre</Text>
                </Text>
            </Unorderedlist>  
            <Text style={style2.titleText2}>Security Services</Text>
            <Unorderedlist bulletUnicode={0x2022} style={[medicalCareCSS.orderlist,{marginLeft:30}]}>
              <Text style={style2.paraText}>
                <Text style={[style2.paraText],{color:'blue'}} onPress={()=>{Linking.openURL('https://www.conestogac.on.ca/security-services/walksafe');}}>Walksafe Program</Text>
                </Text>
            </Unorderedlist>
            </View>
          </FlipCard>
        </View>
        <View style={{marginBottom:10}}></View>
        <View style={style2.outer1}>
        <View style={ medicalCareCSS.CardView }>
            <Text style={[style2.paraText,medicalCareCSS.CardViewText]}>Conestoga Students Inc. Health and Wellness Supports</Text>
            </View>
          <FlipCard style={[style2.flipcard,{paddingBottom:20}]}
            flipVertical={false}
            flipHorizontal={true}
            friction={20}
          >

<View style={{ width: "100%" ,alignItems: 'center'  }}>

              <View style= {medicalCareCSS.border}>
              <Image style={medicalCareCSS.image2} source={require('../../assets/res/offCampus.png')}></Image>
              
              </View>
            </View>
            <View style={medicalCareCSS.viewlist}>
            <Text style={style2.titleText1}>Athletics and Recreation</Text>
            <Unorderedlist bulletUnicode={0x2022} style={[medicalCareCSS.orderlist,{marginLeft:30}]}>
              <Text style={style2.paraText}>
                <Text style={[style2.paraText],{color:'blue'}} onPress={()=>{Linking.openURL('https://conestogastudents.com/support-wellness/csi-health-care-plans/');}}>Health Plan Information</Text>
                </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022} style={[medicalCareCSS.orderlist,{marginLeft:30}]}>
              <Text style={style2.paraText}>
                <Text style={[style2.paraText],{color:'blue'}} onPress={()=>{Linking.openURL('https://conestogastudents.com/wellness-office-microsite/#wellness_office_services');}}>Chiropractor, Physiotherapy and Registered Massage Therapy</Text>
                </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022} style={[medicalCareCSS.orderlist,{marginLeft:30}]}>
              <Text style={style2.paraText}>
                <Text style={[style2.paraText],{color:'blue'}} onPress={()=>{Linking.openURL('https://conestogastudents.com/support-wellness/#spiritual');}}>Spiritual Rooms</Text>
                </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022} style={[medicalCareCSS.orderlist,{marginLeft:30}]}>
              <Text style={style2.paraText}>
                <Text style={[style2.paraText],{color:'blue'}} onPress={()=>{Linking.openURL('https://conestogastudents.com/support-wellness/food-support/');}}>Food support</Text>
                </Text>
            </Unorderedlist>
            </View>
          </FlipCard>

        </View>
        <View style={{marginBottom:20}}></View>
        </ScrollView>
      </View>
    );
  }
}
export default RelatedService;

const medicalCareCSS = StyleSheet.create({
  CardView:
  {
    width: "100%",alignItems: 'center',display:'flex',justifyContent:'center',alignItems:'center'
  },
  CardViewText:
  {textAlign:'justify',textAlign:'center',fontWeight:'bold',fontSize:24,alignItems:'center',display:'flex',justifyContent:'center',marginTop:5},
  border:
  {
    borderTopColor:"black" ,borderTopWidth:2 , width:"90%" ,display:"flex",flexDirection:"column",alignItems:"center"
  },
  orderlist:
  {
    marginLeft:5
  },
  viewlist:{ height: 450, width: "100%", marginTop:20 },
  image:{
    width:200,
    height:200,
    marginLeft:2,
    marginRight:2,
   alignContent:'center',
   alignItems:'center',
    resizeMode:'contain',
    flexWrap:'wrap'
},
image1:{
  width:200,
  height:200,
  marginLeft:2,
  marginRight:2,
 alignContent:'center',
 alignItems:'center',
  resizeMode:'contain',
  flexWrap:'wrap'
},
image2: {
  height: 300,
  marginLeft: 2,
  marginRight: 2,
  alignContent: "center",
  alignItems: "center",
  width: 300,
  resizeMode: "contain",
  flexWrap: "wrap",
},
})