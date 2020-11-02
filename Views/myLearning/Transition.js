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
import CardView from "react-native-cardview";
import Unorderedlist from "react-native-unordered-list";

const mailUrl =
  "mailto:Accessibility Conestoga <accessibility@conestogac.on.ca>?subject=";
const Header_Max_Height = 130;
const Header_Min_Height = 20;
class Transition extends Component {
  render() {
    return (
      <View style={[styles1.container, { paddingBottom: 60 }]}>
        <Text style={[style2.titleText, { paddingBottom: 20 }]}>
          C Success Summer Transition Program
        </Text>
        <View style={{ width: "100%", marginBottom: 20 }}></View>
        <ScrollView scrollEventThrottle={10}>
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
              <Text style={[styles.titleText, { marginHorizontal: 20 }]}>
                Virtual Transition Programming
              </Text>
              <Text style={styles1.paragraph}>
                <Text>
                  If you have been accepted to Conestoga College and require
                  support from Accessible Learning, we invite you to participate
                  in the C Success Summer Transition Program. C Success is
                  designed for up to 40 students who face barriers to
                  participating in college life. It is an opportunity to learn
                  more about what to expect at college and to become familiar
                  with a new learning environment.
                </Text>
              </Text>
              <Text style={[styles.titleText, { marginHorizontal: 20 }]}>
                Registration
              </Text>
              <Text style={styles1.paragraph}>
                <Text>
                  Use the{" "}
                  <Text
                    style={{ color: "blue" }}
                    onPress={() => {
                      Linking.openURL(
                        "https://forms.microsoft.com/Pages/ResponsePage.aspx?id=OjndTYrpBESEH8S-zdklpXR4H9FxnrpOkq8DfhADF6FUNUQ1WjlEOUZQWTg0NE9BNjVCNUY1UFVBNCQlQCN0PWcu"
                      );
                    }}
                  >
                    registration form{" "}
                  </Text>{" "}
                  to sign-up for access to the 2020 virtual transition program,
                  including an online course where you can connect with other
                  participants and staff.
                </Text>
              </Text>
            </CardView>
          </View>
          <Text style={{ textAlign: "center", color: "grey", marginTop: 30 }}>
            Click on card to view description
          </Text>

          <View style={[styles1.outer, { marginTop: 20 }]}>
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
                  source={require("../../assets/res/myLearning/cSuccess.png")}
                ></Image>
                <Text style={[styles1.titleText1]}>
                  C Success opportunities
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
                <Text style={styles1.paragraph}>
                  <Text>
                    During C Success you will have the opportunity to learn
                    about supports and services, meet fellow students and have
                    fun participating in interactive workshops.
                  </Text>
                </Text>
              </View>
            </FlipCard>
          </View>

          <View style={[styles1.outer, { marginTop: 20 }]}>
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
                  source={require("../../assets/res/myLearning/makeConnection.png")}
                ></Image>
                <Text style={[styles1.titleText1]}>
                Make connections – interact with services
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
                

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20, marginBottom: 30 }}
                >
                  <Text
                    style={{
                      smargin: 24,
                      fontSize: 18,
                      color: "#34495e",
                    }}
                  >
                    Learn how to advocate for what you need
                  </Text>
                </Unorderedlist>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20, marginBottom: 20 }}
                >
                  <Text
                    style={{
                      smargin: 24,
                      fontSize: 18,
                      color: "#34495e",
                    }}
                  >
                    Using and integrating research
                  </Text>
                </Unorderedlist>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20, marginBottom: 20 }}
                >
                  <Text
                    style={{
                      smargin: 24,
                      fontSize: 18,
                      color: "#34495e",
                    }}
                  >
                    Try our adaptive technology
                  </Text>
                </Unorderedlist>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20, marginBottom: 30 }}
                >
                  <Text
                    style={{
                      smargin: 24,
                      fontSize: 18,
                      color: "#34495e",
                    }}
                  >
                    Meet new people and get connected to services
                  </Text>
                </Unorderedlist>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20, marginBottom: 30 }}
                >
                  <Text
                    style={{
                      smargin: 24,
                      fontSize: 18,
                      color: "#34495e",
                    }}
                  >
                    Learn about Conestoga’s resources and how to access support
                  </Text>
                </Unorderedlist>

                
              </View>
            </FlipCard>
          </View>

          <View style={[styles1.outer, { marginTop: 20 }]}>
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
                  source={require("../../assets/res/myLearning/buildCapacity.png")}
                ></Image>
                <Text style={[styles1.titleText1]}>
                Build capacity
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
                <Text style={[styles1.titleText1]}>
                Add to your C Success tool box {"\n"}
                </Text>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20}}
                >
                  <Text
                    style={{
                      smargin: 24,
                      fontSize: 18,
                      color: "#34495e",
                    }}
                  >
                    Get set up for academic success with strategies for studying, time management and organization{"\n"}
                  </Text>
                </Unorderedlist>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20}}
                >
                  <Text
                    style={{
                      smargin: 24,
                      fontSize: 18,
                      color: "#34495e",
                    }}
                  >
                    Hear tips for success from current students{"\n"}
                  </Text>
                </Unorderedlist>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20}}
                >
                  <Text
                    style={{
                      smargin: 24,
                      fontSize: 18,
                      color: "#34495e",
                    }}
                  >
                    Learn strategies for reducing stress and taking care of yourself{"\n"}
                  </Text>
                </Unorderedlist>

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
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: "justify",
    justifyContent: "center",
    color: "#34495e",
  },
});

export default Transition;
