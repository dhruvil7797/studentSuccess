import * as React from 'react';
import { Text, View, Platform, Image,
  Alert, ScrollView, StyleSheet, Animated, AsyncStorage, StatusBar } from 'react-native';
import { Link, NavigationContainer } from '@react-navigation/native';
import {
  Paragraph,
  Card,
  useTheme,
} from 'react-native-paper';

async function loggedOutUser(props) {
  try {
    await AsyncStorage.setItem(
      'isLoggedIn',
      '0'
    );
    props.navigation.navigate('Login');

  }
  catch (error) {
    console.log(error);
  }
};


export default class dashboard extends React.Component {
  constructor() {
    super();
    this.scrollYAnimatedValue = new Animated.Value(0);
  }
  render() {
    const HEADER_MIN_HEIGHT = 120;
    const HEADER_MAX_HEIGHT = 250;
    
    const headerHeight = this.scrollYAnimatedValue.interpolate(
      {
        inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp'
      });

    
    return (
      
      <View style={[styles.container2,{backgroundColor:'#2471A3'}]} >
      <StatusBar barStyle="light-content"/>
      <ScrollView
        contentContainerStyle={[styles.content,{ paddingTop: HEADER_MAX_HEIGHT }]}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: this.scrollYAnimatedValue } } }]
        )}
        style={[styles.container, { backgroundColor: "white",marginTop: 60 }]}
      >
        
          <Card
            style={[styles.card,{marginTop:0}]}
            onPress={()=>{this.props.navigation.navigate('YourAdvisor');}}
          >
            <Card.Cover style={styles.cardCover} source={require('../../assets/kyaTitle.jpg')} />
            <Card.Title style={styles.cardTitle} title="Know Your Advisor" />
          </Card>
        

        <Card
          style={styles.card}
          //onPress={()=>{this.props.navigation.navigate('YourAdvisor');}}
        >
          <Card.Cover style={styles.cardCover} source={require('../../assets/res/bookappointment.png')} />
          <Card.Title style={styles.cardTitle} title="Book an Appointment" />
        </Card>

        <Card
          style={styles.card}
          onPress={()=>{this.props.navigation.navigate('MyWellness');}}
        >
          <Card.Cover style={styles.cardCover} source={require('../../assets/res/myWellness.png')} />
          <Card.Title style={styles.cardTitle} title="myWellness" />
         
        </Card>

        <Card
          style={styles.card}
          onPress={()=>{this.props.navigation.navigate('MyLearning');}}
        >
          <Card.Cover style={styles.cardCover} source={require('../../assets/res/myLearning.png')} />
          <Card.Title style={styles.cardTitle} title="myLearning" />
        
        </Card>

        <Card
          style={styles.card}
          onPress={()=>{this.props.navigation.navigate('MyCareer');}}
        >
          <Card.Cover style={styles.cardCover} source={require('../../assets/res/myCareer.png')} />
          <Card.Title style={styles.cardTitle} title="myCareer" />
      
        </Card>
        <Card
          style={[styles.card,{height:80, marginBottom:100}]}
          onPress={() => { loggedOutUser(this.props) }}
        >
          <Card.Title style={styles.cardTitle} title="Logout" />
     
        </Card>
      </ScrollView>
      <Animated.View style={[styles.animatedHeaderContainer, {marginTop:20 ,height:headerHeight , backgroundColor: '#2471A3' }]}> 
          <Image source={require("../../assets/CSS.jpg")} style={{width:"80%", resizeMode:"stretch" ,backgroundColor:'green', flex:1, margin:20}}/>
            
          
          <View style={{height:100, width:"100%", display:'flex', flexDirection:'row', alignItems:"center", justifyContent:"flex-end"}}>
          <Text style={{fontSize:36, color:"white", marginRight:20}}>Welcome, Alan</Text>
          <Image source={require("../../assets/alan.jpg")} style={{width:60, height:60, borderRadius:"50%", marginRight:20}} />  
            

            
          </View>
      </Animated.View>
      </View>
    );
  }
};

dashboard.title = 'Card';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 4,
  },
  card: {
    marginTop: 50,
    marginLeft:20,
    marginRight:20,
    backgroundColor:"#eff0f1",
    height:280,
    borderWidth:1,
    borderColor:'lightgrey'
  },

  cardCover:{
    height:200,
    width:"100%",
    
  },
  cardTitle:{
    fontSize:20,
    display:'flex',
    height:80,
    width:"100%",
  },

  container2: {
    flex: 1,
    justifyContent: "center",
  },
  animatedHeaderContainer: {
    position: 'absolute',
    top: (Platform.OS == 'ios') ? 20 : 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  
});
