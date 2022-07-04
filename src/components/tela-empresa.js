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
   Linking
 } from 'react-native';
 import BarraNavegacao from './barra-navegacao';

import DetalheEmpresaImg from '../imgs/detalhe_empresa.png';
 
class TelaEmpresa extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View>
            <StatusBar backgroundColor='#ec7148' barStyle='dark-content'></StatusBar>
            <BarraNavegacao voltar cor='#ec7148'></BarraNavegacao>
            <View style={styles.topo}>
                <Image source={DetalheEmpresaImg}></Image>
                <Text style={styles.titulo}>Empresa</Text>
            </View>
            <View style={styles.detalheEmpresa}>
                <Text style={styles.textoEmpresa}>Atuando no mercado desde a década de 80, fornecendo sempre o melhor atendimento e os melhores serviços para nossos parceiros. Conheça mais nossos <Text 
                    style={{color: 'blue'}}
                    onPress={() => {}}>
                        clientes
                    </Text>.
                </Text>
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
        color: '#ec7148',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    detalheEmpresa: {
        margin: 20,
    },
    textoEmpresa: {
        textAlign: 'justify',
        fontSize: 17,
        fontWeight: 'bold',
        margin: 10,
    },
});
 
 export default TelaEmpresa;
 