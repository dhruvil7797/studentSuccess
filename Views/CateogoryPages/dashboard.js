import * as React from 'react';
import {
  Text, View, Platform, Image,
  Alert, ScrollView, StyleSheet, Animated, AsyncStorage, StatusBar
} from 'react-native';
import { Link, NavigationContainer } from '@react-navigation/native';
import {
  Paragraph,
  Card,
  useTheme,
} from 'react-native-paper';
import { Default_Image_Url, Server_Url } from '../../Globaldata';
import { Icon } from 'react-native-elements';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

//logout function
async function loggedOutUser(props) {
  try {
    await AsyncStorage.setItem(
      'isLoggedIn',
      '0'
    );
    const value = await AsyncStorage.getItem('studentId');
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        studentNumber: value
      })
    };
    var callingURL = '/unregisterDevice';
    fetch(Server_Url + callingURL, requestOptions);
    await AsyncStorage.removeItem('studentId');
    props.navigation.navigate('Login');
  }
  catch (error) {
    console.log(error);
  }
};

async function registerForPushNotificationsAsync(value) {
  
  let token;
  
  const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }
  if (finalStatus !== 'granted') {
    alert('Failed to get push token for push notification!');
    return;
  }
  token = (await Notifications.getExpoPushTokenAsync()).data;

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      studentNumber: value,
      deviceId:token
    })
  };
  var callingURL = '/registerDevice';
  fetch(Server_Url + callingURL, requestOptions);
}

export default class dashboard extends React.Component {
  async componentDidMount() {
    const value = await AsyncStorage.getItem('studentId');
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        studentId: value
      })
    };
    var callingURL = '/getStudent';

    fetch(Server_Url + callingURL, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        if (json['success'] === false) {
          console.warn("Error");
          this.setState({ firstName: "" });
          this.setState({ imageURL: Default_Image_Url });
        }
        else {
          console.warn(json['data']['firstName']);
          this.setState({ firstName: json['data']['firstName'] });
          if (json['data']['imageURL'] === "") {
            this.setState({ imageURL: Default_Image_Url });
          }
          else {
            this.setState({ imageURL: json['data']['imageURL'] });
          }
          var token = registerForPushNotificationsAsync(value);
          

        }
      });
  }
  constructor() {
    super();
    this.scrollYAnimatedValue = new Animated.Value(0);
  }
  state = {
    firstName: '',
    imageURL: Default_Image_Url
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
      //Main View Container
      <View style={[styles.container2, { backgroundColor: '#2471A3' }]} >
        {/*titlebar with animated view*/}
        <StatusBar barStyle="light-content" />
        <ScrollView
          contentContainerStyle={[styles.content, { paddingTop: HEADER_MAX_HEIGHT }]}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.scrollYAnimatedValue } } }]
          )}
          style={[styles.container, { backgroundColor: "white", marginTop: 60 }]}
        >
          {/*Your Advisor card*/}
          <Card
            style={[styles.card, { marginTop: 0 }]}
            onPress={() => { this.props.navigation.navigate('YourAdvisor'); }}
          >
            <Card.Cover style={styles.cardCover} source={require('../../assets/kyaTitle.jpg')} />
            <Card.Title style={styles.cardTitle} title="Know Your Advisor" />
          </Card>

          {/*Book an Appointment card*/}
          
          {/*myWellness card*/}
          <Card
            style={styles.card}
            onPress={() => { this.props.navigation.navigate('MyWellness'); }}
          >
            <Card.Cover style={styles.cardCover} source={require('../../assets/res/myWellness.png')} />
            <Card.Title style={styles.cardTitle} title="myWellness" />
          </Card>
          {/*myLearning card*/}
          <Card
            style={styles.card}
            onPress={() => { this.props.navigation.navigate('MyLearning'); }}
          >
            <Card.Cover style={styles.cardCover} source={require('../../assets/res/myLearning.png')} />
            <Card.Title style={styles.cardTitle} title="myLearning" />
          </Card>
          {/*myCareer card*/}
          <Card
            style={styles.card}
            onPress={() => { this.props.navigation.navigate('MyCareer'); }}
          >
            <Card.Cover style={styles.cardCover} source={require('../../assets/res/myCareer.png')} />
            <Card.Title style={styles.cardTitle} title="myCareer" />
          </Card>
          <Card
            style={styles.card}
            onPress={() => { this.props.navigation.navigate('BookAppointment'); }}
          >
            <Card.Cover style={styles.cardCover} source={require('../../assets/res/bookAppointment.jpg')} />
            <Card.Title style={styles.cardTitle} title="Book an Appointment" />
          </Card>

          {/*Calendar Card*/}
          <Card
            style={styles.card}
            onPress={() => { this.props.navigation.navigate('ViewCalandar'); }}
          >
            <Card.Cover style={styles.cardCover} source={require('../../assets/res/calendar.jpg')} />
            <Card.Title style={styles.cardTitle} title="View Upcoming Events" />
          </Card>
          
          {/*LogOut Card*/}
          <Card
            style={[styles.card, { height: 80, marginBottom: 100 }]}
            onPress={() => { loggedOutUser(this.props) }}
          >
            <Card.Title style={[styles.cardTitle
            ]} title="Logout" />
          </Card>
        </ScrollView>
        {/*Animated header view style*/}
        <Animated.View style={[styles.animatedHeaderContainer, { marginTop: 20, height: headerHeight, backgroundColor: '#2471A3' }]}>
          <Image source={require("../../assets/CSS.jpg")} style={{ width: "80%", resizeMode: "stretch", backgroundColor: 'green', flex: 1, margin: 20 }} />
          <View style={{ height: 100, paddingLeft: 20, width: "100%", display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: "flex-end" }}>
            <Icon name="notifications" size={40} color="white" onPress={() => { this.props.navigation.navigate('Notification', { notificationId: '1' }); }} />
            <View style={{ flexGrow: 1 }}></View>
            <Text style={{ fontSize: 24, color: "white", marginRight: 20 }}>Welcome, {this.state.firstName}</Text>
            <Image source={{ uri: this.state.imageURL, }} style={{ width: 60, height: 60, borderRadius: "50%", marginRight: 20 }} />
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
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#eff0f1",
    height: 280,
    borderWidth: 1,
    borderColor: 'lightgrey'
  },

  cardCover: {
    height: 200,
    width: "100%",

  },
  cardTitle: {
    fontSize: 20,
    display: 'flex',
    height: 80,
    width: "100%",
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
