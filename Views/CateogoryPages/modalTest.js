import React, { Component, useState } from "react";
import {
  Button,
  Text,
  textarea,
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Modal from "react-native-modal";
import DatePicker from "react-native-datepicker";

export default class ModalTester extends Component {
  state = {
    isModalVisible: false,
    date: "03-12-2020 1:30:00",
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Show modal" onPress={this.toggleModal} />
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
            }}
          >
            <Text
              style={[
                {
                  fontSize: 20,
                  marginTop: 25,
                  alignText: "center",
                  fontWeight: "bold",
                  marginBottom: 25,
                },
              ]}
            >
              Add Task
            </Text>
            <Text style={{paddingBottom: 5}}>Task Title</Text>
            <TextInput
              type="text"
              placeholder="Enter Your Name"
              style={{
                borderWidth: 1,
                borderColor: "black",
                borderStyle: "solid",
                marginBottom: 10,
              }}
            ></TextInput>
            <Text>Start Date</Text>
            <SafeAreaView>
              <View>
                <DatePicker
                  style={styles.datePickerStyle}
                  date={this.state.date} //initial date from state
                  mode="datetime" //The enum datetime
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
                    this.setState({
                      date: date,
                    });
                  }}
                />
              </View>
            </SafeAreaView>
            <Text>End Date</Text>
            <SafeAreaView>
              <View>
                <DatePicker
                  style={styles.datePickerStyle}
                  date={this.state.date} //initial date from state
                  mode="datetime" //The enum of date, datetime and time
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
                    this.setState({
                      date: date,
                    });
                  }}
                />
              </View>
            </SafeAreaView>
            <Text style={{marginBottom: 10}}>Task Description</Text>
            <TextInput
              multiline={true}
              style={{  borderWidth: 1,
                borderColor: "black",
                borderStyle: "solid" }}
            ></TextInput>
            <Button title="Hide modal" onPress={this.toggleModal} />
          </View>
        </Modal>
      </View>
    );
  }
}

//
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
    width: "100%",
    marginLeft: "5%",
  },
  datePickerStyle: {
    width: 200,
    marginBottom: 20,
  },
});
