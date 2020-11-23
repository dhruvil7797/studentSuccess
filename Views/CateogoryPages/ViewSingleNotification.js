import React, { Component } from "react";
import {
    Animated,
    KeyboardAvoidingView,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Text,
    Linking,
    TextInput,
    View,
    FlatList,
    Image,

} from "react-native";

import { Card, Icon, Button } from 'react-native-elements';
import style from "../../style";
//import CalendarIcon from "react-calendar-icon";
import Unorderedlist from 'react-native-unordered-list';
import { Server_Url } from '../../Globaldata.js';

export default class ViewSingleNotification extends Component {
    constructor() {
        super();
        // fetch(Server_Url)
        // .then((response) => console.warn(response))
        // .catch(function(error){console.warn(error)})
        this.state = {
            data: [
                {
                    title: 'Notification',
                    date: new Date(),
                    shortDescription: 'Short Description',
                    header: 'Header Para',
                    contentType: "list",
                    content: "A,B,C,D",
                    footer: 'Footer Para',
                    eventURL: 'Event URL'

                }
            ]
        }
    }
    render() {

        return (
            <View style={styles.container}>
                <Text>{this.props.route.params.notificationId}</Text>
                <Text style={styles.titleText}>{(this.state.data[0])['title']}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="schedule" style={styles.icon}></Icon>
                    <Text style={styles.dateFormat}>
                        {(this.state.data[0])['date'].toString().split(" ")[0] + ", "
                            + (this.state.data[0])['date'].toString().split(" ")[1] + " "
                            + (this.state.data[0])['date'].toString().split(" ")[2] + " "
                            + (this.state.data[0])['date'].toString().split(" ")[3] + " - "
                            + (this.state.data[0])['date'].toString().split(" ")[4].split(":")[0] + ":"
                            + (this.state.data[0])['date'].toString().split(" ")[4].split(":")[1]}
                    </Text>
                </View>
                <Text style={styles.paraText}>{(this.state.data[0])['shortDescription']}</Text>
                <Text style={styles.paraText}>{(this.state.data[0])['header']}</Text>
                {
                    (this.state.data[0])['contentType'] === 'list' ?
                        <View style={styles.paraText}>

                            {(this.state.data[0])['content'].split(",").map((block) => (
                                <Unorderedlist bulletUnicode={0x2022}>
                                    <Text>{block}</Text>
                                </Unorderedlist>
                            ))}

                        </View>
                        :
                        <Text style={styles.paraText}>{(this.state.data[0])['content']}</Text>
                }

                <Text style={styles.paraText}>{(this.state.data[0])['footer']}</Text>
                {(this.state.data[0])['eventURL'] === '' ? null :
                    <Button title='View Details' style={styles.appButtonContainer}>View Details
                        </Button>

                }
            </View>
        );

    }
}
const styles = StyleSheet.create({

    appButtonContainer: {
        height: 200,
        width: 200,
        alignContent: 'center',
        alignSelf: 'center',
        paddingTop: 20
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },

    titleText: {
        fontSize: 26,
        fontWeight: "bold",
        marginLeft: 20,
        justifyContent: "center",
        paddingTop: 10,
    },
    icon:
    {
        paddingTop: 8,
        color: "#696969",
        fontSize: 16,
        marginLeft: 15
    },
    dateFormat: {
        fontSize: 16,
        //fontWeight: "bold",
        paddingTop: 10,
        marginLeft: 5,
        color: '#696969'
    },
    format: {
        fontSize: 20,
        color: 'blue',
        paddingTop: 10,
        marginLeft: 20
    },
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        // marginTop: 80,
    },
    paraText: {
        marginLeft: 20,
        paddingTop: 10,
        fontSize: 18,
        marginVertical: 1,
        textAlign: "justify",
    },
});