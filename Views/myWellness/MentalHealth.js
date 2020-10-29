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
class MentalHealth extends Component {
  render() {
    return (

      <View style={style2.container}>
        <View>
          <Text style={[style2.titleText, { paddingBottom: 20 }]}>MentalHealth Support and Resources</Text>
          <View style={{ width: "100%", marginBottom: 20 }}>
            <Text style={{ textAlign: "center", color: "grey" }}>Click on card to view description</Text>
          </View>
        </View>
        <ScrollView>
          <View style={style2.outer}>
            <View style={{ borderBottomColor: "black", borderBottomWidth: 2, paddingBottom: 10, marginLeft: 20, marginRight: 20 }} >
              <Text style={style2.titleText1}>The Breathing Space</Text>
            </View>

            <FlipCard style={[style2.flipcard, { paddingBottom: 20 }]}
              flipVertical={false}
              flipHorizontal={true}
              friction={20}
            >

              <View style={{ width: "100%", alignItems: 'center' }}>
                <Image style={style2.image} source={require('../../assets/res/BreathingLogo.png')}></Image>
                <View style={{ borderTopColor: "black", borderTopWidth: 2, width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>


                  <Text style={[style2.paraText, { marginLeft: 0, textAlign: "center", fontWeight: "bold", marginTop: 5, color: "green" }]}> Opening hours</Text>
                  <Text style={[style2.paraText, { marginLeft: 0 }]}> Monday - Friday from 8:30AM - 4PM</Text>

                </View>
              </View>
              <View style={{ height: 200, width: "100%", marginTop: 20 }}>
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

          <View style={style2.outer}>
            <View style={{ borderBottomColor: "black", borderBottomWidth: 2, paddingBottom: 10, marginLeft: 20, marginRight: 20 }} >
              <Text style={style2.titleText1}>Self Help</Text>
            </View>

            <FlipCard style={[style2.flipcard, { paddingBottom: 20 }]}
              flipVertical={false}
              flipHorizontal={true}
              friction={20}
            >

              <View style={{ width: "100%", alignItems: 'center' }}>
                <Image style={style2.image} source={require('../../assets/res/selfhelp.jpg')}></Image>
                <View style={{ borderTopColor: "black", borderTopWidth: 2, width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>


                  <Text style={[style2.paraText, { marginLeft: 0, textAlign: "center", fontWeight: "bold", marginTop: 5, color: "green" }]}>For more self-help ideas</Text>
                  <Text style={[style2.paraText, { marginLeft: 0 }]}> visit our mental health resources page. </Text>

                </View>
              </View>
              <View style={{ height: 200, width: "100%", marginTop: 20 }}>
                <Text style={style2.paraText}>
                  <Text style={style2.initial}>S</Text>
                  <Text>
                    elf-help refers to techniques students can employ to maintain their own wellness. Another way of framing this is self-care. The Breathing Space is a great space to practice self-help and our peer support navigator is here to help provide guidance.
                        </Text>

                </Text>
              </View>
            </FlipCard>

          </View>
          <View style={{ marginTop: 10 }}></View>
          <View style={style2.outer}>
            <View style={{ borderBottomColor: "black", borderBottomWidth: 2, paddingBottom: 10, marginLeft: 20, marginRight: 20 }} >
              <Text style={style2.titleText1}>Peer Support</Text>
            </View>

            <FlipCard style={[style2.flipcard, { paddingBottom: 20 }]}
              flipVertical={false}
              flipHorizontal={true}
              friction={20}
            >

<View style={{ width: "100%", alignItems: 'center' }}>
                <Image style={style2.image} source={require('../../assets/res/peerSupport.png')}></Image>
                <View style={{ borderTopColor: "black", borderTopWidth: 2, width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                </View>
              </View>
              <View style={{ height: 200, width: "100%", marginTop: 20 }}>
                <Text style={style2.paraText}>
                  <Text style={style2.initial}>P</Text>
                  <Text>
                    eer support is a mental health and substance use service provided by an individual who has lived experience with these subjects. It focuses on building connections and sharing wellness tools and strategies. It is generally more relaxed and socially focused than counselling services, and can occur one-on-one or in a group setting.
                        </Text>
                </Text>
              </View>
            </FlipCard>
          </View>
          <View style={{ marginTop: 10 }}></View>
          <View style={style2.outer}>
          <View style={{ borderBottomColor: "black", borderBottomWidth: 2, paddingBottom: 10, marginLeft: 20, marginRight: 20 }} >
              <Text style={style2.titleText1}>Help A Student</Text>
            </View>

            <FlipCard style={[style2.flipcard, { paddingBottom: 20 }]}
              flipVertical={false}
              flipHorizontal={true}
              friction={20}
            >
             <View style={{ width: "100%", alignItems: 'center' }}>
                <Image style={style2.image} source={require('../../assets/res/helpStudent.png')}></Image>
               
              </View>
              <View style={{ height: 450, width: "100%"}}>
                <Text style={style2.paraText}>
                  <Text style={style2.initial}>A</Text>
                  <Text>
                    re you worried about a friend's well-being? Often asking them if they need someone to talk to, and taking the time to listen, is a great first step to providing them with help. We suggest connecting with the Peer Support Navigator for advice or encouraging your friend to connect with one of the college wellness services.
                </Text>
                </Text>
                <Text style={style2.paraText}>
                  <Text>If you are concerned your friend is in immediate danger of harming themselves or others, please refer to our Emergency and Crisis Care information.
                 </Text>
                </Text>
              </View>
            </FlipCard>

          </View>
          <View style={{ marginTop: 10 }}></View>
          <View style={style2.outer}>
          <View style={{ borderBottomColor: "black", borderBottomWidth: 2, paddingBottom: 10, marginLeft: 20, marginRight: 20 }} >
              <Text style={style2.titleText1}>Off-campus mental health supports for students</Text>
            </View>
            <FlipCard style={[style2.flipcard, { paddingBottom: 20 }]}
              flipVertical={false}
              flipHorizontal={true}
              friction={20}
            >
               <View style={{ width: "100%", alignItems: 'center' }}>
                <Image style={style2.image} source={require('../../assets/res/offCampus.png')}></Image>
               
              </View>
              <View style={{ height: 500, width: "100%"}}>
                <Unorderedlist bulletUnicode={0x2022} style={{ marginLeft: 5 }}>
                  <Text style={style2.paraText1}>
                    <Text style={[style2.paraText1], { color: 'blue' }} onPress={() => { Linking.openURL('https://good2talk.ca/ontario/'); }}>Good2Talk</Text>
                    <Text> provides free and confidential support services for all Ontario post-secondary students, 24 hours a day, 7 days a week, 365 days a year.</Text>
                  </Text>
                 
                </Unorderedlist>

                <Unorderedlist bulletUnicode={0x2022} style={{ marginLeft: 5 }}>
                  <Text style={style2.paraText1}>If you are concerned your friend is in immediate danger of harming themselves or others, please refer to our Emergency and Crisis Care information.
              </Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x2022} style={{ marginLeft: 5 }}>
                  <Text style={style2.paraText1}>
                    <Text style={[style2.paraText1], { color: 'blue' }} onPress={() => { Linking.openURL('https://here247.ca/'); }}>Here247</Text>
                    <Text style={style2.paraText1}> is an addictions, mental health and crisis services hotline for individuals in Waterloo and Wellington regions. They help navigate community mental health, recovery and medical services.
              </Text></Text></Unorderedlist>
              

              </View>
            </FlipCard>
          </View>
          <View style={{ marginBottom: 20}}></View>

        </ScrollView>
      </View>
    );
  }
}

export default MentalHealth;