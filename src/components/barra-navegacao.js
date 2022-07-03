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
   Image,
 } from 'react-native';
 import BotaoVoltarImg from '../imgs/btn_voltar.png';
 
class BarraNavegacao extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.barraTitulo}>
        <Text style={styles.textoTitulo}>ATM Consultoria</Text>
        <Image style={styles.botaoVoltar} source={BotaoVoltarImg}></Image>
      </View>
    );
  };
}
 
 
const styles = StyleSheet.create({
  barraTitulo: {
    backgroundColor: '#CCC',
    paddingTop: Platform.OS === 'ios' ? 55 : 10,
    height: Platform.OS === 'ios' ? 150 : 110,
  },
  textoTitulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    flex: 1,
    textAlign: 'center',
  },
  botaoVoltar: {
    margin: 15,
  },
});
 
 export default BarraNavegacao;
 