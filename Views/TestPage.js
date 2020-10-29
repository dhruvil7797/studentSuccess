import React, { Component, useState } from 'react';
import {AsyncStorage, Text, View, Alert,Button} from 'react-native';


var data = "testing"
async function loggedInUser (){
    

    try {
        await AsyncStorage.setItem(
            'isLoggedIn',
            '1'
        );
        Alert.alert("Set");

    }
    catch(error) {
        console.log(error);
    }
};

async function loggedOutUser (){
    

    try {
        await AsyncStorage.setItem(
            'isLoggedIn',
            '0'
        );
        Alert.alert("Set");

    }
    catch(error) {
        console.log(error);
    }
};

async function checkLogin(){
    try{
        const value = await AsyncStorage.getItem('isLoggedIn');
        if(value === '1'){
            Alert.alert("User is loggedin");
        }
        else{
            Alert.alert("User is not loggedin");
        }
    }
catch(error){
    console.log(error)
}
};


export default class TestPage extends Component {

    render() {
        
        return (
            
            <View style={{marginTop:100, marginLeft:100}} onClick={()=>{Alert.alert('myWellness');}}>
                <Text>{data}</Text>
                <Button style={{width:50, height:100, backgroundColor:'grey'}} onPress={loggedInUser} title="Log In"></Button>
                <Button style={{width:50, height:100, backgroundColor:'grey'}} onPress={loggedOutUser} title="Logout"></Button>
                <Button style={{width:50, height:100, backgroundColor:'grey'}} onPress={checkLogin} title="Check status"></Button>
                
                
                
            </View>
        )
    }
}
