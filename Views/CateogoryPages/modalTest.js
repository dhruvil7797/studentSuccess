import React, {Component} from 'react';
import {Button, Text, View, TextInput} from 'react-native';
import Modal from 'react-native-modal';
 
export default class ModalTester extends Component {
  state = {
    isModalVisible: false,
  };
 
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
 
  render() {
    return (
      <View style={{flex: 1}}>
        <Button title="Show modal" onPress={this.toggleModal} />
        <Modal isVisible={this.state.isModalVisible} animationIn= 'bounce' >
          <View style={{flex: 1, marginTop: 100, color: 'white'}}>
            <Text>Hello!</Text>
            <TextInput type="text" placeholder="Enter Your Name"></TextInput>
            <Button title="Hide modal" onPress={this.toggleModal} />
          </View>
        </Modal>
      </View>
    );
  }
}