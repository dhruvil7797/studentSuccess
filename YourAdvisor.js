import React, { Component } from 'react';
import { Text, View, Image, Button, Linking} from 'react-native';
import {Avatar, Accessory} from 'react-native-elements';
import styles from './style';
import image from './assets/kya.jpg';
import advisorImage from './assets/alan.jpg'

const mailSubject = 'Mobile Solution Development!!!';
class YourAdvisor extends Component {
    render(){
    return (
              <View style={styles.pageContainer}>
                  <Image style={styles.image} source={image} />
                  <Text style={styles.paraText}>
                        <Text style={styles.initial}>S</Text> 
                        <Text> 
                            tudent Success Advisors are here to offer academic advice, help navigate college services and find the supports and tools that will work best for you. They can help book appointments with wellness and learning services, and can assist you in working through college processes or problems you might be experiencing. Asking for support is easy – just use the online self-referral form and an advisor will reach out to you and set-up a time to talk
                        </Text>
                  </Text>
                  <Avatar rounded source={advisorImage} size='xlarge' />
                  <Button style={styles.appButtonContainer} onPress={() => Linking.openURL('mailto:Alan Roper <aroper@conestogac.on.ca>?subject=${mailSubject}') }
                    title="Reach Your Advisor" />
              </View>  
    );
    }
  }
  
  export default YourAdvisor;