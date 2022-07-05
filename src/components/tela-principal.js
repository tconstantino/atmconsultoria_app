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
   TouchableHighlight,
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
        <View style={{backgroundColor: 'white', flex: 1}}>
            <StatusBar backgroundColor='#CCC' barStyle='dark-content'></StatusBar>
            <BarraNavegacao navigation={this.props.navigation}></BarraNavegacao>
            <View style={styles.agrupadorImagens}>
                <Image style={styles.logo} source={LogoImg}></Image>
                <View style={styles.menuBotoes}>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('TelaCliente')}>
                        <Image style={styles.imagem} source={MenuClienteImg}></Image>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('TelaContato')}>
                        <Image style={styles.imagem} source={MenuContatoImg}></Image>
                    </TouchableHighlight>    
                </View>
                <View style={styles.menuBotoes}>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('TelaEmpresa')}>
                        <Image style={styles.imagem} source={MenuEmpresaImg}></Image>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('TelaServicos')}>
                        <Image style={styles.imagem} source={MenuServicoImg}></Image>
                    </TouchableHighlight>
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
 