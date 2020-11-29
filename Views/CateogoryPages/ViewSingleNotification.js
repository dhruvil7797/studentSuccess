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
import { getNotiId, Server_Url } from '../../Globaldata.js';

export default class ViewSingleNotification extends Component {
    async componentDidMount() {
        console.log("Fetching Single Notifications");
        var value = getNotiId();
        
        // while(value === -1){
            
        //     value = getNotiId();
        // }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                notificationId: value === -1 ? 1 : value
            })
        };
        var callingURL = '/getSingleNotification';
        fetch(Server_Url + callingURL, requestOptions)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                var dataObject = json['data'];
                console.log(dataObject);
                this.setState({
                    data: [dataObject]
                })
            });
    }
    constructor() {
        super();
        // fetch(Server_Url)
        // .then((response) => console.warn(response))
        // .catch(function(error){console.warn(error)})
        this.state = {
            data: []
        }
    }
    render() {

        return (
            <View style={[styles.container,{paddingLeft:20, paddingRight:20, width:'100%', margin:0, marginLeft:0, paddingTop:10}]}>
                {
                    this.state.data.length === 0 ?
                        null :


                        <View style={styles.container}>
                            <Text style={styles.titleText}>{(this.state.data[0].eventTitle)}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name="schedule" style={styles.icon}></Icon>
                                <Text style={styles.dateFormat}>
                                    {new Date(this.state.data[0].eventDate).toString().split(" ")[0] + ", "
                                        + new Date(this.state.data[0].eventDate).toString().split(" ")[1] + " "
                                        + new Date(this.state.data[0].eventDate).toString().split(" ")[2] + " "
                                        + new Date(this.state.data[0].eventDate).toString().split(" ")[3] + " - "
                                        + new Date(this.state.data[0].eventDate).toString().split(" ")[4].split(":")[0] + ":"
                                        + new Date(this.state.data[0].eventDate).toString().split(" ")[4].split(":")[1]}
                                </Text>
                            </View>
                            <Text style={styles.paraText}>{(this.state.data[0].eventShortDescription)}</Text>
                            <Text style={styles.paraText}>{(this.state.data[0].eventHeaderPara)}</Text>
                            {
                                this.state.data[0].eventContentType === 'List' ?
                                    <View style={styles.paraText}>

                                        {this.state.data[0].eventContent.split(",").map((block) => (
                                            <Unorderedlist bulletUnicode={0x2022}>
                                                <Text>{block}</Text>
                                            </Unorderedlist>
                                        ))}

                                    </View>
                                    :
                                    <Text style={styles.paraText}>{this.state.data[0].eventContent}</Text>
                            }

                            <Text style={styles.paraText}>{this.state.data[0].eventFooterPara}</Text>
                            <View style={{ flexGrow: 1 }}></View>
                            {this.state.data[0].eventURL.trim() === '' ? null :
                                <Button title='View Details' onPress={() => {
                                    console.log("data");
                                    console.log(this.state.data[0].eventURL);
                                    Linking.openURL(this.state.data[0].eventURL)
                                }} style={styles.appButtonContainer}>View Details
                        </Button>

                            }
                        </View>
                }
            </View>
        );

    }
}
const styles = StyleSheet.create({

    appButtonContainer: {
        marginBottom: 40,
        width: '100%',
        alignSelf: 'center',

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
        
        justifyContent: "center",
        paddingTop: 10,
    },
    icon:
    {
        paddingTop: 8,
        color: "#696969",
        fontSize: 16,
        
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
        marginLeft:20,
        marginRight:20,
        flex: 1,
        backgroundColor: "#ffffff",
    },
    paraText: {
        
        paddingTop: 10,
        fontSize: 18,
        marginVertical: 1,
        textAlign: "justify",
    },
});