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

const mailSubject = "Mobile Solution Development!!!";
const Header_Max_Height = 130;
const Header_Min_Height = 20;
class jobSearch extends Component {
  render() {
    return (
    //It contains the main view of the page
      <View style={style2.container}>
        <Text style={[style2.titleText, { paddingBottom: 20 }]}>Job Search</Text>
        <View style={{ width: "100%", marginBottom: 20 }}>
          <Text style={{ textAlign: "center", color: "grey" }}>
            Click on card to view description
          </Text>
        </View>
        <ScrollView scrollEventThrottle={10}>
          {/*It contains the flipcard view and the jobSearch card */}
          <View style={styles1.outer}>
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
                  <Image
                    style={styles1.image}
                    source={require("../../assets/res/jobSearch.png")}
                  ></Image>
                  <Text style={[styles1.titleText1]}>Job Search Tool</Text>
                  
                </View>
                 {/*It contains the information of the jobSearch card */}
              </View>
              <View style={styles1.cardText}>
              <Text style={styles1.paraText1}>
               
                  <Text>
                  View and apply to a selection of jobs on</Text> <Text
                    style={{  color: "blue" }}
                    onPress={() => {
                      Linking.openURL("https://mycareer.conestogac.on.ca/notLoggedIn.htm");
                    }}
                  >MyCareer</Text>,<Text> Conestoga's employment portal. To access the portal, you must be logged in to myConestoga. {"\n"}
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
//stylesheet of jobsearch class
const styles1 = StyleSheet.create({
  paraText: {
    marginLeft: 18,
    marginBottom: 3,
    fontSize: 16,
    width: "90%",
    paddingHorizontal: 10,
    marginVertical: 1,
    textAlign: "justify",
    alignItems: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#eff0f1",
  },
  paraText1: {
    marginLeft: 18,
    marginBottom: 3,
    fontSize: 18,
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
  outer1: {
    height: 550,
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

export default jobSearch;
