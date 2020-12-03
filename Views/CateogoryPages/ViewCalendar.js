import React, { Component, useEffect } from 'react';
import { StyleSheet, View, AsyncStorage, Text } from 'react-native';
import WeeklyCalendar from 'react-native-weekly-calendar';
import { Icon, Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Server_Url } from "../../Globaldata";
import CalStyle from 'react-native-weekly-calendar/src/Style'
import moment from 'moment';

export default class ViewCalendar extends Component {
    async componentDidMount() {
        const value = await AsyncStorage.getItem('studentId');
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                studentNumber: "8683186",
                taskTitle: "",
                taskDescription: ""

            })
        };
        var callingURL = '/getAllTask';
        fetch(Server_Url + callingURL, requestOptions)
            .then((response) => response.json())
            .then((json) => {
                var dataObject = json['upcomingData'];
                var convertData = []
                for(var i = 0; i<dataObject.length; i++){
                    convertData.push(
                        {
                            'start':this.convertDate(new Date(dataObject[i].startDate)),
                            'end':this.endDateConvert(new Date(dataObject[i].endDate)),
                            'title':dataObject[i].taskTitle,
                            'description':dataObject[i].taskDescription
                        }
                    )
                }
                this.setState({
                    data: convertData,
                })
            });
    }
    constructor() {
        super();
    }

    state = {
        data: [],
    }

    endDateConvert(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }


    convertDate(date_ob) {

        let date = ("0" + date_ob.getDate()).slice(-2);
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        let year = date_ob.getFullYear();
        var hours = date_ob.getHours();
        var minutes = date_ob.getMinutes();

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ':00';


        var finalDate = year + "-" + month + "-" + date + " " + strTime;
        return finalDate;
    }



    render() {


        return (
            <View style={styles2.container}>
                {
                    this.state.data.length===0 ? null :
                
                <WeeklyCalendar

                    events={this.state.data}
                    style={{ height: '85%', marginBottom: '10%' }}
                    renderEvent={(event, j) => {

                        let startTime = moment(event.start).format('LT').toString()
                        
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
                                    <View style={[CalStyle.eventNote, { width: '70%' }]}>
                                        <Text style={[CalStyle.eventText, { fontWeight: 'bold', marginTop: 5 }]}>{event.title}</Text>
                                        <Text style={[CalStyle.eventText, { color: 'grey', marginTop: 5 }]}>{event.description}</Text>
                                    </View>
                                </View>
                                <View style={CalStyle.lineSeparator} />
                            </View>
                        )
                    }}
                />
                }
                <Button style={styles2.appButtonContainer} title="Add task"></Button>
            </View>

        );

    }
}
//export default ViewCalendar;

const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    appButtonContainer: {
        alignSelf: 'center',
        marginBottom: '10%',
        width: '90%'

    },
});