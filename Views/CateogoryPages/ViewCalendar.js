import React, { Component, useEffect } from "react";
import {
  Text,
  AsyncStorage,
  textarea,
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import WeeklyCalendar from "react-native-weekly-calendar";
import { Icon, Button } from "react-native-elements";
import { Server_Url } from "../../Globaldata";
import CalStyle from "react-native-weekly-calendar/src/Style";
import moment from "moment";
import Modal from "react-native-modal";
import DatePicker from "react-native-datepicker";

export default class ViewCalendar extends Component {
  async componentDidMount() {
    this.updateResult();
  }

  

  async updateResult() {
    const value = await AsyncStorage.getItem("studentId");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        studentNumber: "8683186",
      }),
    };
    var callingURL = "/getAllTask";
    console.log(Server_Url + callingURL);
    fetch(Server_Url + callingURL, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        var dataObject = json["upcomingData"];
        console.log(dataObject);
        var convertData = [];
        for (var i = 0; i < dataObject.length; i++) {
          convertData.push({
            start: this.convertDate(new Date(dataObject[i].startDate)),
            end: this.endDateConvert(new Date(dataObject[i].endDate)),
            title: dataObject[i].taskTitle,
            description: dataObject[i].taskDescription,
          });
        }
        this.setState({
          data: convertData,
          dl: dataObject.length,
        });
      });
  }

  constructor() {
    super();
  }

  state = {
    data: [],
    dl: -1,
    isModalVisible: false,
    date: new Date(),
    enddate: new Date(),
    title: "",
    description: "",
    error: true,
    errorMessage: "",
    cnt: 1,
  };

  endDateConvert(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  convertDate(date_ob) {
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    var hours = date_ob.getHours();
    var minutes = date_ob.getMinutes();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + ":00";

    var finalDate = year + "-" + month + "-" + date + " " + strTime;
    return finalDate;
  }

  handleAddTask = () => {
    //Validate data
    if (this.state.title.trim() === "") {
      this.setState({
        error: true,
        errorMessage: "Please enter task title",
      });
    } else if (this.state.description.trim() === "") {
      this.setState({
        error: true,
        errorMessage: "Please enter task description",
      });
    } else {
      var dateString = this.state.date.split(" ")[0];
      var timeString = this.state.date.split(" ")[1];
      var convertedString =
        dateString.split("-")[2] +
        "-" +
        dateString.split("-")[1] +
        "-" +
        dateString.split("-")[0];
      var timeString = timeString + ":00";

      var dateString2 = this.state.enddate.split(" ")[0];
      var timeString2 = this.state.enddate.split(" ")[1];
      var convertedString2 =
        dateString2.split("-")[2] +
        "-" +
        dateString2.split("-")[1] +
        "-" +
        dateString2.split("-")[0];
      var timeString2 = timeString2 + ":00";

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentNumber: "8683186",
          taskTitle: this.state.title,
          startDate: convertedString + " " + timeString,
          endDate: convertedString2 + " " + timeString2,
          taskDescription: this.state.description,
        }),
      };
      var callingURL = "/addCustomTask";
      fetch(Server_Url + callingURL, requestOptions).then((response) => {
        this.updateResult();
        this.props.navigation.navigate('ViewCalandar');
      });
      this.handleClose();
    }
  };

  handleClose = () => {
    //Validate data

    this.setState({
      isModalVisible: false,
      date: new Date(),
      enddate: new Date(),
      title: "",
      description: "",
      error: false,
      errorMessage: "",
    });
  };

  OpenPopup = () => {
    this.setState({
      isModalVisible: true,
      date: new Date(),
      enddate: new Date(),
      title: "",
      description: "",
      error: false,
      errorMessage: "",
    });
  };
  render() {
    return (
      <View style={styles2.container}>
        <Modal
          isVisible={this.state.isModalVisible}
          animationIn="fadeInUpBig"
          style={([styles.modalContainer], { width: "90%", height: 10 })}
        >
          <View
            style={{
              flex: 1,
              marginTop: 100,
              backgroundColor: "white",
              paddingLeft: 10,
              paddingRight: 10,
              alignItems: "center",
              display: "flex",
            }}
          >
            {this.state.error ? (
              <Text
                style={{
                  width: "100%",
                  color: "red",
                  marginTop: 10,
                  textAlign: "center",
                  fontSize: 16,
                }}
              >
                {this.state.errorMessage}{" "}
              </Text>
            ) : null}
            <Text
              style={[
                {
                  fontSize: 30,
                  width: "100%",
                  marginTop: 25,
                  textAlign: "center",
                  fontWeight: "bold",
                  marginBottom: 5,
                },
              ]}
            >
              Add Task
            </Text>
            <View
              style={{
                width: "100%",
                height: 2,
                backgroundColor: "lightgrey",
                marginBottom: 20,
              }}
            ></View>
            <TextInput
              type="text"
              placeholder="Enter Task Title"
              value={this.state.title}
              style={{
                borderWidth: 1,
                borderColor: "black",
                borderStyle: "solid",
                marginBottom: 10,
                width: "80%",
                padding: 5,
              }}
              onChangeText={(value) => {
                this.setState({
                  title: value,
                });
              }}
            ></TextInput>
            <Text style={{ width: "80%", marginBottom: 5 }}>
              Select Start Date and Time
            </Text>
            <DatePicker
              style={styles.datePickerStyle}
              date={this.state.date} //initial date from state
              mode="datetime" //The enum datetime
              placeholder="Event Start Time"
              format="DD-MM-YYYY hh:mm"
              minDate="01-01-2016"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              hideText={false}
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
              }}
              onDateChange={(date) => {
                console.log(date);

                this.setState({
                  date: date,
                  enddate: date,
                });
              }}
            />

            <Text style={{ width: "80%", marginBottom: 5 }}>
              Select End Time
            </Text>
            <DatePicker
              style={styles.datePickerStyle}
              date={this.state.enddate} //initial date from state
              mode="time" //The enum of date, datetime and time
              placeholder="select date"
              format="DD-MM-YYYY hh:mm"
              minDate="01-01-2016"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
              }}
              onDateChange={(date) => {
                console.log(date);
                this.setState({
                  enddate: date,
                });
              }}
            />

            <TextInput
              placeholder="Enter Task Description"
              multiline={true}
              value={this.state.description}
              keyboardType="default"
              returnKeyType="done"
              blurOnSubmit={true}
              style={{
                width: "80%",
                height: "15%",
                borderWidth: 1,
                borderColor: "black",
                borderStyle: "solid",
                padding: 5,
              }}
              onChangeText={(value) => {
                this.setState({
                  description: value,
                });
              }}
            ></TextInput>

            <Button
              title="Add Task"
              style={{ width: 300, marginTop: 20 }}
              onPress={this.handleAddTask}
            />
            <Button
              title="Close"
              style={{
                backgroundColor: "red",
                color: "white",
                width: 300,
                marginTop: 20,
              }}
              onPress={this.handleClose}
            />
          </View>
        </Modal>

        {this.state.dl === -1 ? null : (
          <WeeklyCalendar
            events={this.state.data}
            style={{ height: "85%", marginBottom: "10%" }}
            renderEvent={(event, j) => {
              let startTime = moment(event.start).format("LT").toString();

              let endTime = event.end;
              return (
                <View key={j}>
                  <View style={CalStyle.event}>
                    <View style={CalStyle.eventDuration}>
                      <View style={CalStyle.durationContainer}>
                        <View style={CalStyle.durationDot} />
                        <Text style={CalStyle.durationText}>{startTime}</Text>
                      </View>
                      <View style={{ paddingTop: 10 }} />
                      <View style={CalStyle.durationContainer}>
                        <View style={CalStyle.durationDot} />
                        <Text style={CalStyle.durationText}>{endTime}</Text>
                      </View>
                      <View style={CalStyle.durationDotConnector} />
                    </View>
                    <View style={[CalStyle.eventNote, { width: "70%" }]}>
                      <Text
                        style={[
                          CalStyle.eventText,
                          { fontWeight: "bold", marginTop: 5 },
                        ]}
                      >
                        {event.title}
                      </Text>
                      <Text
                        style={[
                          CalStyle.eventText,
                          { color: "grey", marginTop: 5 },
                        ]}
                      >
                        {event.description}
                      </Text>
                    </View>
                  </View>
                  <View style={CalStyle.lineSeparator} />
                </View>
              );
            }}
          />
        )}
        <Button
          style={styles2.appButtonContainer}
          title="Add task"
          onPress={this.OpenPopup}
        ></Button>
      </View>
    );
  }
}
//export default ViewCalendar;

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  appButtonContainer: {
    alignSelf: "center",
    marginBottom: "10%",
    width: "90%",
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    //alignItems: 'center',
    justifyContent: "center",
    width: "90%",
    marginLeft: "5%",
  },
  datePickerStyle: {
    width: "80%",
    marginBottom: 20,
  },
});
