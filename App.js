import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Views/CateogoryPages/Login";
import YourAdvisor from "./Views/CateogoryPages/YourAdvisor";
import MyWellness from "./Views/CateogoryPages/MyWellness";
import MyLearning from "./Views/CateogoryPages/MyLearning";
import MyCareer from "./Views/CateogoryPages/MyCareer";
import MentalHealth from "./Views/myWellness/MentalHealth";
import { Header } from "react-native/Libraries/NewAppScreen";
import MedicalCare from "./Views/myWellness/Medical_Care";
import Counselling from "./Views/myWellness/Counselling";
import RelatedService from "./Views/myWellness/Related_service";
import HelpStudent from "./Views/myWellness/Help_Student";
import HealthInsurance from "./Views/myWellness/HealthInsurance";
import Contact from "./Views/myWellness/Contact";
import dashboard from "./Views/CateogoryPages/dashboard";
import collapsedTool from "./collapsedTool";
import AcademicTesting from "./Views/myLearning/AcademicTesting";
import ServiceAndSupoort from "./Views/myLearning/ServiceAndSupport";
import Tutoring from "./Views/myLearning/Tutoring";
import Transition from "./Views/myLearning/Transition";
import mlRelatedService from "./Views/myLearning/RelatedService";
import mlContact from "./Views/myLearning/Contact";
import CareerAdvice from "./Views/myCareer/CareerAdvice";
import JobSearch from "./Views/myCareer/JobSearch";
import CareerEvents from "./Views/myCareer/CareerEvents";
import mcContact from "./Views/myCareer/Contact";
import MathHelp from "./Views/myLearning/MathHelp";
import WritingHelp from "./Views/myLearning/WritingHelp";
import Research from "./Views/myLearning/Research";
import AcademicIntigrity from "./Views/myLearning/AcademicIntigrityHelp";
import LearnSkill from "./Views/myLearning/LearnSkillHelp";
import AccessibleLearning from "./Views/myLearning/AccessibleLearning";
import LearningAndAssitive from "./Views/myLearning/LearningAndAssitive";
import TechSupport from "./Views/myLearning/TechSupport";
import TestingPage from "./Views/TestPage";

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
              headerShown: false,
            }}
          />
        <Stack.Screen
            name="MyLearning"
            component={MyLearning}
            options={{
              headerShown: false,
            }}
          />

        <Stack.Screen
            name="MyWellness"
            component={MyWellness}
            options={{
              headerShown: false,
            }}
          />
           
          <Stack.Screen
            name="mlContact"
            component={mlContact}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="MentalHealth"
            component={MentalHealth}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          

          <Stack.Screen
            name="dashboard"
            component={dashboard}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="YourAdvisor"
            component={YourAdvisor}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Testing"
            component={TestingPage}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="MyCareer"
            component={MyCareer}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Medical_Care"
            component={MedicalCare}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Counselling"
            component={Counselling}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="HealthInsurance"
            component={HealthInsurance}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Related_service"
            component={RelatedService}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Help_Student"
            component={HelpStudent}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Contact"
            component={Contact}
            options={{
              headerShown: false,
            }}
          />
          
          <Stack.Screen
            name="collapsedTool"
            component={collapsedTool}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="AcademicTesting"
            component={AcademicTesting}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="ServiceAndSupport"
            component={ServiceAndSupoort}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Tutoring"
            component={Tutoring}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Transition"
            component={Transition}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="mlRelatedService"
            component={mlRelatedService}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="CareerAdvice"
            component={CareerAdvice}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="JobSearch"
            component={JobSearch}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="CareerEvents"
            component={CareerEvents}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="mcContact"
            component={mcContact}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="MathHelp"
            component={MathHelp}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="WritingHelp"
            component={WritingHelp}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Research"
            component={Research}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="AcademicIntegrity"
            component={AcademicIntigrity}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="LearnSkill"
            component={LearnSkill}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="AccessibleLearning"
            component={AccessibleLearning}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="LearningAndAssitive"
            component={LearningAndAssitive}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="TechSupport"
            component={TechSupport}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
