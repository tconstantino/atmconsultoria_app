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
   View,
   Image,
   StatusBar,
   Text,
 } from 'react-native';
 import BarraNavegacao from './barra-navegacao';

import DetalheClienteImg from '../imgs/detalhe_cliente.png';
import Cliente1Img from '../imgs/cliente1.png';
import Cliente2Img from '../imgs/cliente2.png';
 
class TelaCliente extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View>
            <StatusBar backgroundColor='#CCC' barStyle='dark-content'></StatusBar>
            <BarraNavegacao></BarraNavegacao>
            <Image source={DetalheClienteImg}></Image>
            <Text>Nossos Clientes</Text>
            <Image source={Cliente1Img}></Image>
            <Text>Cliente 1, do ramo A de negócios, desde 1980</Text>
            <Image source={Cliente2Img}></Image>
            <Text>Cliente 2, do ramo B de negócios, desde 1995</Text>
        </View>
    );
  };
}
 
const styles = StyleSheet.create({
    agrupadorImagens: {
        alignItems: 'center',
        paddingTop: 30,
    },
    menuBotoes: {
        flexDirection: 'row',
    },
    logo: {
        marginBottom: 30,
    },
    imagem: {
        margin: 18,
    },
});
 
 export default TelaCliente;
 