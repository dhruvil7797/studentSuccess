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
import { Component } from "react";
import styles from "../../style";
import { BorderlessButton } from "react-native-gesture-handler";
import { Platform } from "react-native";


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
            <Text style={styles.titleText}>myLearning!</Text>
            <Text style={styles.paraText}>
              <Text style={styles.initial}>C</Text>
              <Text>
                onestoga College offers a variety of services that support your
                wellness. Students currently living in Ontario can access the
                college’s remote medical care and mental health supports to
                discuss any physical and mental health issues they are
                experiencing.
              </Text>
            </Text>

            <View style={styles.scrollviewset}>
              <Text style={styles.titleText1}>Our Services + Supports</Text>
              <View style={styles.viewset}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Link to="/myLearning/AcademicTesting">
                    <View style={styles.imageview}>
                      <Image
                        source={require("../../assets/res/myLearning/icon-testing-grey.png")}
                        style={styles.imageprop}
                      ></Image>
                    </View>
                  </Link>
                  <Link to="/ServiceAndSupport">
                    <View style={styles.imageview}>
                      <Image
                        source={require("../../assets/res/myLearning/serviceAndSupport.png")}
                        style={styles.imageprop}
                      ></Image>
                    </View>
                  </Link>
                  <Link to="/Tutoring">
                    <View style={styles.imageview}>
                      <Image
                        source={require("../../assets/res/myLearning/tuitoring.png")}
                        style={styles.imageprop}
                      ></Image>
                    </View>
                  </Link>
                  <Link to="/Transition">
                    <View style={styles.imageview}>
                      <Image
                        source={require("../../assets/res/myLearning/transition.png")}
                        style={styles.imageprop}
                      ></Image>
                    </View>
                  </Link>
                  <Link to="/RelatedService">
                    <View style={styles.imageview}>
                      <Image
                        source={require("../../assets/res/myLearning/relatedServie.png")}
                        style={styles.imageprop}
                      ></Image>
                    </View>
                  </Link>

                  <Link to="/Contact">
                    <View style={styles.imageview1}>
                      <Image
                        source={require("../../assets/res/myLearning/contact.png")}
                        style={styles.imageprop}
                      ></Image>
                    </View>
                  </Link>
                </ScrollView>
              </View>

              <Text style={styles.titleText2}>We Support</Text>

              <Text style={styles1.paraText1}
                onPress={() => Linking.openURL("http://google.com")}
              >
                Math, Accounting and Statistics help</Text>
              <Text style={styles1.paraText1}
                onPress={() => Linking.openURL("http://google.com")}
              >
                Writing and Citing</Text>
                <Text style={styles1.paraText1}
                onPress={() => Linking.openURL("http://google.com")}
              >
                Research</Text>
                <Text style={styles1.paraText1}
                onPress={() => Linking.openURL("http://google.com")}
              >
                Academic Integrity</Text>
                <Text style={styles1.paraText1}
                onPress={() => Linking.openURL("http://google.com")}
              >
                Learning Skill and Tutoring</Text>
                <Text style={styles1.paraText1}
                onPress={() => Linking.openURL("http://google.com")}
              >
                Accessible Learning and Accomodation </Text>
                <Text style={styles1.paraText1}
                onPress={() => Linking.openURL("http://google.com")}
              >
                Learning and Assitive Technology</Text>
              
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

  paraText1:{
    fontSize:20,
    paddingTop:5,
    textAlign:'center',
    
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
});
