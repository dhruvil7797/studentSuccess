import React, { Component } from 'react';
import { Text, View, Image, Button, Linking, Animated, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { Avatar, Accessory } from 'react-native-elements';
import CollapsibleToolbar from 'react-native-collapsible-toolbar';
//import * from '../../assets';
import advisorImage from '../../assets/alan.jpg';
import image from '../../assets/kyaTitle.jpg';

const mailSubject = 'Mobile Solution Development!!!';
const mailUrl = 'mailto:Alan Roper <aroper@conestogac.on.ca>?subject=' + mailSubject
class YourAdvisor extends Component {
  constructor() {
    super();
    this.scrollYAnimatedValue = new Animated.Value(0);
  }
  render() {
    const HEADER_MAX_HEIGHT = 200;
    const HEADER_MIN_HEIGHT = 80;
    const headerHeight = this.scrollYAnimatedValue.interpolate(
      {
        inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp'
      });
    return (
      <View style={[styles.MainContent, { backgroundColor: '#fff4ce' }]} >
        <StatusBar barStyle="dark-content" />
        <ScrollView
          scrollEventThrottle={16}
          contentContainerStyle={[styles.content, { paddingTop: HEADER_MAX_HEIGHT }]}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.scrollYAnimatedValue } } }]
          )}
          style={{ backgroundColor: "white", marginTop: 0 }}
        >
          <View style={{ marginLeft:20, marginRight:20, paddingTop:30, paddingBottom:150,display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
              <Text style={[styles.paraText,{fontSize:30, marginBottom:20,fontWeight:"bold", textDecorationLine:"underline", textDecorationColor:"black"}]}>
              <Text style={[styles.initial,{fontSize:40,fontWeight:"bold"}]}>K</Text>
              <Text>
                now your advisor
                        </Text>
            </Text>
            
            <Text style={styles.paraText}>
              <Text style={styles.initial}>S</Text>
              <Text>
                tudent Success Advisors are here to offer academic advice, help navigate college services and find the supports and tools that will work best for you. They can help book appointments with wellness and learning services, and can assist you in working through college processes or problems you might be experiencing. Asking for support is easy – just use the online self-referral form and an advisor will reach out to you and set-up a time to talk
                        </Text>
            </Text>
            <Text>{"\n"}</Text>
            <Avatar rounded source={advisorImage} size='xlarge' />

            <Text style={{ fontSize: 30 }}>Alan Roper</Text>
            <Text style={{ fontSize: 15 }}>Student Success Advisor</Text>
            <Text>{"\n"}</Text>
            <Button style={styles.appButtonContainer} onPress={() => Linking.openURL(mailUrl)}
              title="Reach Your Advisor" />
          </View>
        </ScrollView>
        <Animated.View
          style={[styles.Header, { height: headerHeight }]}>
          <Image source={image} style={[{ width: "100%", height: "100%", resizeMode:'stretch' }]} />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContent: {
    flex: 1,
  },

  Header: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
  },

  paraText1: {
    fontSize: 20,
    paddingTop: 5,
    textAlign: 'center',

  },

  HeaderInsideText: {
    width: "100%",
  },

  TextViewStyle: {
    textAlign: "center",
    color: "#000",
    fontSize: 18,
    margin: 5,
    padding: 7,
  },

  imageprop:
  {
    marginLeft: -30,
    marginRight: -30,
    flex: 1, width: 230, height: 230, resizeMode: 'cover',
    paddingBottom: -20,
    shadowOpacity: 0.05,
    shadowRadius: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10
    }
  },
  container:
  {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 25,
  },
  appButtonContainer: {
    elevation: 16,
    backgroundColor: "#4facf6",
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 24,
    width: 200
  },
  paraText: {
    fontSize: 16,
    //width: '100%',

    textAlign: "justify",
    // paddingHorizontal: 30,
    marginVertical: 1,
    // borderWidth: 1,
    // borderRadius: 3,
    //borderColor: "#ffffff",
    //color: "#333",
    backgroundColor: "#ffffff",
    flex: 1
  },
  initial:
  {
    fontSize: 32,
  },
});

export default YourAdvisor;