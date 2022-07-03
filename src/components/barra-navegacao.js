/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
 import {
   StyleSheet,
   Text,
   View,
   Platform,
 } from 'react-native';
 
class BarraNavegacao extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.barraTitulo}>
        <Text style={styles.textoTitulo}>ATM Consultoria</Text>
      </View>
    );
  };
}
 
 
const styles = StyleSheet.create({
  barraTitulo: {
    backgroundColor: '#CCC',
    paddingTop: Platform.OS === 'ios' ? 65 : 10,
    height: Platform.OS === 'ios' ? 130 : 60,
  },
  textoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    flex: 1,
    textAlign: 'center',
  }
});
 
 export default BarraNavegacao;
 