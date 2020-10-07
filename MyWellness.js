import React from 'react'
import {Text,StyleSheet, View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Component } from 'react';
import style from './style';
import { BorderlessButton } from 'react-native-gesture-handler';
export default class MyWellness extends Component
{
    
    render()
    {
        return(
            <View style = {style.Stylesheet}>
                <Text style = {style.titleText}>Mywellness</Text>
                <Text style = {style.bodyText}>Conestoga College offers a variety of services that support your wellness. Students currently living in Ontario can access the college’s remote medical care and mental health supports to discuss any physical and mental health issues they are experiencing.</Text>
            </View>
        );
    }
}



