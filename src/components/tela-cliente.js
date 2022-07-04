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
            <StatusBar backgroundColor='#b9c941' barStyle='dark-content'></StatusBar>
            <BarraNavegacao cor='#b9c941'></BarraNavegacao>
            <View style={styles.topo}>
                <Image source={DetalheClienteImg}></Image>
                <Text style={styles.titulo}>Nossos Clientes</Text>
            </View>
            <View style={styles.detalheCliente}>
                <Image source={Cliente1Img}></Image>
                <Text style={styles.textoCliente}>Cliente 1, do ramo A de negócios, desde 1980</Text>
            </View>
            <View style={styles.detalheCliente}>
                <Image source={Cliente2Img}></Image>
                <Text style={styles.textoCliente}>Cliente 2, do ramo B de negócios, desde 1995</Text>    
            </View>
        </View>
    );
  };
}
 
const styles = StyleSheet.create({
    topo: {
        flexDirection: 'row',
        margin: 15,
        alignItems: 'center'
    },
    titulo: {
        color: '#b9c941',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    detalheCliente: {
        margin: 20,
    },
    textoCliente: {
        fontSize: 17,
    },
});
 
 export default TelaCliente;
 