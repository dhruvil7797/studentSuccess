import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  Animated,
} from "react-native";
import { Link, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CardView from "react-native-cardview";
import { Component } from "react";
import styles from "../../style";
import { BorderlessButton } from "react-native-gesture-handler";
import { Platform } from "react-native";
import Unorderedlist from "react-native-unordered-list";

const Header_Max_Height = 170;
const Header_Min_Height = 50;

export default class MyWellness extends Component {
  constructor() {
    super();
    this.AnimatedHeader = new Animated.Value(0);
  }

  render() {
    const AnimatedHeaderBackgroundColor = this.AnimatedHeader.interpolate({
      inputRange: [0, Header_Max_Height - Header_Min_Height],
      outputRange: ["#ffffff", "#ffffff"],
      extrapolate: "clamp",
    });
    const AnimateHeaderHeight = this.AnimatedHeader.interpolate({
      inputRange: [0, Header_Max_Height - Header_Min_Height],
      outputRange: [Header_Max_Height, 0],
      extrapolate: "clamp",
    });

    return (
      <View style={styles.MainContent}>
        <Text style={styles.titleText}>myLearning!</Text>
        <ScrollView
          scrollEventThrottle={16}
          contentContainerStyle={{
            paddingTop: Header_Max_Height - Header_Min_Height,
          }}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.AnimatedHeader } } },
          ])}
        >
          <View style={styles.container}>
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
                          style={styles1.imageprop}
                        ></Image>
                      </View>
                    </Link>
                    <Link to="/ServiceAndSupport">
                      <View style={styles1.imageview}>
                        <Image
                          source={require("../../assets/res/myLearning/serviceAndSupport.png")}
                          style={styles1.imageprop}
                        ></Image>
                      </View>
                    </Link>
                    <Link to="/Tutoring">
                      <View style={styles1.imageview}>
                        <Image
                          source={require("../../assets/res/myLearning/tuitoring.png")}
                          style={styles1.imageprop}
                        ></Image>
                      </View>
                    </Link>
                    <Link to="/Transition">
                      <View style={styles1.imageview}>
                        <Image
                          source={require("../../assets/res/myLearning/transition.png")}
                          style={styles1.imageprop}
                        ></Image>
                      </View>
                    </Link>
                    <Link to="/mlRelatedService">
                      <View style={styles1.imageview}>
                        <Image
                          source={require("../../assets/res/myLearning/relatedServie.png")}
                          style={styles1.imageprop}
                        ></Image>
                      </View>
                    </Link>

                    <Link to="/mlContact">
                      <View style={styles1.imageview1}>
                        <Image
                          source={require("../../assets/res/myLearning/contact.png")}
                          style={styles1.imageprop}
                        ></Image>
                      </View>
                    </Link>
                  </ScrollView>
                </View>
              </CardView>

              <CardView cardElevation={4} cardMaxElevation={4} cornerRadius={5}>
                <Text style={styles.titleText2}>We Support</Text>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Link to="/MathHelp">
                    <View style={styles1.imageview}>
                      <Text style={styles.paraText1}>
                        Math, Accounting and Statistics help
                      </Text>
                    </View>
                  </Link>
                </Unorderedlist>

                <View style={styles1.lineStyle}></View>
                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Link to="/WritingHelp">
                    <View style={styles1.imageview}>
                      <Text style={styles.paraText1}>Writing and Citing</Text>
                    </View>
                  </Link>
                </Unorderedlist>
                <View style={styles1.lineStyle}></View>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Link to="/Research">
                    <View style={styles1.imageview}>
                      <Text style={styles.paraText1}>Research</Text>
                    </View>
                  </Link>
                </Unorderedlist>
                <View style={styles1.lineStyle}></View>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Link to="/AcademicIntegrity">
                    <View style={styles1.imageview}>
                      <Text style={styles.paraText1}>Academic Integrity</Text>
                    </View>
                  </Link>
                </Unorderedlist>
                <View style={styles1.lineStyle}></View>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Link to="/LearnSkill">
                    <View style={styles1.imageview}>
                      <Text style={styles.paraText1}>
                          Learning Skills and Tutoring
                      </Text>
                    </View>
                  </Link>
                </Unorderedlist>
                <View style={styles1.lineStyle}></View>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Link to="/AccessibleLearning">
                    <View style={styles1.imageview}>
                      <Text style={styles.paraText1}>
                      Accessible Learning and Accommodation
                      </Text>
                    </View>
                  </Link>
                  </Unorderedlist>
                  <View style={styles1.lineStyle}></View>

                  <Unorderedlist
                    bulletUnicode={0x2022}
                    style={{ fontSize: 22, marginLeft: 20 }}
                  >
                    <Link to="/LearningAndAssitive">
                      <View style={styles1.imageview}>
                        <Text style={styles.paraText1}>
                          Learning and Assistive Technology
                        </Text>
                      </View>
                    </Link>
                  </Unorderedlist>
                  <View style={styles1.lineStyle}></View>

                  <Unorderedlist
                    bulletUnicode={0x2022}
                    style={{ fontSize: 22, marginLeft: 20 }}
                  >
                    <Link to="/TechSupport">
                      <View style={styles1.imageview}>
                        <Text style={styles.paraText1}>
                          Tech Support
                        </Text>
                      </View>
                    </Link>
                  </Unorderedlist>
                
              </CardView>
              <View style={{ marginBottom: 125 }}></View>
            </View>
          </View>
        </ScrollView>

        <Animated.View
          style={[
            styles1.Header,
            {
              height: AnimateHeaderHeight,
              backgroundColor: AnimatedHeaderBackgroundColor,
            },
          ]}
        >
          <Image
            source={require("../../assets/res/myLearning.png")}
            style={[
              styles1.HeaderInsideText,
              { height: AnimateHeaderHeight === 10 ? 10 : 180 },
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
    paddingTop: Platform.OS == "ios" ? 20 : 0,
  },

  Header: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: Platform.OS == "ios" ? 20 : 0,
  },

  paraText1: {
    fontSize: 20,
    paddingTop: 5,
    textAlign: "center",
  },

  paraText2: {
    fontSize: 20,
    paddingTop: 5,
    textAlign: "center",
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
  imageprop1: {
    backgroundColor: "#ffffff",
    height: Header_Min_Height,
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
