import React, { Component } from 'react';
import { Text, View, Image, Button, Linking, Platform} from 'react-native';
import {Avatar, Accessory} from 'react-native-elements';
import CollapsibleToolbar from 'react-native-collapsible-toolbar';
import styles from '../../style';
//import * from '../../assets';
import advisorImage from '../../assets/alan.jpg';
import image from '../../assets/kya.jpg';

const mailSubject = 'Mobile Solution Development!!!';
const mailUrl = 'mailto:Alan Roper <aroper@conestogac.on.ca>?subject=' + mailSubject
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
                  <Text>{"\n"}</Text>
                  <Avatar rounded source={advisorImage} size='xlarge' />
                  
                  <Text style={{fontSize:30}}>Alan Roper</Text>
                  <Text style={{fontSize:15}}>Student Success Advisor</Text>
                  <Text>{"\n"}</Text>
                  <Button style={styles.appButtonContainer} onPress={() => Linking.openURL(mailUrl) }
                    title="Reach Your Advisor" />
              </View>  
    );
    }
  }
  
  export default YourAdvisor;