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
class ServiceAndSupport extends Component {
  render() {
    return (
      //main content
      <View style={[styles1.container, { paddingBottom: 60 }]}>
        <Text style={[style2.titleText, { paddingBottom: 20 }]}>
          Service And Support
        </Text>
        <View style={{ width: "100%", marginBottom: 20 }}>
          <Text style={{ textAlign: "center", color: "grey" }}>
            Click on card to view description
          </Text>
        </View>
        <ScrollView scrollEventThrottle={10}>
          {/*It contains the flipCard view of Assistive Technology and Alternate Format */}
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
                  source={require("../../assets/res/myLearning/assistiveTechnology.png")}
                ></Image>
                <Text style={[styles1.titleText1]}>
                  Assistive Technology and Alternate Format
                </Text>
              </View>
            {/*It contains backside of flipCard which shows information on how Assistive Technology and Alternate Formats are available */}
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
                <Text style={[styles1.titleText1]}>
                  Assistive Technology {'\n'}{'\n'}
                </Text>
                  <Text>
                    Check out the <Text style={{color: "blue"}} onPress={() => {
                      Linking.openURL("https://lib.conestogac.on.ca/assistive-technology/overview");
                    }}>assistive technology</Text> available to support your
                    learning
                  </Text>
                  <Text style={[styles1.titleText1]}>
                  {'\n'}{'\n'}Alternate Format {'\n'}{'\n'}
                </Text>
                  <Text>
                  Get materials or textbooks in <Text style={{color: "blue"}} onPress={() => {
                      Linking.openURL("https://lib.conestogac.on.ca/assistive-technology/overview");
                    }}>alternate formats</Text> by filling out the <Text style={{ color: "blue"}}onPress={() => {
                      Linking.openURL("https://lib.conestogac.on.ca/assistive-technology/alt-format-textbooks");
                    }}>Alternate Format Request Form.</Text>
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

export default ServiceAndSupport;
