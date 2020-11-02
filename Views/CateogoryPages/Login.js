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


//logged In function
async function loggedInUser (props){
  // this.setState({myState:1});
  try {
      await AsyncStorage.setItem(
          'isLoggedIn',
          '1'
      );
    }
    catch(error){

    }
      props.navigation.navigate('dashboard');
  }

export default class Login extends Component {
  //loggedIn function implementation using herokuapp
  loggedInUser() {
    
    var callingURL = 'https://studentsuccessweb.herokuapp.com/loginUser?fn=' + this.state.username;
    fetch(callingURL)
      .then((response) => response.json())
      .then(async(json) => {
        if (json['success'] === false) {
          this.setState({ errorMessage: "Invalid Login Details! Try Again" });
        }
        else {
          try {
            this.setState({ errorMessage: "" });
            await AsyncStorage.setItem(
              'isLoggedIn',
              '1'
            );
            var userId = ""+json['id'];
            await AsyncStorage.setItem(
              'userId',
              userId
            );                        
            this.props.navigation.navigate('dashboard');
          }
          catch (error) {
            console.log(error);
          }
        }

      });
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event = {}) {
    const name = event.target && event.target.name;
    const value = event.target && event.target.value;
    console.warn(name + " : " + value);
    this.setState({ [name]: value, })
  }

  async componentDidMount() {
    const value = await AsyncStorage.getItem('isLoggedIn');
    if (value === '1') {
      this.props.navigation.navigate('dashboard');
    }
  }

  state = {
    //bydefault user
    myState: 0,
    username: "dshah3186@conestogac.on.ca",
    errorMessage: ""
  }


  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.container}
        >

          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <Image style={styles.image} source={image} />
              {/*using Animated form*/}
              <AnimatedForm style={styles.animatedForm} delay={250} distance={5}>

                <AnimatedInput
                  style={styles.animatedInput}
                  placeholder="Username"
                  name="username"
                  onChangeText={text =>
                    this.setState({
                      errorMessage:"",
                      username: text
                    })
                  }
                  value={this.state.username}
                />
                <AnimatedInput
                  secureTextEntry={true}
                  style={styles.animatedInput}
                  onChangeText={text =>
                    this.setState({
                      errorMessage:"",
                      password: text
                    })
                  }
                  name="password"
                  value={this.state.password}
                  placeholder="Password"
                />

                <TouchableOpacity>
                <Text style={[styles.appButtonText, { color: 'red' }]}>{this.state.errorMessage}</Text>
                </TouchableOpacity>


                <TouchableOpacity
                  onPress={() => {
                    this.loggedInUser();
                  }}
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
//stylesheet of login 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  image: {

    width: '90%',
    height: 150,
    resizeMode: 'stretch',
    marginBottom: 30,
  },
  animatedForm: {
    width: '80%',

  },
  animatedInput: {
    width: '100%',
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
    alignSelf: 'center',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 24,
    width: 200,
    marginTop: 20
  },
  appButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16
  },
})