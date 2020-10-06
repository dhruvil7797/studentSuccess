import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Login from './Login';

const Stack = createStackNavigator();

class App extends React.Component {
    render() {
      return (
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
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