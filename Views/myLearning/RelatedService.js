import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import styles from "../../style";
import style2 from "../../CSS/MyWellnessStyle";
import FlipCard from "react-native-flip-card";
import Icon from "react-native-vector-icons/FontAwesome";
import CardView from "react-native-cardview";
import Unorderedlist from "react-native-unordered-list";

const Header_Max_Height = 130;
const Header_Min_Height = 20;
class RelatedService extends Component {
  render() {
    return (
      //main content
      <View style={[styles1.container, { paddingBottom: 60 }]}>
        <Text style={[style2.titleText, { paddingBottom: 20 }]}>
          Learning resources and Services
        </Text>
        <View style={{ width: "100%", marginBottom: 20 }}></View>
        <ScrollView scrollEventThrottle={10}>
          <View style={styles.container}>
            {/*It contains the CardView of Free student planning tools */}
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
                Free student planning tools
              </Text>
              <Text style={styles1.paragraph}>
                <Text>
                  A student planner can help keep you organized. Try our free
                  printable and digital planners:
                </Text>
              </Text>
              {/*It shows pdf view of winter 2021 planner*/}
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://cms.conestogac.on.ca/sites/virtual-learning-commons/student-success/OpenAccess/DayPlannerFall2020-Winter2021.pdf"
                  );
                }}
                style={[styles1.appButtonContainer, { alignSelf: "center" }]}
              >
                <Text style={styles1.appButtonText}>
                  {" "}
                  Download Printable Fall 2020 - Winter 2021 Planner
                </Text>
              </TouchableOpacity>
                 {/*It shows pdf view of 4-month calendar*/}
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://cms.conestogac.on.ca/sites/virtual-learning-commons/student-success/OpenAccess/Fall%202020%20Fillable%204%20Month%20Calendar.pdf"
                  );
                }}
                style={[
                  styles1.appButtonContainer,
                  { alignSelf: "center", marginTop: 20 },
                ]}
              >
                <Text style={styles1.appButtonText}>
                  Download Fillable Fall 2020 4-Month Calendar
                </Text>
              </TouchableOpacity>
                 {/*It shows pdf view of daily calendar*/}
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://cms.conestogac.on.ca/sites/virtual-learning-commons/student-success/OpenAccess/Fall%202020%20Fillable%20Daily%20Planner.pdf"
                  );
                }}
                style={[
                  styles1.appButtonContainer,
                  { alignSelf: "center", marginTop: 20 },
                ]}
              >
                <Text style={styles1.appButtonText}>
                  Download Fillable Fall 2020 Daily Calendar
                </Text>
              </TouchableOpacity>

              <Text style={styles1.paragraph}>
                <Text>
                  Use the instructional plans for your courses to add all
                  important dates and deadlines to the term calendar at the
                  front of the planner and to the weekly schedule. Use this
                  information to schedule time in your week to complete the
                  required work for your courses. We recognize these particular
                  planning tools may not be right for everyone. If you need an
                  alternative format or would like to discuss other learning
                  tools email us at below address{"\n"}
                  {"\n"}
                  <Text
                    style={{ color: "blue" }}
                    onPress={() => {
                      Linking.openURL("mailto:myLearning@conestogac.on.ca");
                    }}
                  >
                    {" "}
                    myLearning@conestogac.on.ca{" "}
                  </Text>
                  {"\n"}
                  {"\n"}
                  {"\n"}Check out some of recommended{" "}
                  <Text
                    style={{ color: "blue" }}
                    onPress={() => {
                      Linking.openURL(
                        "https://cms.conestogac.on.ca/sites/virtual-learning-commons/student-success/OpenAccess/Using%20apps%20to%20support%20learning.pdf"
                      );
                    }}
                  >
                    apps and programs to support your learning.
                  </Text>
                </Text>
              </Text>
            </CardView>
          </View>
          <Text style={{ textAlign: "center", color: "grey", marginTop: 30 }}>
            Click on card to view description
          </Text>
           {/*It contains the flipCard view of tips for online learning success */}
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
                  source={require("../../assets/res/myLearning/tips.png")}
                ></Image>
                <Text style={[styles1.titleText1]}>
                  Tips for Online Learning Success
                </Text>
              </View>
               {/*It contains backside of flipCard which shows information on how they can success in Online Learning*/}
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
                    ​Online courses require you to be disciplined and
                    self-directed. Many students underestimate the amount of
                    time they will need to spend completing online work. You
                    should expect online courses to take the same amount of time
                    as traditional courses and sometimes even more. Online
                    courses create freedom, but also may lead to additional
                    pressures as it is easy to get off track and fall behind.
                    Here are some strategies to help support your transition to
                    becoming an online learner.
                  </Text>
                </Text>
              </View>
            </FlipCard>
          </View>
           {/*It contains the flipCard view of students can get organized */}
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
                  source={require("../../assets/res/myLearning/getOrganized.png")}
                ></Image>
                <Text style={[styles1.titleText1]}>Get organized</Text>
              </View>
               {/*It contains backside of flipCard which shows information on how they can get orgsnized with studies*/}
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
                      marginBottom: 10,
                    }}
                  >
                    Check{" "}
                    <Text
                      style={{ color: "blue" }}
                      onPress={() => {
                        Linking.openURL("https://conestoga.desire2learn.com/");
                      }}
                    >
                      eConestoga
                    </Text>
                  </Text>
                  <Unorderedlist
                    bulletUnicode={0x25e6}
                    style={{ fontSize: 24, marginLeft: 30, marginBottom: 20 }}
                  >
                    <Text>Sign in and check each individual course daily</Text>
                  </Unorderedlist>

                  <Unorderedlist
                    bulletUnicode={0x25e6}
                    style={{ fontSize: 24, marginLeft: 30, marginBottom: 20 }}
                  >
                    <Text>
                      Pay close attention to announcements, weekly content and
                      deadlines
                    </Text>
                  </Unorderedlist>
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
                    Download{" "}
                    <Text
                      style={{ color: "blue" }}
                      onPress={() => {
                        Linking.openURL(
                          "https://it.conestogac.on.ca/support/zoom-meeting"
                        );
                      }}
                    >
                      Zoom Meetings
                    </Text>{" "}
                    to your device and explore the software{"\n"}
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
                      marginBottom: 10,
                    }}
                  >
                    Prepare a workspace with all required materials
                  </Text>
                  <Unorderedlist
                    bulletUnicode={0x25e6}
                    style={{ fontSize: 24, marginLeft: 30, marginBottom: 30 }}
                  >
                    <Text>
                      Set boundaries with friends, family and roommates to
                      establish quiet work times
                    </Text>
                  </Unorderedlist>
                </Unorderedlist>
              </View>
            </FlipCard>
          </View>
           {/*It contains the flipCard view of Planning */}
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
                  source={require("../../assets/res/myLearning/plan.png")}
                ></Image>
                <Text style={[styles1.titleText1]}>Plan</Text>
              </View>
               {/*It contains backside of flipCard which shows information on how students can do planning for studies*/}
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
                    }}
                  >
                    Follow your instructional plans to stay on track
                  </Text>
                  <Unorderedlist
                    bulletUnicode={0x25e6}
                    style={{ fontSize: 24, marginLeft: 30, marginBottom: 10 }}
                  >
                    <Text>
                      Be disciplined in completing class work each week
                    </Text>
                  </Unorderedlist>
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
                    Schedule your time using your preferred planning tool
                  </Text>
                  <Unorderedlist
                    bulletUnicode={0x25e6}
                    style={{ fontSize: 24, marginLeft: 30, marginBottom: 10 }}
                  >
                    <Text>Planner, calendar, task-list, or apps</Text>
                  </Unorderedlist>
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
                    Schedule specific tasks for specific times
                  </Text>
                  <Unorderedlist
                    bulletUnicode={0x25e6}
                    style={{ fontSize: 22, marginLeft: 30, marginBottom: 10 }}
                  >
                    <Text>
                      Readings, weekly content, assignments and lecture material
                    </Text>
                  </Unorderedlist>
                </Unorderedlist>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Text
                    style={{
                      smargin: 24,
                      fontSize: 18,
                      marginBottom: 10,
                      color: "#34495e",
                    }}
                  >
                    Live lectures may require you to be online at regular class
                    times
                  </Text>
                  <Unorderedlist
                    bulletUnicode={0x25e6}
                    style={{ fontSize: 22, marginLeft: 30 }}
                  >
                    <Text>Block off time in your calendar</Text>
                  </Unorderedlist>
                  <Unorderedlist
                    bulletUnicode={0x25e6}
                    style={{ fontSize: 24, marginLeft: 30 }}
                  >
                    <Text>Set a reminder if necessary</Text>
                  </Unorderedlist>
                </Unorderedlist>
              </View>
            </FlipCard>
          </View>
           {/*It contains the flipCard view of Stay Connected */}
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
                  source={require("../../assets/res/myLearning/stayConnected.png")}
                ></Image>
                <Text style={[styles1.titleText1]}>Stay Connected</Text>
              </View>
               {/*It contains backside of flipCard which shows information on they can stay connected*/}
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
                    }}
                  >
                    Monitor the{" "}
                    <Text
                      style={{ color: "blue" }}
                      onPress={() => {
                        Linking.openURL("https://www.conestogac.on.ca/");
                      }}
                    >
                      Conestoga College website
                    </Text>{" "}
                    for updates
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
                    Check your student email daily
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
                    Stay in touch with your faculty through eConestoga or
                    Conestoga email
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
                    Participate in online discussions as directed
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
                      marginBottom: 10,
                      color: "#34495e",
                    }}
                  >
                    Reach out to college services
                  </Text>

                  <Unorderedlist
                    bulletUnicode={0x25e6}
                    style={{ fontSize: 24, marginLeft: 30, marginBottom: 20 }}
                  >
                    <Text>
                      Use our{" "}
                      <Text
                        style={{ color: "blue" }}
                        onPress={() => {
                          Linking.openURL(
                            "https://studentsuccess.conestogac.on.ca/StudentReferral"
                          );
                        }}
                      >
                        online self-referral
                      </Text>{" "}
                      form to contact a Student Success Advisor if you need
                      additional support
                    </Text>
                  </Unorderedlist>
                </Unorderedlist>
              </View>
            </FlipCard>
          </View>
           {/*It contains the flipCard view of Library Sevices */}
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
                  source={require("../../assets/res/myLearning/library.png")}
                ></Image>
                <Text style={[styles1.titleText1]}>Library Services</Text>
              </View>
               {/*It contains backside of flipCard which shows information on how Library Services are available*/}
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
                    ​The Library advances and enriches student learning,
                    contributes to teaching excellence and supports research at
                    Conestoga.
                  </Text>
                </Text>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Text
                    onPress={() => {
                      Linking.openURL(
                        "https://library.conestogac.on.ca/browse/find-resources-by-type"
                      );
                    }}
                    style={{
                      smargin: 24,
                      fontSize: 18,
                      color: "blue",
                    }}
                  >
                    Find resources
                  </Text>
                </Unorderedlist>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Text
                    onPress={() => {
                      Linking.openURL(
                        "http://lib.conestogac.on.ca/meeting-rooms-learning-spaces/book"
                      );
                    }}
                    style={{
                      smargin: 24,
                      fontSize: 18,
                      color: "blue",
                    }}
                  >
                    Book study rooms
                  </Text>
                </Unorderedlist>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Text
                    onPress={() => {
                      Linking.openURL(
                        "http://lib.conestogac.on.ca/Tech-Help-Borrowing/tutors"
                      );
                    }}
                    style={{
                      smargin: 24,
                      fontSize: 18,
                      color: "blue",
                    }}
                  >
                    Get tech help
                  </Text>
                </Unorderedlist>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Text
                    onPress={() => {
                      Linking.openURL(
                        "https://lib.conestogac.on.ca/Tech-Loans-Help"
                      );
                    }}
                    style={{
                      smargin: 24,
                      fontSize: 18,
                      color: "blue",
                    }}
                  >
                    Borrow tech & equipment
                  </Text>
                </Unorderedlist>

                <Unorderedlist
                  bulletUnicode={0x2022}
                  style={{ fontSize: 22, marginLeft: 20 }}
                >
                  <Text
                    onPress={() => {
                      Linking.openURL(
                        "https://lib.conestogac.on.ca/writing-services/about"
                      );
                    }}
                    style={{
                      color: "blue",
                      smargin: 24,
                      fontSize: 18,
                      marginBottom: 10,
                    }}
                  >
                    Writing Support
                  </Text>
                </Unorderedlist>
              </View>
            </FlipCard>
          </View>
           {/*It contains the flipCard view of Co-Curricular Record */}
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
                  source={require("../../assets/res/myLearning/coCurricular.png")}
                ></Image>
                <Text style={[styles1.titleText1]}>
                  Co-Curricular Record (CCR)
                </Text>
              </View>
               {/*It contains backside of flipCard which shows information on how Co-Curricular Record works*/}
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
                    Conestoga College's{" "}
                    <Text
                      style={{ color: "blue" }}
                      onPress={() => {
                        Linking.openURL(
                          "https://www.conestogac.on.ca/co-curricular-record"
                        );
                      }}
                    >
                      Co-Curricular Record (CCR)
                    </Text>{" "}
                    enhances your growth and development outside the classroom.
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
                    Get involved in the community
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
                    Reflect and articulate learning experiences
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
                    Increase your academic and career success
                  </Text>
                </Unorderedlist>
              </View>
            </FlipCard>
          </View>
           {/*It contains the CardView of IT Service Desk */}
          <View
            style={{
              flex: 1,
              backgroundColor: "#ffffff",
              //alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
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
                IT Service Desk{"\n"}
              </Text>
              <Unorderedlist
                bulletUnicode={0x2022}
                style={{ fontSize: 22, marginLeft: 20 }}
              >
                <Text
                  onPress={() => {
                    Linking.openURL("https://it.conestogac.on.ca/Support");
                  }}
                  style={{
                    smargin: 24,
                    fontSize: 18,
                    color: "blue",
                  }}
                >
                  Get IT support
                </Text>
              </Unorderedlist>

              <Unorderedlist
                bulletUnicode={0x2022}
                style={{ fontSize: 22, marginLeft: 20 }}
              >
                <Text
                  onPress={() => {
                    Linking.openURL("https://it.conestogac.on.ca/Downloads");
                  }}
                  style={{
                    smargin: 24,
                    fontSize: 18,
                    color: "blue",
                  }}
                >
                  Download software{"\n"}{"\n"}
                </Text>
              </Unorderedlist>
            </CardView>
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
  image: {
    width: "100%",
    height: "70%",
    resizeMode: "stretch",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: "auto",
    justifyContent: "center",
    color: "#34495e",
  },
  appButtonContainer: {
    elevation: 16,
    backgroundColor: "#23272b",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 24,
    width: 300,
  },
  appButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});

export default RelatedService;
