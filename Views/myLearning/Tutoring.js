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
class Tutoring extends Component {
  render() {
    return (
      //Main content View 
      <View style={[styles1.container, { paddingBottom: 60 }]}>
        <Text style={[style2.titleText, { paddingBottom: 20 }]}>Tutoring</Text>
        <View style={{ width: "100%", marginBottom: 20 }}></View>
        <ScrollView scrollEventThrottle={10}>
           {/*It contains the  CardView of how Student Success Advisors can help students */}
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
                Student Success Advisors are here to help you!
              </Text>
              <Text style={styles1.paragraph}>
                <Text>
                  Student Success Advisors can help you figure out how to get
                  things done at Conestoga. They can connect you to college
                  services and provide guidance on how to navigate college life.
                  {"\n"}
                  {"\n"}A Student Success Advisor can:
                </Text>
              </Text>
              <Unorderedlist
                bulletUnicode={0x2022}
                style={{ fontSize: 22, marginLeft: 20 }}
              >
                <Text
                  style={{
                    smargin: 24,
                    fontSize: 18,
                    color: "#34495e",
                    marginBottom: 10,
                  }}
                >
                  Refer you to counsellors and academic supports
                </Text>
              </Unorderedlist>
              <Unorderedlist
                bulletUnicode={0x2022}
                style={{ fontSize: 22, marginLeft: 20 }}
              >
                <Text
                  style={{
                    smargin: 24,
                    fontSize: 18,
                    color: "#34495e",
                    marginBottom: 10,
                  }}
                >
                  Help you understand college policies and processes
                </Text>
              </Unorderedlist>

              <Unorderedlist
                bulletUnicode={0x2022}
                style={{ fontSize: 22, marginLeft: 20 }}
              >
                <Text
                  style={{
                    smargin: 24,
                    fontSize: 18,
                    color: "#34495e",
                  }}
                >
                  And much more!
                </Text>
              </Unorderedlist>
              <Text style={styles1.paragraph}>
                <Text>
                  Student Success Advisors are available to students at all
                  Conestoga campuses. To connect with them fill
                  <Text
                    style={{ color: "blue" }}
                    onPress={() => {
                      Linking.openURL(
                        "https://studentsuccess.conestogac.on.ca/StudentReferral"
                      );
                    }}
                  >
                    {" "}
                    our online referral form{" "}
                  </Text>
                  and an advisor will contact you. If you are an apprentice
                  experiencing course content learning barriers please contact
                  the{" "}
                  <Text style={{ color: "blue" }}>
                    {" "}
                    apprenticeship liaison team (ALT).
                  </Text>{" "}
                  An ALT member is available to all trades students for
                  one-on-one learning support or referrals to other services.
                </Text>
              </Text>
            </CardView>
             {/*It contains the  CardView of Tutoring and Academic Support */}
            <CardView
              cardElevation={4}
              cardMaxElevation={4}
              style={{
                marginLeft: 20,
                marginRight: 20,
                marginTop: 15,
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
                Tutoring and Academic Support
              </Text>
              <Text style={styles1.paragraph}>
                <Text>
                  <Text
                    style={{ color: "blue" }}
                    onPress={() => {
                      Linking.openURL(
                        "https://studentsuccess.conestogac.on.ca/DropIn"
                      );
                    }}
                  >
                    Drop-in
                  </Text>{" "}
                  or{" "}
                  <Text
                    style={{ color: "blue" }}
                    onPress={() => {
                      Linking.openURL(
                        "https://studentsuccess.conestogac.on.ca/BookAnAppointment"
                      );
                    }}
                  >
                    make an appointment
                  </Text>{" "}
                  to meet with our team of tutors and math consultants and build
                  your confidence in course materials. Or meet with a Student
                  Success Advisor if you think you need some extra help getting
                  organized, improving your study skills, or figuring out where
                  to start.{"\n"}
                  {"\n"}Free{" "}
                  <Text
                    style={{ color: "blue" }}
                    onPress={() => {
                      Linking.openURL(
                        "https://studentsuccess.conestogac.on.ca/BookAnAppointment"
                      );
                    }}
                  >
                    peer tutoring
                  </Text>{" "}
                  is available in over 300 Conestoga courses.
                </Text>
              </Text>
            </CardView>
          </View>
          <Text style={{ textAlign: "center", color: "grey", marginTop: 30 }}>
            Click on card to view description
          </Text>
           {/*It contains the flipCard view of Math,Accounting and Statistics Help */}
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
                  source={require("../../assets/res/myLearning/math.png")}
                ></Image>
                <Text style={[styles1.titleText1]}>
                  Math, Accounting and Statistics Help
                </Text>
              </View>
               {/*It contains backside of flipCard which shows information on how math,accounting and statistics help available*/}
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
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Text
                    style={{
                      smargin: 24,
                      fontSize: 18,
                      color: "#34495e",
                      marginBottom: 10,
                    }}
                  >
                    Drop-in or{" "}
                    <Text
                      style={{ color: "blue" }}
                      onPress={() => {
                        Linking.openURL(
                          "https://studentsuccess.conestogac.on.ca/BookAnAppointment"
                        );
                      }}
                    >
                      book an appointment
                    </Text>
                    for first-year business MATH and ACCT courses with a peer
                    tutor
                  </Text>
                </Unorderedlist>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Text
                    style={{
                      smargin: 24,
                      fontSize: 18,
                      color: "#34495e",
                      marginBottom: 10,
                    }}
                  >
                    <Text
                      style={{ color: "blue" }}
                      onPress={() => {
                        Linking.openURL(
                          "https://outlook.office365.com/owa/calendar/ConestogaCollegeMathHelpDoon@stu.conestogac.on.ca/bookings/"
                        );
                      }}
                    >
                      Book a virtual appointment
                    </Text>{" "}
                    for help in all other MATH and STAT courses
                  </Text>
                </Unorderedlist>
              </View>
            </FlipCard>
          </View>
           {/*It contains the flipCard view of Writing and Academic Integrity Support */}
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
                  source={require("../../assets/res/myLearning/academicIntegrity.png")}
                ></Image>
                <Text style={[styles1.titleText1]}>
                  Writing and Academic Integrity Support
                </Text>
              </View>
               {/*It contains backside of flipCard which shows information on how Writing and Academic Integrity supports are available */}
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
                    onestoga's
                    <Text
                      style={{ color: "blue" }}
                      onPress={() => {
                        Linking.openURL("https://library.conestogac.on.ca/");
                      }}
                    >
                      {" "}
                      Library Services
                    </Text>{" "}
                    offers appointments for help in all stages of the writing
                    process and can help you understand proper citation to avoid
                    plagiarism issues. {"\n"}
                    {"\n"}Make an appointment with a{" "}
                    <Text
                      style={{ color: "blue" }}
                      onPress={() => {
                        Linking.openURL(
                          "https://lib.conestogac.on.ca/writing-services/about"
                        );
                      }}
                    >
                      writing consultant
                    </Text>{" "}
                    for help with:{"\n"}
                  </Text>
                </Text>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Text
                    style={{
                      smargin: 24,
                      fontSize: 18,
                      color: "#34495e",
                    }}
                  >
                    Planning, writing and revising
                  </Text>
                </Unorderedlist>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20 }}
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
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Text
                    style={{
                      smargin: 24,
                      fontSize: 18,
                      color: "#34495e",
                    }}
                  >
                    Clearly stating your position
                  </Text>
                </Unorderedlist>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Text
                    style={{
                      smargin: 24,
                      fontSize: 18,
                      color: "#34495e",
                    }}
                  >
                    Organizing ideas
                  </Text>
                </Unorderedlist>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Text
                    style={{
                      smargin: 24,
                      fontSize: 18,
                      color: "#34495e",
                    }}
                  >
                    Documenting sources
                  </Text>
                </Unorderedlist>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Text
                    style={{
                      smargin: 24,
                      fontSize: 18,
                      color: "#34495e",
                    }}
                  >
                    Grammar skills
                  </Text>
                </Unorderedlist>
              </View>
            </FlipCard>
          </View>
           {/*It contains the flipCard view of Learning Skills Improvement */}
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
                  source={require("../../assets/res/myLearning/learningSkills.png")}
                ></Image>
                <Text style={[styles1.titleText1]}>
                  Learning Skills Improvement
                </Text>
              </View>
               {/*It contains backside of flipCard which shows information on how students can improve their learning skills*/}
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
                    Student success can help you learn organization skills and
                    preparation strategies to help make your course load more
                    manageable. Here are some examples of what we can help you
                    with:{"\n"}
                  </Text>
                </Text>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Text
                    style={{
                      smargin: 24,
                      fontSize: 18,
                      color: "#34495e",
                    }}
                  >
                    Study strategies
                  </Text>
                </Unorderedlist>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Text
                    style={{
                      smargin: 24,
                      fontSize: 18,
                      color: "#34495e",
                    }}
                  >
                    Note-taking
                  </Text>
                </Unorderedlist>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Text
                    style={{
                      smargin: 24,
                      fontSize: 18,
                      color: "#34495e",
                    }}
                  >
                    Time management
                  </Text>
                </Unorderedlist>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Text
                    style={{
                      smargin: 24,
                      fontSize: 18,
                      color: "#34495e",
                    }}
                  >
                    Exam preparation
                  </Text>
                </Unorderedlist>
                <Text style={styles1.paraText}>
                <Text>
                  {"\n"}If you think you could benefit from some extra help, use our
                  <Text style={{ color: "blue" }}
                      onPress={() => {
                        Linking.openURL(
                          "https://successportal.conestogac.on.ca/Form.aspx?id=63"
                        );
                      }}> online self-referral form</Text> to request help and a Student
                  Success Advisor will contact you to discuss support options.{"\n"}
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: "justify",
    justifyContent: "center",
    color: "#34495e",
  },
});

export default Tutoring;
