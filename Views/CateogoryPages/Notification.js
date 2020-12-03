import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  Animated,
  SafeAreaView,
  StatusBar,
  AsyncStorage,
} from "react-native";
import { Link, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Component } from "react";
import styles from "../../style";
import {
  BorderlessButton,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Platform } from "react-native";
import CollapsibleToolbar from "react-native-collapsible-toolbar";
import CardView from "react-native-cardview";
import { Card } from "react-native-elements";
import Unorderedlist from "react-native-unordered-list";
import RowNotification from "./RowNotification";
import { Server_Url } from "../../Globaldata";

export default class Notification extends Component {
  async componentDidMount() {
    console.log("Fetching Notifications");
    const value = await AsyncStorage.getItem('studentId');
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        studentNumber: value
      })
    };
    var callingURL = '/getAllNotification';
    fetch(Server_Url + callingURL, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        var dataObject = json['upcomingData'];
        this.setState({
          data: dataObject,
        })
      });
  }
  constructor() {
    super();
  }

  state = {
    data:[],
  }

  render() {
    return (
      <View>
        <ScrollView>
        {this.state.data.map((block) => (
          <RowNotification notiData={block} />
        ))}
        </ScrollView>
      </View>
    );
  }
}
