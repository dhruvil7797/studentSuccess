import React, { Component } from 'react';
import { Animated, KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Button, TouchableWithoutFeedback, Keyboard, Linking } from 'react-native';
import styles from '../../style';
import style2 from '../../CSS/MyWellnessStyle';
import CardView from 'react-native-cardview';
import FlipCard from 'react-native-flip-card';
import { Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Unorderedlist from 'react-native-unordered-list';
import Medical_Care from './Medical_Care'
const mailSubject = 'Mobile Solution Development!!!';
import { Link, NavigationContainer } from '@react-navigation/native';

class HealthInsurance extends Component{
  render() {
    return (
      //Main content View 
      <View style={style2.container}>
      <Text style={[style2.titleText, { paddingBottom: 20 }]}>Health Insurance</Text>
      <View style={{width:"100%", marginBottom:20}}>
          <Text style={{textAlign:"center", color:"grey"}}>Click on card to view description</Text>
        </View>
        <ScrollView>  
          {/*It contains the flipCard view of student health insurance plan */}
        <View style={style2.outer1}>
        <View style={ [medicalCareCSS.CardView],{marginTop:5} }>
            <Text style={[style2.paraText1,medicalCareCSS.CardViewText]}>Conestoga Student Health Insurance Plan</Text>
            </View>
            <FlipCard style={[style2.flipcard, { paddingBottom: 20 }]}
              flipVertical={false}
              flipHorizontal={true}
              friction={20}
            >
              
              <View style={{ width: "100%" ,alignItems: 'center'  }}>

              <View style= {medicalCareCSS.border}>
              <Image style={medicalCareCSS.image2} source={require('../../assets/res/healthInsurance.png')}></Image>
              
              </View>
            </View>
            {/*It contains backside of flipCard which shows information on how they can use Student Health Insurance Plan*/}
              <View style={{ height: 200, width: "100%", marginTop: 20 }}>
              <Text style={style2.paraText}>
                <Text style={style2.initial}>T</Text>
                <Text style={style2.paraText}>he</Text>
                    <Text style={[style2.paraText], { color: 'blue' }} onPress={() => { Linking.openURL('http://studentcare.ca/rte/en/IHaveAPlan_CSI_Home'); }}> student health insurance plans</Text>
                    <Text> are provided through Conestoga Students Inc. (CSI). If you have any questions about the plan, please</Text>
                    <Text style={[style2.paraText], { color: 'blue' }} onPress={() => { Linking.openURL('https://conestogastudents.com/support-wellness/csi-health-care-plans/'); }}>  visit their website</Text>
                    <Text> for details and contact information.</Text>
                  </Text> 
              </View>
            </FlipCard>
          </View>
          <View style={{marginBottom:10}}></View>
          {/*It contains the flipCard view of international student */}
          <View style={style2.outer1}>
          <View style={ [medicalCareCSS.CardView],{marginTop:5} }>
            <Text style={[style2.paraText1,medicalCareCSS.CardViewText]}>International Students</Text>
            </View>
          <FlipCard style={[style2.flipcard,{paddingBottom:20}]}
            flipVertical={false}
            flipHorizontal={true}
            friction={20}
          >

<View style={{ width: "100%" ,alignItems: 'center'  }}>

              <View style= {medicalCareCSS.border}>
              <Image style={medicalCareCSS.image2} source={require('../../assets/res/international.png')}></Image>
              
              </View>
            </View>
             {/*It contains backside of flipCard which shows information on how international can use Student Health Insurance Plan*/}
            <View style={medicalCareCSS.viewlist}>
            <Text style={style2.paraText}>
                <Text style={style2.initial}>I</Text>
                <Text style={style2.paraText}>n addition to the basic CSI health care plan, international students also have the</Text>
                    <Text style={[style2.paraText], { color: 'blue' }} onPress={() => { Linking.openURL('https://cihip.ca/'); }}> College International Health Insurance Plan. </Text>
                    <Text>Please</Text>
                    <Text style={[style2.paraText], { color: 'blue' }} onPress={() => { Linking.openURL('https://conestogastudents.com/support-wellness/csi-health-care-plans/#contact'); }}> contact CSI</Text>
                    <Text> if you have any questions about this supplemental insurance.</Text>
                  </Text> 
            </View>
          </FlipCard>

        </View>
        <View style={{marginBottom:10}}></View>
        {/*It contains the flipCard view of ontario resident students */}
          <View style={style2.outer1}>
          <View style={ [medicalCareCSS.CardView],{marginTop:5} }>
            <Text style={[style2.paraText1,medicalCareCSS.CardViewText]}>Ontario Resident Students</Text>
            </View>
          <FlipCard style={[style2.flipcard,{paddingBottom:20}]}
            flipVertical={false}
            flipHorizontal={true}
            friction={20}
          >

<View style={{ width: "100%" ,alignItems: 'center'  }}>

              <View style= {medicalCareCSS.border}>
              <Image style={medicalCareCSS.image2} source={require('../../assets/res/ontarioResident.png')}></Image>
              
              </View>
            </View>
             {/*It contains backside of flipCard which shows information on how ontario residents can use Student Health Insurance Plan*/}
            <View style={medicalCareCSS.viewlist}>
            <Text style={style2.paraText}>
                <Text style={style2.initial}>I</Text>
                <Text style={style2.paraText}>f your home address is in Ontario, the Ontario Health Insurance Plan (OHIP) regulations require that you present your health card at every medical appointment. Students without valid health insurance are responsible for paying directly for medical services. For more information please visit the provincial government's page on</Text>
                    <Text style={[style2.paraText], { color: 'blue' }} onPress={() => { Linking.openURL('https://www.ontario.ca/page/health-care-ontario'); }}>  Health care in Ontario. </Text>
                  </Text> 
            </View>
          </FlipCard>

        </View>
        <View style={{marginBottom:10}}></View>
        {/*It contains the flipCard view of extra charges */}
          <View style={style2.outer1}>
          <View style={ [medicalCareCSS.CardView],{marginTop:5} }>
            <Text style={[style2.paraText1,medicalCareCSS.CardViewText]}>Extra Charges</Text>
            </View>
          <FlipCard style={[style2.flipcard,{paddingBottom:20}]}
            flipVertical={false}
            flipHorizontal={true}
            friction={20}
          >

<View style={{ width: "100%" ,alignItems: 'center'  }}>

              <View style= {medicalCareCSS.border}>
              <Image style={medicalCareCSS.image2} source={require('../../assets/res/extracharge.png')}></Image>
              
              </View>
            </View>
             {/*It contains backside of flipCard which shows information on Extra charges*/}
            <View style={medicalCareCSS.viewlist}>
            <Text style={style2.paraText}>
                <Text style={style2.initial}>T</Text>
                <Text style={style2.paraText}>here are some medical services that are not covered by OHIP or the student health insurance plans. For students using</Text>
                <Text style={{color:"blue"}}><Link to='/Medical_Care'> Conestoga's Medical Care Clinic,</Link> </Text>
                <Text style={style2.paraText}>a full list of these services and their charges is available at the reception desk. <Text style={[style2.paraText],{fontWeight:'bold'}}>Services not covered must be paid for in cash.</Text> Examples of services not covered include missed appointment fees, doctors notes or completion of forms, medical record transfers and some cosmetic skin treatments. </Text>
                  </Text> 
            </View>
          </FlipCard>

        </View>
        </ScrollView>
        <View style={{marginBottom:20}}></View>
      </View>
    );
  }
}
export default HealthInsurance;

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