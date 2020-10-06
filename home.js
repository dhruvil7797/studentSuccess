import React from 'react';
import { Text, View, Button } from 'react-native';

class Home extends React.Component {
  render() {
    return (
      <View>
        <Text>You have (undefined) friends.</Text>
        <Button
          title="Add some friends"
          onPress={() =>
            this.props.navigation.navigate('Friends')
          }
        />
      </View>
    );
  }
}


export default Home;