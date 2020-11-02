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
class MedicalCare extends Component{
  render() {
    return (
       //Main content View 
      <View style={style2.container}>
      <Text style={[style2.titleText, { paddingBottom: 20 }]}>Medical Care</Text>
      <View style={{width:"100%", marginBottom:20}}>
          <Text style={{textAlign:"center", color:"grey"}}>Click on card to view description</Text>
        </View>
        <ScrollView>
          {/*It contains the flipCard view of medical care */}
        <View style={style2.outer1}>
        <View style={ medicalCareCSS.CardView }>
            <Text style={[style2.paraText,medicalCareCSS.CardViewText]}>Medical Services Available</Text>
              
            </View>
          <FlipCard style={[style2.flipcard,{paddingBottom:20}]}
            flipVertical={false}
            flipHorizontal={true}
            friction={20}
          >

<View style={{ width: "100%" ,alignItems: 'center'  }}>

              <View style= {medicalCareCSS.border}>
              <Image style={medicalCareCSS.image2} source={require('../../assets/res/medicalCare.png')}></Image>
              <View style= {{borderTopColor:"black" ,borderTopWidth:2 , width:"100%" ,display:"flex",flexDirection:"column",alignItems:"center" }}>
                <Text>
                <Text style={[style2.paraText,{marginLeft:0,marginTop:5}]}>Doctor and nurse practitioner appointments are available to all Conestoga College students with OHIP or other</Text><Text style={{color:"blue"}}><Link to='/HealthInsurance'> health insurance plans.</Link>  </Text>         
                </Text>
              </View>
              </View>
            </View>
            {/*It contains backside of flipCard which shows information on how medical services are avilable for students*/}
            <View style={medicalCareCSS.viewlist}>
            <Unorderedlist bulletUnicode={0x2022} style={medicalCareCSS.orderlist}><Text style={style2.paraText}>Diagnosis and treatment of illness and injury</Text></Unorderedlist>
                
                <Unorderedlist bulletUnicode={0x2022} style={medicalCareCSS.orderlist}>
              <Text style={style2.paraText}>Sexual health - STI testing, PAP smear, birth control, pregnancy testing, etc. 
              </Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} style={medicalCareCSS.orderlist}>
              <Text style={style2.paraText}>Prenatal care (up to 28 weeks)</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} style={medicalCareCSS.orderlist}>
              <Text style={style2.paraText}>Specialist referrals</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} style={medicalCareCSS.orderlist}>
              <Text style={style2.paraText}>Mental health support</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} style={medicalCareCSS.orderlist}>
              <Text style={style2.paraText}>Sick notes and third-party forms ($)</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} style={medicalCareCSS.orderlist}>
              <Text style={style2.paraText}>Skin treatments ($ for some)</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} style={medicalCareCSS.orderlist}>
              <Text style={style2.paraText}>Immunizations and injections($)</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} style={medicalCareCSS.orderlist}>
              <Text style={style2.paraText}>Lab and phlebotomy (blood) services (requisition required)</Text></Unorderedlist>
             
            </View>
          </FlipCard>
        </View>
        <View style={{marginBottom:10}}></View>
         {/*It contains the flipCard view of medical care */}
        <View style={style2.outer1}>
        <View style={ medicalCareCSS.CardView }>
            <Text style={[style2.paraText,medicalCareCSS.CardViewText]}>What You need to Book an Appointment?</Text>
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
            {/*It contains backside of flipCard which shows information on how they students can book an appointment for medical services*/}
            <View style={medicalCareCSS.viewlist}>
            
             <Unorderedlist bulletUnicode={0x2022} style={medicalCareCSS.orderlist}>
              
              <Text style={style2.paraText}>
                <Text style={style2.paraText}>Students must present a valid </Text>
                <Text style={[style2.paraText],{color:'blue'}} onPress={()=>{Linking.openURL('https://www.conestogac.on.ca/onecard/');}}>ONECard(Student ID)</Text>
                <Text style={style2.paraText}>  and proof of <Text style={{color:"blue"}}><Link to='/HealthInsurance'> health insurance.</Link>  </Text>         
                </Text> 
                </Text>
            </Unorderedlist>
                
              <Unorderedlist bulletUnicode={0x2022} style={medicalCareCSS.orderlist}>
    
              <Text style={style2.paraText}>Please arrive 5 minutes early to complete any required forms and questionnaires. 
              </Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} style={medicalCareCSS.orderlist}>
              <Text style={style2.paraText}>Inform the front desk of any changes to your personal information.</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} style={medicalCareCSS.orderlist}>
              <Text style={style2.paraText}>There is a $30 fee for missed appointments without 24 hours' notice.</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} style={medicalCareCSS.orderlist}>
              <Text style={style2.paraText}>If you are late for an appointment, it will be at the medical team's discretion if they can still fit you in that day.</Text></Unorderedlist>
              
            </View>
          </FlipCard>

        </View>
        <View style={{marginBottom:20}}></View>
        </ScrollView>
      </View>
    );
  }
}
export default MedicalCare;

//stylesheet of medicalCare
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