import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Login from './Login';
import YourAdvisor from './YourAdvisor';

const Stack = createStackNavigator(); //variable declaration

class App extends React.Component {
    render() {
      return (
        //Screen navigator
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen
              name="YourAdvisor"
              component={YourAdvisor}
              options={{
                headerShown: false
              }}
              
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false
              }}
              
            />
            <Stack.Screen
              name="Home"
              component={Home}
            />
           
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

  }
  export default App;