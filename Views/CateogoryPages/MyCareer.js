import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  Animated,
  StatusBar,
} from "react-native";
import { Link, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Component } from "react";
import styles from "../../style";
import CardView from 'react-native-cardview';
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
      <View style={[styles1.MainContent,{backgroundColor:'#fff4ce'}]} >
        <StatusBar barStyle="dark-content"/>        
        <ScrollView
          scrollEventThrottle={16}
          contentContainerStyle={[styles.content,{ paddingTop: HEADER_MAX_HEIGHT }]}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.scrollYAnimatedValue } } }]
          )}
          style={{ backgroundColor: "white",marginTop: 10 }}
        >
          <View style={styles1.container}>

            <CardView
              cardElevation={4}
              cardMaxElevation={4}
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
              <Text style={styles.titleText}>How we can Help You?</Text>
              <Text style={styles1.paragraph}>
                <Text style={styles.initial}>C</Text>
                <Text>
                  onestoga College offers a variety of services that support your
                  wellness. Students currently living in Ontario can access the
                  college’s remote medical care and mental health supports to
                  discuss any physical and mental health issues they are
                  experiencing.
              </Text>
              </Text>
            </CardView>

            <View style={styles.scrollviewset}>
              <CardView
                cardElevation={4}
                cardMaxElevation={4}
                cornerRadius={5}>
                <Text style={styles.titleText1}>Be Career Ready</Text>
                <View style={styles.viewset}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <Link to="/CareerAdvice">
                      <View style={[styles1.imageview,{paddingLeft:15}]}>
                        <Image
                          source={require("../../assets/res/myCareer/icon-career-advice.png")}
                          style={styles1.imageprop}
                        ></Image>
                      </View>
                    </Link>
                    <Link to="/JobSearch">
                      <View style={styles1.imageview}>
                        <Image
                          source={require("../../assets/res/myCareer/icon-job-search.png")}
                          style={styles1.imageprop}
                        ></Image>
                      </View>
                    </Link>
                    <Link to="/CareerEvents">
                      <View style={styles1.imageview}>
                        <Image
                          source={require("../../assets/res/myCareer/icon-career-events.png")}
                          style={styles1.imageprop}
                        ></Image>
                      </View>
                    </Link>
                    <Link to="/mcContact">
                      <View style={[styles1.imageview,{paddingRight:30}]}>
                        <Image
                          source={require("../../assets/res/myCareer/icon-contact.png")}
                          style={styles1.imageprop}
                        ></Image>
                      </View>
                    </Link>

                  </ScrollView>
                </View>
              </CardView>

              <CardView
                cardElevation={4}
                cardMaxElevation={4}
                style={{
                  marginLeft: 20, marginRight: 20, 
                  marginTop:30,
                  backgroundColor: "#eff0f1",
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
                <Text style={styles.titleText2}>We can help</Text>

                <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 22, marginLeft: 20 }}><Text style={styles.paraText1}>Explore career options related to your program of study</Text></Unorderedlist>
                <View style={styles1.lineStyle} ></View>
                <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 22, marginLeft: 20 }} ><Text style={styles.paraText1}>Use the knowledge, skills and experience you've gained as a student to achieve your career goals</Text></Unorderedlist>
                <View style={styles1.lineStyle} ></View>
                <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 22, marginLeft: 20 }}><Text style={styles.paraText1}>Demonstrate your qualifications and communicate effectively with employers </Text></Unorderedlist>
                <View style={styles1.lineStyle} ></View>
                <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 22, marginLeft: 20 }}><Text style={styles.paraText1}>Search for a part-time job or full-time graduate position</Text></Unorderedlist>
                <View style={[styles1.lineStyle,{borderWidth:0}]} ></View>

              </CardView>
              <View style={{ marginBottom: 125 }}></View>
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
            source={require("../../assets/res/myCareer.png")}
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
  MainContent: {
    flex: 1,    
  },

  Header: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
  },

  paraText1: {
    fontSize: 20,
    paddingTop: 5,
    textAlign: 'center',

  },

  HeaderInsideText: {
    width: "100%",
  },

  TextViewStyle: {
    textAlign: "center",
    color: "#000",
    fontSize: 18,
    margin: 5,
    padding: 7,
  },
  
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    marginTop: 10
  },
  imageprop:
  {
    marginLeft: -30,
    marginRight: -30,
    flex: 1, width: 230, height: 230, resizeMode: 'cover',
    paddingBottom: -20,
    shadowOpacity: 0.05,
    shadowRadius: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10
    }
  },
  container:
  {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 25,
  },
  paragraph:
  {
    margin: 24,
    fontSize: 18,
    textAlign: 'justify',
    justifyContent: 'center',
    color: '#34495e'
  }
});
