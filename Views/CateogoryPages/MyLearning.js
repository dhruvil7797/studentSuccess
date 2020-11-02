import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  Animated,
  StatusBar,
  Linking,
} from "react-native";
import { Link, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CardView from "react-native-cardview";
import { Component } from "react";
import styles from "../../style";
import { BorderlessButton } from "react-native-gesture-handler";
import { Platform } from "react-native";
import Unorderedlist from "react-native-unordered-list";

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
      //main Content view
      <View style={{ backgroundColor: "#ffffff" }}>
         {/* statusbar theme */}
        <StatusBar barStyle="dark-content" />
        <ScrollView
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.scrollYAnimatedValue } } }]
          )}
          style={{ backgroundColor: "white", marginTop: 30 }}
        >
          <View style={styles.container}>
             {/* CardView contains information on myLearning */}
            <CardView
              cardElevation={4}
              cardMaxElevation={4}
              style={{
                marginLeft: 20,
                marginRight: 20,
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
              <Text style={styles.titleText}>myLearning!</Text>
              <Text style={styles1.paragraph}>
                <Text style={styles.initial}>C</Text>
                <Text>
                  onestoga College offers a variety of services that support
                  your wellness. Students currently living in Ontario can access
                  the college’s remote medical care and mental health supports
                  to discuss any physical and mental health issues they are
                  experiencing.
                </Text>
              </Text>
            </CardView>
              {/* myLearning services stated under horizontal scrollview
                  Each services seperated with CardView */}
            <View style={styles.scrollviewset}>
              <CardView cardElevation={4} cardMaxElevation={4} cornerRadius={5}>
                <Text style={styles.titleText1}>Our Services + Supports</Text>
                <View style={styles.viewset}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <Link to="/AcademicTesting">
                      <View style={styles1.imageview}>
                        <Image
                          source={require("../../assets/res/myLearning/icon-testing-grey.png")}
                          style={styles.imageprop}
                        ></Image>
                      </View>
                    </Link>
                    <Link to="/ServiceAndSupport">
                      <View style={styles1.imageview}>
                        <Image
                          source={require("../../assets/res/myLearning/serviceAndSupport.png")}
                          style={styles.imageprop}
                        ></Image>
                      </View>
                    </Link>
                    <Link to="/Tutoring">
                      <View style={styles1.imageview}>
                        <Image
                          source={require("../../assets/res/myLearning/tuitoring.png")}
                          style={styles.imageprop}
                        ></Image>
                      </View>
                    </Link>
                    <Link to="/Transition">
                      <View style={styles1.imageview}>
                        <Image
                          source={require("../../assets/res/myLearning/transition.png")}
                          style={styles.imageprop}
                        ></Image>
                      </View>
                    </Link>
                    <Link to="/mlRelatedService">
                      <View style={styles1.imageview}>
                        <Image
                          source={require("../../assets/res/myLearning/relatedServie.png")}
                          style={styles.imageprop}
                        ></Image>
                      </View>
                    </Link>

                    <Link to="/mlContact">
                      <View style={styles1.imageview1}>
                        <Image
                          source={require("../../assets/res/myLearning/contact.png")}
                          style={[styles1.imageprop, { marginRight: 20 }]}
                        ></Image>
                      </View>
                    </Link>
                  </ScrollView>
                </View>
              </CardView>

              <CardView cardElevation={4} cardMaxElevation={4} cornerRadius={5} 
              style={{ marginLeft:20,marginRight:20, backgroundColor:"#eff0f1", 
            shadowColor: "#000",
            shadowOffset: {
              width: 5,
              height: 5,
            },
            shadowOpacity: 0.5,
            shadowRadius: 3.84,
            elevation: 5,
            marginBottom:125,
            marginTop:30 }}>
                <Text style={styles.titleText2}>We Support</Text>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Text
                    style={[styles.paraText1, { color: "blue" }]}
                    onPress={() => {
                      Linking.openURL(
                        "https://studentsuccess.conestogac.on.ca/DropIn"
                      );
                    }}
                  >
                    Math, Accounting and Statistics help
                  </Text>
                </Unorderedlist>

                <View style={styles1.lineStyle}></View>
                 {/*Unorderlist contain information on how myLearning can help student */}
                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Text
                    style={[styles.paraText1, { color: "blue" }]}
                    onPress={() => {
                      Linking.openURL(
                        "https://lib.conestogac.on.ca/writing-services"
                      );
                    }}
                  >
                    Writing and Citing
                  </Text>
                </Unorderedlist>
                <View style={styles1.lineStyle}></View>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Text
                    style={[styles.paraText1, { color: "blue" }]}
                    onPress={() => {
                      Linking.openURL(
                        "https://lib.conestogac.on.ca/ask-us/research-appointments"
                      );
                    }}
                  >
                    Reasearch
                  </Text>
                </Unorderedlist>
                <View style={styles1.lineStyle}></View>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Text
                    style={[styles.paraText1, { color: "blue" }]}
                    onPress={() => {
                      Linking.openURL(
                        "https://lib.conestogac.on.ca/c.php?g=698153&p=5006696"
                      );
                    }}
                  >
                    Academic Integrity
                  </Text>
                </Unorderedlist>
                <View style={styles1.lineStyle}></View>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Text
                    style={[styles.paraText1, { color: "blue" }]}
                    onPress={() => {
                      Linking.openURL(
                        "https://studentsuccess.conestogac.on.ca/StudentReferral"
                      );
                    }}
                  >
                    Learning Skills and Tutoring
                  </Text>
                </Unorderedlist>
                <View style={styles1.lineStyle}></View>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Text
                    style={[styles.paraText1, { color: "blue" }]}
                    onPress={() => {
                      Linking.openURL(
                        "https://studentsuccess.conestogac.on.ca/myLearning/AcademicAndTestingAccommodations"
                      );
                    }}
                  >
                    Accessible Learning and Accommodation
                  </Text>
                </Unorderedlist>
                <View style={styles1.lineStyle}></View>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Text
                    style={[styles.paraText1, { color: "blue" }]}
                    onPress={() => {
                      Linking.openURL(
                        "https://lib.conestogac.on.ca/assistive-technology"
                      );
                    }}
                  >
                    Learning and Assistive Technology
                  </Text>
                </Unorderedlist>
                <View style={styles1.lineStyle}></View>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Text
                    style={[styles.paraText1, { color: "blue" }]}
                    onPress={() => {
                      Linking.openURL(
                        "https://lib.conestogac.on.ca/Tech-Loans-Help/tutors"
                      );
                    }}
                  >
                    Tech Support
                  </Text>
                  <Link to="/TechSupport">
                    <View style={styles1.imageview}>
                      <Text style={styles.paraText1}></Text>
                    </View>
                  </Link>
                </Unorderedlist>
              </CardView>
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
            source={require("../../assets/res/myLearning.png")}
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

  Header: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
  },



  TextViewStyle: {
    textAlign: "center",
    color: "#000",
    fontSize: 18,
    margin: 5,
    padding: 7,
  },
  imageprop: {
    marginLeft: -30,
    marginRight: -30,
    flex: 1,
    width: 230,
    height: 230,
    resizeMode: "cover",
    paddingBottom: -20,
    shadowOpacity: 0.05,
    shadowRadius: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: "justify",
    justifyContent: "center",
    color: "#34495e",
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "black",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    marginTop: 10,
  },
});