import React, { Component } from 'react';
import { Animated,KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Button, TouchableWithoutFeedback, Keyboard, Linking} from 'react-native';
import styles from '../../style';
const mailSubject = 'Mobile Solution Development!!!'
class Counselling extends Component {
    render(){
    return (
      
              <View style={styles.container}>

                  <Text style={styles.titleText}>ML Tech support</Text>
                  <Text style={styles.paraText}>
                        <Text style={styles.initial}>S</Text>
                        <Text> 
                            tudent Success Advisors are here to offer academic advice, help navigate college services and find the supports and tools that will work best for you. They can help book appointments with wellness and learning services, and can assist you in working through college processes or problems you might be experiencing. Asking for support is easy – just use the online self-referral form and an advisor will reach out to you and set-up a time to talk
                        </Text>
                  </Text>
                  <Button style={styles.appButtonContainer} onPress={() => Linking.openURL('mailto:studentsuccess@conestogac.on.ca?subject={mailSubject}') }
                    title="Reach Your Advisor" />
              </View>  
    );
    }
  }
  
  export default Counselling;