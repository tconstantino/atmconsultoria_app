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
import DetalheContatoImg from '../imgs/detalhe_contato.png';
const corFundo = '#61bd8c';

class TelaContato extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={{backgroundColor: 'white', flex: 1}}>
            <StatusBar backgroundColor={corFundo} barStyle='dark-content'></StatusBar>
            <BarraNavegacao voltar cor={corFundo} navigation={this.props.navigation}></BarraNavegacao>
            <View style={styles.topo}>
                <Image source={DetalheContatoImg}></Image>
                <Text style={styles.titulo}>Contato</Text>
            </View>
            <View style={styles.detalheContato}>
                <Text style={styles.textoContato}>Telefone: (21) 3344-5566</Text>
                <Text style={styles.textoContato}>Whatsapp: (21) 99887-7665</Text>
                <Text style={styles.textoContato}>E-mail: contato@atmconsultoria.net.br</Text>
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
        color: corFundo,
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    detalheContato: {
        margin: 20,
    },
    textoContato: {
        fontSize: 17,
        fontWeight: 'bold',
        margin: 10,
    },
});
 
 export default TelaContato;
 