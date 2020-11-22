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

export default class RowNotification extends Component {
  
  render() {
    return (
      <View
        style={{
          height: 75,
          marginLeft: 10,
          marginRight: 10,
          backgroundColor: "#eff0f1",
          display: "flex",
          flexDirection: "row",
          borderBottomColor: "grey",
          borderBottomWidth: 2,
        }}
      >
        <View
          style={{
            width: 75,
            height: 75,
            paddingLeft: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={[
              {
                width: 50,
                height: 50,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "grey",
              },
            ]}
          >
            <Text>{this.props.notiData['date'].getDate()}</Text>
            <Text>{this.props.notiData['date'].toString().split(" ")[1]}</Text>
          </View>
        </View>

        <View
          style={{
            flexGrow: 1,
            paddingLeft: 10,
            display: "flex",
            flexDirection: "column",
            marginLeft: 20,
            marginTop: 12,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>{this.props.notiData['title']}</Text>
          <Text style={{ fontSize: 12, marginTop:2 }}>{this.props.notiData['shortDescription']}</Text>
        </View>
      </View>
    );
  }
}
