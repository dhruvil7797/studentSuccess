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
import RowNotification from "./RowNotification";

export default class MyWellness extends Component {
  constructor() {
    super();
    this.state = {
    //   data: [
    //     {
    //       title: "Title1",
    //       shortDescription: "Short Description",
    //       longDescription: "Long Description",
    //       date: new Date(),
    //     },
    //     {
    //       title: "Title2",
    //       shortDescription: "Short Description2",
    //       longDescription: "Long Description2",
    //       date: new Date(),
    //     },
    //     {
    //       title: "Title3",
    //       shortDescription: "Short Description3",
    //       longDescription: "Long Description3",
    //       date: new Date(),
    //     },
    //     {
    //       title: "Title3",
    //       shortDescription: "Short Description3",
    //       longDescription: "Long Description3",
    //       date: new Date(),
    //     },
    //   ],
    data:[]
    };
  }

  render() {
    return (
      <View>
        {this.state.data.map((block) => (
          <RowNotification notiData={block} />
        ))}
      </View>
    );
  }
}
