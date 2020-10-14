import * as React from 'react';
import { Alert, ScrollView, StyleSheet } from 'react-native';
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
          Alert.alert('The Chameleon is Pressed');
        }}
      >
        <Card.Cover source={require('./assets/kya.jpg')} />
        <Card.Title title="Know Your Advisor" />
        <Card.Content>
          <Paragraph>
            ABCD This is a pressable chameleon. If you press me, I will alert.
          </Paragraph>
        </Card.Content>
      </Card>

      <Card
        style={styles.card}
        onPress={() => {
          Alert.alert('The Chameleon is Pressed');
        }}
      >
        <Card.Cover source={require('./assets/res/CSS.jpg')} />
        <Card.Title title="Pressable Chameleon" />
        <Card.Content>
          <Paragraph>
            ABCD This is a pressable chameleon. If you press me, I will alert.
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