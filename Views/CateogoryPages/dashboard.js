import * as React from 'react';
import { Alert, ScrollView, StyleSheet, Animated } from 'react-native';
import {
  Paragraph,
  Card,
  useTheme,
} from 'react-native-paper';

const dashboard = () => {
  const {
    colors: { background },
  } = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: background }]}
      contentContainerStyle={styles.content}
    >
        
      <Card
        style={styles.card}
        onPress={() => {
          Alert.alert('Know Your Advidor');
        }}
      >
        <Card.Cover source={require('../../assets/kya.jpg')} />
        <Card.Title title="Know Your Advisor" />
        <Card.Content>
          <Paragraph>
          </Paragraph>
        </Card.Content>
      </Card>

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
    </ScrollView>
  );
};

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

export default dashboard;