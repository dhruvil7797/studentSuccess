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
class CareerEvents extends Component {
  render() {
    return (
      //It contains the main view of the page
      <View style={style2.container}>
        <Text style={[style2.titleText, { paddingBottom: 20 }]}>Career Events</Text>
        <View style={{ width: "100%", marginBottom: 20 }}>
          <Text style={{ textAlign: "center", color: "grey" }}>
            Click on card to view description
          </Text>
        </View>
        <ScrollView scrollEventThrottle={10}>
           {/*It contains the flipCard view of careerEvent card */}
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
                    source={require("../../assets/res/careerEvent.png")}
                  ></Image>
                  <Text style={[styles1.titleText1]}>Career Events</Text>
                  
                </View>
              </View>
              {/*It contains backside of flipCard which shows information on how they can implement career Event */}
              <View style={styles1.cardText}>
              <Text style={styles1.paraText1}>
               
                  <Text>
                  Visit the</Text> <Text
                    style={{  color: "blue" }}
                    onPress={() => {
                      Linking.openURL("https://mycareer.conestogac.on.ca/notLoggedIn.htm");
                    }}
                  >events calendar</Text>,<Text>  to find out which employers are recruiting on campus and learn more about Conestoga's job and career fairs. Please note you must be logged in with your myConestoga account to view the events calendar.  {"\n"}
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
//stylesheet of careerEvent class 
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
    height: 400,
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

export default CareerEvents;
