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
class Contact extends Component {
  render() {
    return (
      <View style={style2.container}>
        <Text style={[style2.titleText, { paddingBottom: 20 }]}>Contact</Text>
        <View style={{ width: "100%", marginBottom: 20 }}>
          <Text style={{ textAlign: "center", color: "grey" }}>
            Click on card to view description
          </Text>
        </View>
        <ScrollView scrollEventThrottle={10}>
           {/*It contains the flipCard view of Doon Campus card */}
          <View style={styles1.outer1}>
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
                  source={require("../../assets/res/Campuses/doonCampus.png")}
                ></Image>

                <Text style={[styles1.titleText1]}>Doon (Kitchener)</Text>
                <Text style={[styles1.titleText, { textAlign: "center" }]}>
                  Campus
                </Text>
              </View>
              {/*It contains backside of flipCard which shows information on how they can reach to doon campus advisor */}
              <View style={styles1.cardText}>
              <Text style={styles1.paraText}>
                <Text style={{ fontWeight: "bold" }}>
                Monday-Friday {"\n"}
                  </Text>
                  <Text>
                  8:30 am - 4 pm {"\n"}
                  </Text>
                  </Text>
                <Text style={styles1.paraText}>
                  <Text style={{ fontWeight: "bold" }}>
                  Medical Care Clinic {"\n"}
                  </Text>
                  <Text>
                  Main Building, Student Life Centre{"\n"}
                  </Text>
                  <Text>Room 1A102 {"\n"}</Text>
                  <Text>299 Doon Valley Drive{"\n"}</Text>
                  <Icon name="phone" size={22} color="#000000" />
                  <Text
                    style={{ fontWeight: "bold", color: "blue" }}
                    onPress={() => {
                      Linking.openURL("tel:519-748-5220;3679");
                    }}
                  >
                    {" "}
                    519-748-5220
                  </Text>{" "}
                  <Text> ext. 3679{"\n"}</Text>
                  <Icon name="fax" size={22} color="#000000" />
                  <Text style={{ fontWeight: "bold" }}>
                    {" "}
                    Fax: 519-748-3509{"\n"}
                  </Text>
                </Text>
                <Text style={styles1.paraText}>
                <Text style={{ fontWeight: "bold" }}>
                Counselling & Peer Support {"\n"}
                  </Text>
                  <Text>
                  Main Building, Student Life Centre{"\n"}
                  </Text>
                  <Text>Room 1A101 {"\n"}</Text>
                  <Text>299 Doon Valley Drive{"\n"}</Text>
                  <Icon name="phone" size={22} color="#000000" />
                  <Text
                    style={{ fontWeight: "bold", color: "blue" }}
                    onPress={() => {
                      Linking.openURL("tel:519-748-5220;3679");
                    }}
                  >
                    {" "}
                    519-748-5220
                  </Text>
                  <Text> ext. 3679{"\n"}</Text>
                  </Text>
                  <Text style={styles1.paraText}>
                <Text style={{ fontWeight: "bold" }}>
                Student Wellness Space  {"\n"}
                  </Text>
                  <Text>
                  Main Building, Student Life Centre{"\n"}
                  </Text>
                  <Text>Room 1A107 {"\n"}</Text>
                  <Text>299 Doon Valley Drive{"\n"}</Text>
                  </Text>
              </View>
            </FlipCard>
          </View>
          {/*It contains the flipCard view of Cambridge Campus card */}
          <View style={styles1.outer1}>
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
                    source={require("../../assets/res/Campuses/cambridgeCampus.png")}
                  ></Image>
                  <Text style={[styles1.titleText1]}>Cambridge</Text>
                  <Text style={[styles1.titleText, { textAlign: "center" }]}>
                    Campus
                  </Text>
                </View>
              </View>
              {/*It contains backside of flipCard which shows information on how they can reach to cambridge campus advisor */}
              <View style={styles1.cardText}>
              <Text style={styles1.paraText1}>
                <Text style={{ fontWeight: "bold" }}>
                Monday-Friday {"\n"}
                  </Text>
                  <Text>
                  8:30 am - 4 pm {"\n"}
                  </Text>
                  </Text>
                <Text style={styles1.paraText1}>
                  <Text style={{ fontWeight: "bold" }}>
                  Counselling & Peer Support{"\n"}
                  </Text>
                  
                  <Text>Room A1213 {"\n"}</Text>
                  <Text>850 Fountain Street South{"\n"}</Text>
                  <Icon name="phone" size={22} color="#000000" />
                  <Text
                    style={{ fontWeight: "bold", color: "blue" }}
                    onPress={() => {
                      Linking.openURL("tel:519-748-5220;3679");
                    }}
                  >
                    {" "}
                    519-748-5220
                  </Text>{" "}
                  <Text> ext. 3679{"\n"}</Text>
                  </Text>
              </View>
            </FlipCard>
          </View>
          {/*It contains the flipCard view of Guelph Campus card */}
          <View style={styles1.outer1}>
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
                    source={require("../../assets/res/Campuses/guelphCampus.png")}
                  ></Image>
                  <Text style={[styles1.titleText1]}>Guelph</Text>
                  <Text style={[styles1.titleText, { textAlign: "center" }]}>
                    Campus
                  </Text>
                </View>
              </View>
              {/*It contains backside of flipCard which shows information on how they can reach to Guelph campus advisor */}
              <View style={styles1.cardText}>
              <Text style={styles1.paraText1}>
                <Text style={{ fontWeight: "bold" }}>
                Monday-Friday {"\n"}
                  </Text>
                  <Text>
                  8:30 am - 4 pm {"\n"}
                  </Text>
                  </Text>
                <Text style={styles1.paraText1}>
                  <Text style={{ fontWeight: "bold" }}>
                  Counselling & Peer Support{"\n"}
                  </Text>
                  <Text>Room A3 {"\n"}</Text>
                  <Text>460 Speedvale Ave. West{"\n"}</Text>
                  <Icon name="phone" size={22} color="#000000" />
                  <Text
                    style={{ fontWeight: "bold", color: "blue" }}
                    onPress={() => {
                      Linking.openURL("tel:519-748-5220;3679");
                    }}
                  >
                    {" "}
                    519-748-5220
                  </Text>{" "}
                  <Text> ext. 3679{"\n"}</Text>
                  </Text>
              </View>
            </FlipCard>
          </View>
          {/*It contains the flipCard view of Waterloo Campus card */}
          <View style={styles1.outer1}>
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
                    source={require("../../assets/res/Campuses/waterlooCampus.png")}
                  ></Image>
                  <Text style={[styles1.titleText1]}>Waterloo</Text>
                  <Text style={[styles1.titleText, { textAlign: "center" }]}>
                    Campus
                  </Text>
                </View>
              </View>
              {/*It contains backside of flipCard which shows information on how they can reach to Waterloo campus advisor */}
              <View style={styles1.cardText}>
              <Text style={styles1.paraText1}>
                <Text style={{ fontWeight: "bold" }}>
                Monday-Friday {"\n"}
                  </Text>
                  <Text>
                  8:30 am - 4 pm {"\n"}
                  </Text>
                  </Text>
                <Text style={styles1.paraText1}>
                  <Text style={{ fontWeight: "bold" }}>
                  Counselling & Peer Support{"\n"}
                  </Text>
                  
                  <Text>Welcome Centre Desk{"\n"}</Text>
                  <Text>108 University Ave. East{"\n"}</Text>
                  <Icon name="phone" size={22} color="#000000" />
                  <Text
                    style={{ fontWeight: "bold", color: "blue" }}
                    onPress={() => {
                      Linking.openURL("tel:519-748-5220;3679");
                    }}
                  >
                    {" "}
                    519-748-5220
                  </Text>{" "}
                  <Text> ext. 3679{"\n"}</Text>
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
    height: 320,
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
    height: 450,
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

export default Contact;
