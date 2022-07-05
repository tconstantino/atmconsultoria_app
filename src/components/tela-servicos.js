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

import DetalheServicoImg from '../imgs/detalhe_servico.png';
const corFundo = '#19d1c8';
 
class TelaServicos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={{backgroundColor: 'white', flex: 1}}>
            <StatusBar backgroundColor={corFundo} barStyle='dark-content'></StatusBar>
            <BarraNavegacao voltar cor={corFundo} navigation={this.props.navigation}></BarraNavegacao>
            <View style={styles.topo}>
                <Image source={DetalheServicoImg}></Image>
                <Text style={styles.titulo}>Nossos Serviços</Text>
            </View>
            <View style={styles.detalheServicos}>
                <Text style={styles.textoServicos}>- Consultoria</Text>
                <Text style={styles.textoServicos}>- Processos</Text>
                <Text style={styles.textoServicos}>- Acompanhamento de Projetos</Text>
                <Text style={styles.textoServicos}>- Recursos Humanos</Text>
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
    detalheServicos: {
        margin: 20,
    },
    textoServicos: {
        textAlign: 'justify',
        fontSize: 17,
        fontWeight: 'bold',
        margin: 10,
    },
});
 
 export default TelaServicos;
 