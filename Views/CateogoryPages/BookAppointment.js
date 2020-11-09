import React, { Component } from "react";
import {
    Animated,
    KeyboardAvoidingView,
    StatusBar,
    ScrollView,
    StyleSheet,
    Text,
    Linking,
    TextInput,
    View,
    FlatList,
    Image
  } from "react-native";
  import { Card,Icon,Button } from 'react-native-elements';
  import ListView from "react-native";
import style from "../../style";
import CardView from "react-native-cardview";
const mailSubject = 'Accessible Learning';
const mailURL = 'mailto:accessibility@conestogac.on.ca?subject=' + mailSubject
  
class BookAppointment extends Component {
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
          //main Content view
      <View style={{backgroundColor:"#ffffff"}}>
      {/* statusbar theme */}
      <StatusBar barStyle="dark-content" />
     
      <ScrollView
        scrollEventThrottle={16}
        contentContainerStyle={{paddingTop: HEADER_MAX_HEIGHT }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: this.scrollYAnimatedValue } } }]
        )}
        style={{ backgroundColor: "white" }}
        >
          <View style={styles.container}>
              <Text style={styles.initial}>B
          <Text style={styles.titleText}>ook an Appointment</Text>
          </Text>
                 <Card title='Medical Care Clinic'>
                 <Text style={{marginBottom:10}}>
                     <Text style={styles.paraText}>To make a medical appointment call</Text>
                 <Text style={[styles.paraText], { color: 'blue' , fontSize:16 }} onPress={() => { Linking.openURL("tel:519-748-5220;3679"); }}>  519-748-5220 ext. 3679</Text>
                 <Text style={styles.paraText}> or</Text>
                 <Text style={[styles.paraText], { color: 'blue' , fontSize:16 }} onPress={() => { Linking.openURL("https://studentsuccess.conestogac.on.ca/myWellness/Contact#Medical"); }}> visit the clinic at Doon Campus.
                </Text>
                </Text>     
                <Button
                        icon={<Icon  color='#ffffff' />}
                        buttonStyle={{borderRadius: 2, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Book Appointment' onPress={() => { Linking.openURL("https://successportal.conestogac.on.ca/students/appointments/app/?siteId=1"); }}/>
                 </Card>  
                
                 <Card title='Counselling'>
                 <Text style={{marginBottom:10}}>
                     <Text style={styles.paraText}>For counselling appointments call </Text>
                 <Text style={[styles.paraText], { color: 'blue' , fontSize:16 }} onPress={() => { Linking.openURL("tel:519-748-5220;3360"); }}>  519-748-5220 ext. 3360</Text>
                 <Text style={styles.paraText}> or</Text>
                 <Text style={[styles.paraText], { color: 'blue' , fontSize:16 }} onPress={() => { Linking.openURL("https://studentsuccess.conestogac.on.ca/myWellness/Contact#Counselling"); }}> visit Counselling Services</Text> <Text style={styles.paraText}>at your campus. 
                </Text>
                </Text>     
                <Button
                        icon={<Icon  color='#ffffff' />}
                        buttonStyle={{borderRadius: 2, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Book Appointment' onPress={() => { Linking.openURL("https://successportal.conestogac.on.ca/students/appointments/app/?siteId=1"); }}/>
                 </Card>   
                 <Card title='Career Advicing'>
                 <Text style={{marginBottom:10}}>
                     <Text style={styles.paraText}>For questions or more information on myCareer Services</Text>
                 <Text style={[styles.paraText], { color: 'blue' , fontSize:16 }} onPress={() => { Linking.openURL("https://studentsuccess.conestogac.on.ca/myCareer/contact"); }}> please contact us.</Text>
                </Text>     
                <Button
                        icon={<Icon  color='#ffffff' />}
                        buttonStyle={{borderRadius: 2, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Book Appointment' onPress={() => { Linking.openURL("https://successportal.conestogac.on.ca/students/appointments/app/?siteId=1"); }}/>
                 </Card>   
                 <Card title='Tutoring and Advising'>
                 <Text style={{marginBottom:10}}>
                     <Text style={styles.paraText}>For general academic support or questions use the</Text>
                 <Text style={[styles.paraText], { color: 'blue' , fontSize:16 }} onPress={() => { Linking.openURL("https://successportal.conestogac.on.ca/Form.aspx?id=63"); }}> online self-referral form</Text>
                 <Text style={styles.paraText}> to connect with a Student Success Advisor.</Text>
                 
                
                </Text>     
                <Button
                        icon={<Icon  color='#ffffff' />}
                        buttonStyle={{borderRadius: 2, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Click here to Book a Tutor' onPress={() => { Linking.openURL("https://successportal.conestogac.on.ca/students/appointments/app/?siteId=1"); }}/>
                 </Card>   
                 <Card title='Accessible Learning'>
                 <Text style={{marginBottom:20}}>
                     <Text style={styles.paraText}>To book an appointment with an Accessibility Advisor email</Text>
                 <Text style={[styles.paraText], { color: 'blue' , fontSize:16 }} onPress={() => { Linking.openURL(mailURL); }}> accessibility@conestogac.on.ca</Text>
                 <Text style={styles.paraText}> or</Text>
                 <Text style={[styles.paraText], { color: 'blue' , fontSize:16 }} onPress={() => { Linking.openURL("https://studentsuccess.conestogac.on.ca/myLearning/Contact#Accessible"); }}> contact us at your campus location. 
                </Text>
                </Text>     
                <Button
                        icon={<Icon  color='#ffffff' />}
                        buttonStyle={{borderRadius: 2, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Book Appointment' onPress={() => { Linking.openURL("https://successportal.conestogac.on.ca/students/appointments/app/?siteId=1"); }}/>
                 </Card>   
                 <Card title='Upcoming Appointment'>
                 <Button
                        icon={<Icon  color='#ffffff' />}
                        buttonStyle={{borderRadius: 2, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Click here to view upcoming Appointment' onPress={() => { Linking.openURL("https://successportal.conestogac.on.ca/students/appointments/Bookings"); }}/>
                </Card>
                <View style={{marginBottom:40}}></View>
          </View>
          </ScrollView>
          <Animated.View
          style={[
            styles.Header,
            {
              height: headerHeight,
            },
          ]}
        >
          <Image
            source={require("../../assets/res/bookAppointment.jpg")}
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
  const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    Header: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
      },
      paraText: {
        marginLeft: 20,
        marginBottom: 3,
        fontSize: 18,
        width: "90%",
        paddingHorizontal: 10,
        marginVertical: 1,
        textAlign: "justify",
        alignItems: "center",
        alignContent: "center",
        alignItems: "center",
        // borderWidth: 1,
        // borderRadius: 3,
        //borderColor: "#ffffff",
        // color: "#333",
        //backgroundColor: "#eff0f1",
        //flexDirection:'row'
      },
      titleText: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center",
      },
      initial:
      {
          fontSize:40,
          textAlign:'center',
          fontWeight:'bold'
      }
  });
  export default BookAppointment;