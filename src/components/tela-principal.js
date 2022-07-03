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
 } from 'react-native';
 import BarraNavegacao from './barra-navegacao';

import LogoImg from '../imgs/logo.png';
import MenuContatoImg from '../imgs/menu_contato.png';
import MenuEmpresaImg from '../imgs/menu_empresa.png';
import MenuClienteImg from '../imgs/menu_cliente.png';
import MenuServicoImg from '../imgs/menu_servico.png';
 
class TelaPrincipal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View>
            <StatusBar backgroundColor='#CCC' barStyle='dark-content'></StatusBar>
            <BarraNavegacao></BarraNavegacao>
            <View style={styles.agrupadorImagens}>
                <Image style={styles.logo} source={LogoImg}></Image>
                <View style={styles.menuBotoes}>
                    <Image style={styles.imagem} source={MenuClienteImg}></Image>
                    <Image style={styles.imagem} source={MenuContatoImg}></Image>
                </View>
                <View style={styles.menuBotoes}>
                    <Image style={styles.imagem} source={MenuEmpresaImg}></Image>
                    <Image style={styles.imagem} source={MenuServicoImg}></Image>
                </View>
            </View>
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
 
 export default TelaPrincipal;
 