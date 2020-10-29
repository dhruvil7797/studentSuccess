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
import FlipCard from "react-native-flip-card";
import Icon from "react-native-vector-icons/FontAwesome";

const mailUrl =
  "mailto:Accessibility Conestoga <accessibility@conestogac.on.ca>?subject=";
const Header_Max_Height = 130;
const Header_Min_Height = 20;
class AcademicTesting extends Component {
  render() {
    return (
      <View style={[styles1.container, { paddingBottom: 60}]}>
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
              <Image
                  style={styles1.image}
                  source={require("../../assets/res/myLearning/accessibleLearning.png")}
                ></Image>
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
              style={[styles1.flipcard]}
              flipVertical={false}
              flipHorizontal={true}
              friction={20}
              cardElevation={5}
              cardMaxElevation={5}
            >
              
                <View style={[styles1.cardStyle]}>
                <Image
                  style={styles1.image}
                  source={require("../../assets/res/myLearning/submitYourDocument.png")}  
                ></Image>
                  <Text style={[styles1.titleText1]}>
                    Submit your Documentation
                  </Text>
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
                    Accessibility @ Conestoga.{"\n"}
                    {"\n"}
                  </Text>
                  <Icon name="envelope" size={22} color="#000000" />
                  <Text
                    style={{ color: "blue" }}
                    onPress={() => {
                      Linking.openURL(mailUrl);
                    }}
                  >
                    {" "}
                    accessibility@conestogac.on.ca {"\n"}
                    {"\n"}{" "}
                  </Text>
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
                  <Text> Fax: 519-748-3507{"\n"}</Text>
                  <Icon name="phone" size={22} color="#000000" />
                  <Text> TTY: </Text>
                  <Text
                    style={{ fontWeight: "bold", color: "blue" }}
                    onPress={() => {
                      Linking.openURL("tel:1-866-463-4484");
                    }}
                  >
                    {" "}
                    1-866-463-4484
                  </Text>
                  <Text
                    style={{ fontWeight: "bold", color: "blue" }}
                    onPress={() => {
                      Linking.openURL("https://studentsuccess.conestogac.on.ca/myLearning/AcademicAndTestingAccommodations");
                    }}
                  >
                    {"\n"}{"\n"}
                    Click here
                  </Text>
                  <Text> to know more about documents</Text>
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
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginTop: 80,
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
    marginTop: "5%",
   
  },
  cardStyle: {

    marginTop: 0,
    paddingTop: 0,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  outer: {
    height: 420,
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
