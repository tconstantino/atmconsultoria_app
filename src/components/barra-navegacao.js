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
   TouchableHighlight,
 } from 'react-native';
 import BotaoVoltarImg from '../imgs/btn_voltar.png';
 
class BarraNavegacao extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.barraTitulo, {backgroundColor: this.props.cor || '#ccc'}]}>
        <Text style={styles.textoTitulo}>ATM Consultoria</Text>
        { this.props.voltar ?
          <TouchableHighlight 
            onPress={() => this.props.navigation.navigate('TelaPrincipal')}
            underlayColor={this.props.cor}
            activeOpacity={0.5}>
            <Image style={styles.botaoVoltar} source={BotaoVoltarImg}></Image>
          </TouchableHighlight>
          : null }
      </View>
    );
  };
}
 
 
const styles = StyleSheet.create({
  barraTitulo: {
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
 