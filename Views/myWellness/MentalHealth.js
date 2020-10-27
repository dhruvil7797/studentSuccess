import React, { Component } from 'react';
import { Animated, KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Button, TouchableWithoutFeedback, Keyboard, Linking } from 'react-native';
import styles from '../../style';
import style2 from '../../CSS/MyWellnessStyle';
import CardView from 'react-native-cardview';
import FlipCard from 'react-native-flip-card';
import { Card } from 'react-native-elements';

const mailSubject = 'Mobile Solution Development!!!'
class MentalHealth extends Component {
  render() {
    return (

      <View style={style2.container}>
        <Text style={[style2.titleText, { paddingBottom: 20 }]}>MentalHealth Support and Resources</Text>
        <View style={{width:"100%", marginBottom:20}}>
            <Text style={{textAlign:"center", color:"grey"}}>Click on card to view description</Text>
          </View>
        <View style={style2.outer}>
          <View style={{ borderBottomColor: "black", borderBottomWidth: 2, paddingBottom: 10, marginLeft: 20, marginRight: 20 }} >
            <Text style={style2.titleText1}>The Breathing Space</Text>
          </View>
          
          <FlipCard style={[style2.flipcard,{paddingBottom:20}]}
            flipVertical={false}
            flipHorizontal={true}
            friction={20}
          >

            <View style={{ width: "100%" ,alignItems: 'center'  }}>
              <Image style={style2.image} source={require('../../assets/res/BreathingLogo.png')}></Image>
              <View style= {{borderTopColor:"black" ,borderTopWidth:2 , width:"100%" ,display:"flex",flexDirection:"column",alignItems:"center" }}>


                <Text style={[style2.paraText,{marginLeft:0,textAlign:"center" ,fontWeight: "bold", marginTop:10, color:"green" }]}> Opening hours</Text>
                <Text style={[style2.paraText,{marginLeft:0}]}> Monday - Friday from 8:30AM - 4PM</Text>

              </View>
            </View>
            <View style={{ height: 200, width: "100%", marginTop:20 }}>
              <Text style={style2.paraText}>
                <Text style={style2.initial}>T</Text>
                <Text>
                  his student wellness space, located in Doon 1A107, is home to the Peer Support Navigator. It is a quiet place on campus for students to take a break. The room is stocked with stress-busting activities and runs wellness-focused, drop-in groups throughout the week.
                        </Text>

              </Text>
            </View>



          </FlipCard>

        </View>
        <View style={{ marginTop: 10 }}></View>
        <CardView
          cardElevation={2}
          cardMaxElevation={2}
          style={{
            marginLeft: 20, marginRight: 20, backgroundColor: "#eff0f1",
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
          <Text style={style2.titleText1}>Self Help</Text>
          <View style={{ flexDirection: 'row-reverse' }}>
            <Image style={style2.image} source={require('../../assets/res/selfhelp.jpg')}></Image>
            <Text style={style2.paraText}>
              <Text style={style2.initial}>T</Text>
              <Text>
                his student wellness space, located in Doon 1A107, is home to the Peer Support Navigator. It is a quiet place on campus for students to take a break. The room is stocked with stress-busting activities and runs wellness-focused, drop-in groups throughout the week.
                        </Text>

            </Text>
          </View>
          <Text style={[style2.paraText, { width: '98%', marginTop: 3 }]}>
            <Text>The Breathing Space is open Monday - Friday from 8:30 am - 4 pm.</Text>
          </Text>
        </CardView>
      </View>
    );
  }
}

export default MentalHealth;