import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  ScrollView,
} from "react-native";
import styles from "../../style";
import style2 from "../../CSS/MyWellnessStyle";
import CardView from "react-native-cardview";
import FlipCard from "react-native-flip-card";
import Icon from "react-native-vector-icons/FontAwesome";
import { Card } from "react-native-elements";
import Unorderedlist from "react-native-unordered-list";


const mailSubject = "Mobile Solution Development!!!";
const Header_Max_Height = 130;
const Header_Min_Height = 20;
class AcademicTesting extends Component {
  render() {
    return (
      <View style={style2.container}>
        <Text style={[style2.titleText, { paddingBottom: 20 }]}>
          Accessible Learning
        </Text>
        <View style={{ width: "100%", marginBottom: 20 }}>
          <Text style={{ textAlign: "center", color: "grey" }}>
            Click on card to view description
          </Text>
        </View>
        <ScrollView scrollEventThrottle={10}>
          <View style={styles1.outer}>
            <FlipCard
              style={styles1.flipcard}
              flipVertical={false}
              flipHorizontal={true}
              friction={20}
              cardElevation={5}
              cardMaxElevation={5}
            >
              <View style={[styles1.cardStyle]}>
                <Text style={[styles1.titleText1]}>Accessible Learning</Text>
              </View>

              <View
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles1.paraText}>
                  <Text style={style2.initial}>C</Text>
                  <Text>
                    onestoga College provides support for students with
                    permanent and temporary disabilities. We work with you to
                    understand the impact of your disability in the college
                    environment and develop a success plan that considers your
                    goals and the academic and testing accommodations available
                    to support your full participation in Conestoga life.
                  </Text>
                </Text>
              </View>
            </FlipCard>
          </View>

          <View style={[styles1.outer, { display: "flex" }]}>
            <FlipCard
              style={[styles1.flipcard, { paddingBottom: 20 }]}
              flipVertical={false}
              flipHorizontal={true}
              friction={20}
              cardElevation={5}
              cardMaxElevation={5}
            >
              <View style={[styles1.cardStyle]}>
                <View style={[styles1.cardStyle]}>
                  <Text style={[styles1.titleText1]}>
                    Submit your Documentation
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles1.paraText}>
                  <Text>
                    If you have a documented permanent or temporary disability
                    or are experiencing difficulties that affect your learning
                    you can register for academic accommodations. Documentation
                    can be emailed, faxed or submitted in person to
                    Accessibility @ Conestoga.{"\n"}{"\n"}
                  </Text>
                  <Icon name="envelope" size={22} color="#000000" />
                  <Text style={{color:"blue"}}> accessibility@conestogac.on.ca {"\n"} </Text>
                  <Icon name="phone" size={22} color="#000000" />
                  
                  <Text
                    style={{ fontWeight: "bold", color: "blue" }}
                    onPress={() => {
                      Linking.openURL("tel:519-748-5220;3232");
                    }}
                  >
                    {" "}
                    519-748-5220 
                  </Text>{" "}
                  <Text> ext. 3232{"\n"}</Text>
                  <Icon name="fax" size={22} color="#000000" />
                  <Text>Fax: 519-748-3507{'\n'}</Text>
                  <Icon name="phone" size={22} color="#000000" />
                  <Text>{'\n'}TTY: </Text>
                  <Text
                    style={{ fontWeight: "bold", color: "blue" }}
                    onPress={() => {
                      Linking.openURL("tel:1-866-463-4484");
                    }}
                  >
                    {" "}
                    1-866-463-4484 
                  </Text>
                </Text>
              </View>
            </FlipCard>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles1 = StyleSheet.create({
  paraText: {
    display: "flex",
    fontSize: 17,
    width: "90%",
    paddingHorizontal: 10,
    marginVertical: 1,
    textAlign: "justify",
    alignItems: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#eff0f1",
  },
  flipcard: {
    height: "100%",
  },
  titleText: {
    fontSize: 22,
    textAlign: "center",
    justifyContent: "center",
  },
  titleText1: {
    display: "flex",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "justify",
    textAlign: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  cardText: {
    display: "flex",
    height: "100%",
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cardStyle: {
    marginTop: 0,
    paddingTop: 0,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  outer: {
    height: 350,
    width: "90%",
    backgroundColor: "#eff0f1",
    borderColor: "#eff0f1",
    borderWidth: 3,
    borderRadius: 20,
    marginLeft: "5%",
    marginRight: "5%",
    overflow: "hidden",
    //   shadowColor: '#ffffff',
    shadowRadius: 2,
    shadowOpacity: 0.2,
    marginBottom: 15,
    // marginTop: 15,
  },
  image: {
    width: "100%",
    height: "70%",
    resizeMode: "stretch",
  },
});

export default AcademicTesting;
