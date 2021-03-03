import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Plataform,
  TouchableOpacity
} from 'react-native';



export default class NumberButton extends Component {
  render() {
      const {value, handleOnPress} = this.props;
    return (
        <TouchableOpacity style={styles.container} onPress={()=> handleOnPress(value)}>
            <Text style={styles.text}>{value} </Text>

        </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 1,
      backgroundColor: '#a5a5a5',
      justifyContent: 'center',
      alignItems: 'center'

    },
    text: {
        color: '#f3f2da',
        fontSize: 26
    }

  });
