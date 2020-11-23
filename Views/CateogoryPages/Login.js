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
import { Server_Url } from "../../Globaldata";

const AnimatedInput = Animated.createAnimatedComponent(TextInput);


export default class Login extends Component {
  //loggedIn function implementation using herokuapp
  loggedInUser() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userName: this.state.username,
        pwd: this.state.password
      })
    };
    var callingURL = '/loginStudent'
    fetch(Server_Url + callingURL, requestOptions)
      .then((response) => response.json())
      .then(async (json) => {
        if (json['success'] === false) {
          this.setState({ errorMessage: "Invalid Login Credentials" });
        }
        else {
          try {
            this.setState({ errorMessage: "" });
            await AsyncStorage.setItem(
              'isLoggedIn',
              '1'
            );
            var userId = "" + json['studentId'];
            await AsyncStorage.setItem(
              'studentId',
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
<<<<<<< HEAD
    myState: 0,
    username: "",
    password:"",
=======
    username: "dshah3186@conestogac.on.ca",
    password: "",
>>>>>>> d4ac629c11b8584678588e488a3be7250286b0b8
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
                      errorMessage: "",
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
                      errorMessage: "",
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