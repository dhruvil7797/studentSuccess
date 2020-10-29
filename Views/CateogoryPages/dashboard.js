import * as React from 'react';
import { Alert, ScrollView, StyleSheet, Animated, AsyncStorage } from 'react-native';
import { Link, NavigationContainer } from '@react-navigation/native';
import {
  Paragraph,
  Card,
  useTheme,
} from 'react-native-paper';

async function loggedOutUser (props){
  try {
      await AsyncStorage.setItem(
          'isLoggedIn',
          '0'
      );
      props.navigation.navigate('Login');

  }
  catch(error) {
      console.log(error);
  }
};


export default class dashboard extends React.Component {
  // const {
  //   colors: { background },
  // } = useTheme();
  render(){
  return (
    <ScrollView
      style={[styles.container, { backgroundColor: "white", marginBottom:50, marginTop:50 }]}
      contentContainerStyle={styles.content}
    >
      <Link style={[styles.card,{width:"100%"}]} to='/YourAdvisor'>                                
      <Card
        style={[styles.card,{width:200, backgroundColor:'red'}]}      
      >
        <Card.Cover source={require('../../assets/kya.jpg')} />
        <Card.Title title="Know Your Advisor" />
        <Card.Content>
          <Paragraph>
          </Paragraph>
        </Card.Content>
      </Card>
      </Link>  

      <Card
        style={styles.card}
        onPress={() => {
          Alert.alert('Book an Appointment');
        }}
      >
        <Card.Cover source={require('../../assets/res/bookappointment.png')} />
        <Card.Title title="Book an Appointment" />
        <Card.Content>
          <Paragraph>

          </Paragraph>
        </Card.Content>
      </Card>

      <Card
        style={styles.card}
        onPress={() => {
          Alert.alert('myWellness');
        }}
      >
        <Card.Cover source={require('../../assets/res/bg1.jpg')} />
        <Card.Title title="myWellness" />
        <Card.Content>
          <Paragraph>

          </Paragraph>
        </Card.Content>
      </Card>

      <Card
        style={styles.card}
        onPress={() => {
          Alert.alert('myLearning');
        }}
      >
        <Card.Cover source={require('../../assets/res/myLearning.png')} />
        <Card.Title title="myLearning" />
        <Card.Content>
          <Paragraph>

          </Paragraph>
        </Card.Content>
      </Card>

      <Card
        style={styles.card}
        onPress={() => {
          Alert.alert('myCareer');
        }}
      >
        <Card.Cover source={require('../../assets/res/myCareer.png')} />
        <Card.Title title="myCareer" />
        <Card.Content>
          <Paragraph>

          </Paragraph>
        </Card.Content>
      </Card>
      <Card
        style={styles.card}
        onPress={()=>{loggedOutUser(this.props)}}
      >
        <Card.Title title="Logout" />
        <Card.Content>
          <Paragraph>

          </Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}};

dashboard.title = 'Card';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 4,
  },
  card: {
    margin: 4,
  },
});
