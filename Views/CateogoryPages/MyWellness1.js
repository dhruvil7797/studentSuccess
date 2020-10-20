import React from 'react'
import {Text,StyleSheet, View,ScrollView,Image,Animated,Dimensions} from 'react-native'
import { Link, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Component } from 'react';
import styles from '../../style';
import { BorderlessButton, FlatList } from 'react-native-gesture-handler';
import {Platform} from 'react-native';
import CollapsibleToolbar from 'react-native-collapsible-toolbar';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Header_Max_Height = 200;
const Header_Min_Height = 50;

const Title_Max_Height=20;
const Title_Min_Height=14;
const {width:SCREEN_WIDTH}=Dimensions.get('screen');
    
export default class MyWellness1 extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            AnimatedHeader: new Animated.Value(0),
            open:true,
        };
        
    }
    render()
    {
        <CollapsibleToolbar
            title={'MyWellness'}
            headerColor={Colors.primary}
            imagepreview={require('../../assets/res/bg1.jpg')}>
        </CollapsibleToolbar>
        const HeaderHeight= this.state.AnimatedHeader.interpolate
        ({
            inputRange : [0,Header_Max_Height-Header_Min_Height],
            outputRange:[Header_Max_Height,Header_Min_Height],
            extrapolate: 'clamp',
        });
        /*const BackgroundColor=this.state.AnimatedHeader.interpolate
        ({
            inputRange:[0,Header_Max_Height-Header_Min_Height],
            outputRange: ['#4286F4', '#00BCD4'],
            extrapolate: 'clamp',
        });*/
        const HeaderSlider= this.state.AnimatedHeader.interpolate
        ({
            inputRange : [0,Header_Max_Height-Header_Min_Height],
            outputRange:[0,32],
            extrapolate: 'clamp',
        }); 
        const TitleHeight=this.state.AnimatedHeader.interpolate
        ({
            inputRange : [0,Header_Max_Height-Header_Min_Height],
            outputRange: [Title_Max_Height,Title_Min_Height],
            extrapolate:'clamp'
        });
       const TitleOpacity=this.state.AnimatedHeader.interpolate
        ({
            inputRange:[0,Header_Max_Height-Header_Min_Height],
            outputRange:[1,0],
            extrapolate:'clamp'
        });
        const ImageOpacity=this.state.AnimatedHeader.interpolate
        ({
            inputRange:[0,Header_Max_Height-Header_Min_Height],
            outputRange:[0.5,1],
            extrapolate:'clamp'
        });
    
            return(   
               
                <View style = {styles.MainContent}>
                    <Animated.View
                        //onLayout={event => this.onLayout(event)}
                        style={[
                        styles.header,
                        {
                            height: HeaderHeight,
                            backgroundColor: this.BackgroundColor ? this.BackgroundColor: Colors.primary,
                        },
                    ]}>
                        <Animated.Text
                            style={[styles.title,
                            styles.maxheight,
                                {
                                    color:Colors.Black,
                                    paddingLeft: HeaderSlider,
                                    fontSize:TitleHeight,
                                    opacity:TitleOpacity,
                                },
                            ]}>
                                {this.props.title ? this.props.title:'Title'}
                        </Animated.Text>
                        <Animated.Image
                            style={[styles.image2,{opacity: ImageOpacity}]}
                            source={this.props.imagepreview}
                        >
                        </Animated.Image>
                 </Animated.View>
                
                <ScrollView
                  scrollEventThrottle={16}
                  contentContainerStyle={{ paddingTop: Header_Max_Height }}
                  onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { y: this.state.AnimatedHeader } } },
                  ])}
                //  scrollEventThrottle={16}
                  >  
                     {this.props.children}
                     <View style = {styles.container}>
                <Text style={styles.titleText}>myWellness!</Text>
                  <Text style={styles.paraText}>
                        <Text style={styles.initial}>C</Text>
                        <Text> 
                        onestoga College offers a variety of services that support your wellness. Students currently living in Ontario can access the college’s remote medical care and mental health supports to discuss any physical and mental health issues they are experiencing.
                        </Text>
                  </Text>
                <View style={styles.scrollviewset}> 
                    <Text style={styles.titleText1}>Our Services + Supports</Text>
                <View style={styles.viewset}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Link to ='/MentalHealth'>
                            <View style={styles.imageview}>
                                <Image source={require('../../assets/res/mental_health.png')}
                                style={styles.imageprop}></Image>
                            </View>
                        </Link>
                        <Link to ='/Medical_Care'>
                            <View style={styles.imageview}>
                            <   Image source={require('../../assets/res/medical_care.png')}
                                style={styles.imageprop}></Image>
                            </View>
                        </Link>
                        <Link to ='/Counselling'>
                        <View style={styles.imageview}>
                            <Image source={require('../../assets/res/counselling.png')}
                            style={styles.imageprop}></Image>
                        </View>
                        </Link>
                        <Link to ='/HealthInsurance'>
                        <View style={styles.imageview}>
                            <Image source={require('../../assets/res/health_insurance.png')}
                            style={styles.imageprop}></Image>
                        </View>
                        </Link>
                        <Link to ='/Related_service'>
                        <View style={styles.imageview}>
                            <Image source={require('../../assets/res/related_resources.png')}
                            style={styles.imageprop}></Image>
                        </View>
                        </Link>
                        <Link to ='/Help_Student'>
                        <View style={styles.imageview}>
                            <Image source={require('../../assets/res/help_student.png')}
                            style={styles.imageprop}></Image>
                        </View>
                        </Link>
                        <Link to ='/Contact'>
                        <View style={styles.imageview1}>
                            <Image source={require('../../assets/res/contact.png')}
                            style={styles.imageprop}></Image>
                        </View>
                    </Link>
                    
               </ScrollView>
               </View>
                </View> 
            </View>                        
        </ScrollView>
       
           
     </View>
     
         );
                 
         onLayout(event)
         {
             const {x,y,height,width}=event.nativeEvent.layout;
             this.setState({open:height==Header_Min_Height?false:true});
         }

         
    }
}



