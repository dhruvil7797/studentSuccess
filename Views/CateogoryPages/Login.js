import React, { Component } from "react";
import {
  Animated,
  KeyboardAvoidingView,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  AsyncStorage,
  StatusBar,
} from "react-native";
import AnimatedForm from "react-native-animated-form";
import image from "../../assets/CSS.jpg";

const AnimatedInput = Animated.createAnimatedComponent(TextInput);

async function loggedInUser (props){
  // this.setState({myState:1});
  try {
      await AsyncStorage.setItem(
          'isLoggedIn',
          '1'
      );
      props.navigation.navigate('dashboard');

  }
  catch(error) {
      console.log(error);
  }
}


export default class Login extends Component {
  async componentDidMount() {  
    const value = await AsyncStorage.getItem('isLoggedIn');
    if(value === '1'){
        this.props.navigation.navigate('dashboard');  
    }       
  }

  state = {  
    myState: 0 
  }  
  

  render() {

    
    return (
      <View style={styles.container}>
      <StatusBar barStyle="dark-content"/>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <AnimatedForm style={styles.animatedForm} delay={250} distance={5}>
              
              <AnimatedInput
                style={styles.animatedInput}
                placeholder="User name"
              />
              <AnimatedInput
                secureTextEntry={true}
                style={styles.animatedInput}
                placeholder="Password"
              />
              {
                this.state.myState === 1 ?
                <TouchableOpacity>
                  <Text style={[styles.appButtonText,{color:'red'}]}>Invalid details! Please try again</Text>
                </TouchableOpacity>
                : null
              }
              
              <TouchableOpacity
                onPress={()=>{loggedInUser(this.props); }}
                style={styles.appButtonContainer}
              >
                <Text style={styles.appButtonText}>LOGIN</Text>
              </TouchableOpacity>
            </AnimatedForm>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  image:{
  
    width:'90%',
    height: 150,
    resizeMode: 'stretch',
    marginBottom: 30,
  },
  animatedForm:{
    width:  '80%',
    
  },
  animatedInput: {
    width:  '100%',
    height: 50,
    fontSize: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ffffff",
    color: "#333",
    backgroundColor: "#f8f8f8",
    
  },
  appButtonContainer: {
    elevation: 16,
    backgroundColor: "#4facf6",
    alignSelf:'center',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 24,
    width:200,
    marginTop:20
  },
  appButtonText:{
    color:"white",
    textAlign:"center",
    fontSize:16
  },
})

