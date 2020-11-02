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
class Counselling extends Component{
  render() {
    return (
      <View style={style2.container}>
      <Text style={[style2.titleText, { paddingBottom: 20 }]}>Counselling</Text>
      <View style={{width:"100%", marginBottom:20}}>
          <Text style={{textAlign:"center", color:"grey"}}>Click on card to view description</Text>
        </View>
        <ScrollView>  
        <View style={style2.outer1}>
        <View style={ [medicalCareCSS.CardView],{marginTop:5} }>
            <Text style={[style2.paraText1,medicalCareCSS.CardViewText]}>Support for mental health and wellness issues</Text>
            </View>
            <FlipCard style={[style2.flipcard, { paddingBottom: 20 }]}
              flipVertical={false}
              flipHorizontal={true}
              friction={20}
            >
              
              <View style={{ width: "100%" ,alignItems: 'center'  }}>

              <View style= {medicalCareCSS.border}>
              <Image style={medicalCareCSS.image2} source={require('../../assets/res/CounsellingM.png')}></Image>
              
              </View>
            </View>
              <View style={{ height: 450, width: "100%", marginTop: 20 }}>
              <Text style={style2.paraText}>Our counsellors provide short-term mental health support in a variety of areas. </Text>
              <Unorderedlist bulletUnicode={0x2022} style={medicalCareCSS.orderlist}>
              <Text style={style2.paraText}>Anxiety and stress</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} style={medicalCareCSS.orderlist}>
              <Text style={style2.paraText}>Depression</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} style={medicalCareCSS.orderlist}>
              <Text style={style2.paraText}>Thoughts of suicide or self-harm</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} style={medicalCareCSS.orderlist}>
              <Text style={style2.paraText}>Trauma (i.e. sexual or physical assault)</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} style={medicalCareCSS.orderlist}>
              <Text style={style2.paraText}>Feeling overwhelmed and not able to function</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} style={medicalCareCSS.orderlist}>
              <Text style={style2.paraText}>Relationships</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} style={medicalCareCSS.orderlist}>
              <Text style={style2.paraText}>Goal setting</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} style={medicalCareCSS.orderlist}>
              <Text style={style2.paraText}>Building resiliency </Text></Unorderedlist>
              </View>
            </FlipCard>
          </View>
          <View style={{marginBottom:10}}></View>
          <View style={style2.outer1}>
          <View style={ [medicalCareCSS.CardView],{marginTop:5} }>
            <Text style={[style2.paraText1,medicalCareCSS.CardViewText]}>What You need to Book an Appointment?</Text>
            </View>
          <FlipCard style={[style2.flipcard,{paddingBottom:20}]}
            flipVertical={false}
            flipHorizontal={true}
            friction={20}
          >

<View style={{ width: "100%" ,alignItems: 'center'  }}>

              <View style= {medicalCareCSS.border}>
              <Image style={medicalCareCSS.image2} source={require('../../assets/res/bookAppointment.jpg')}></Image>
              
              </View>
            </View>
            <View style={medicalCareCSS.viewlist}>
            
             <Unorderedlist bulletUnicode={0x2022} style={medicalCareCSS.orderlist}>
              
              <Text style={style2.paraText}>
                <Text style={style2.paraText}>Services are available to full-time students with a valid </Text>
                <Text style={[style2.paraText],{color:'blue'}} onPress={()=>{Linking.openURL('https://www.conestogac.on.ca/onecard/');}}>ONECard(Student ID)</Text>
                </Text>
            </Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} style={medicalCareCSS.orderlist}>    
              <Text style={style2.paraText}>All services are free of charge, voluntary and confidential.</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} style={medicalCareCSS.orderlist}>
              <Text style={style2.paraText}>Individual counselling sessions last up to 50 minutes.</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} style={medicalCareCSS.orderlist}>
              <Text style={style2.paraText}>Patients must complete an intake form before their initial appointment, so please arrive early to give yourself time to fill this in. </Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} style={medicalCareCSS.orderlist}>
              
              <Text style={style2.paraText}>Counsellors may provide referrals to community resources if required.</Text></Unorderedlist>
            </View>
          </FlipCard>

        </View>
        </ScrollView>
        <View style={{marginBottom:20}}></View>
      </View>
    );
  }
}
export default Counselling;

const medicalCareCSS = StyleSheet.create({
  CardView:
  {
    width: "100%",alignItems: 'center',display:'flex',justifyContent:'center',alignItems:'center'
  },
  CardViewText:
  {textAlign:'justify',textAlign:'center',fontWeight:'bold',fontSize:24,alignItems:'center',display:'flex',justifyContent:'center'},
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
  height:"60%",
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