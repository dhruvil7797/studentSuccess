import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Views/CateogoryPages/Login';
import YourAdvisor from './Views/CateogoryPages/YourAdvisor';
import MyWellness from './Views/CateogoryPages/MyWellness';
import MyLearning from './Views/CateogoryPages/MyLearning';
import MentalHealth from './Views/myWellness/MentalHealth';
import { Header } from 'react-native/Libraries/NewAppScreen';
import MedicalCare from './Views/myWellness/Medical_Care';
import Counselling from './Views/myWellness/Counselling';
import RelatedService from './Views/myWellness/Related_service';
import HelpStudent from './Views/myWellness/Help_Student';
import HealthInsurance from './Views/myWellness/HealthInsurance';
import Contact from './Views/myWellness/Contact';
import MyWellness1 from './Views/CateogoryPages/MyWellness1';
import dashboard from './Views/CateogoryPages/dashboard'
import collapsedTool from './collapsedTool';



const Stack = createStackNavigator(); //variable declaration

class App extends React.Component {
  render() {
    return (
      //Screen navigator
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="MyWellness"
            component={MyWellness}
            options={{
              headerShown: false
            }}

          />
        <Stack.Screen
            name="MyLearning"
            component={MyLearning}
            options={{
              headerShown: false
            }}

          />
        
        
        <Stack.Screen
            name="dashboard"
            component={dashboard}
            options={{
              headerShown: false
            }}
          />

          
          <Stack.Screen
            name="MentalHealth"
            component={MentalHealth}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Medical_Care"
            component={MedicalCare}
            options={{
              headerShown: false
            }}

          />
          <Stack.Screen
            name="Counselling"
            component={Counselling}
            options={{
              headerShown: false
            }}

          />
          <Stack.Screen
            name="HealthInsurance"
            component={HealthInsurance}
            options={{
              headerShown: false
            }}

          />
          <Stack.Screen
            name="Related_service"
            component={RelatedService}
            options={{
              headerShown: false
            }}

          />
          <Stack.Screen
            name="Help_Student"
            component={HelpStudent}
            options={{
              headerShown: false
            }}

          />
          <Stack.Screen
            name="Contact"
            component={Contact}
            options={{
              headerShown: false
            }}

          />
          <Stack.Screen
            name="MyWellness1"
            component={MyWellness1}
            options={{
              headerShown: false
            }}

          />

          <Stack.Screen
            name="collapsedTool"
            component={collapsedTool}
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
            name="YourAdvisor"
            component={YourAdvisor}
            options={{
              headerShown: false
            }}

          />




        </Stack.Navigator>
      </NavigationContainer>
    );
  }

}
export default App;