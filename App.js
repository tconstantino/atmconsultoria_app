/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import TelaPrincipal from './src/components/tela-principal';
import TelaCliente from './src/components/tela-cliente';
import TelaContato from './src/components/tela-contato';
import TelaEmpresa from './src/components/tela-empresa';
import TelaServicos from './src/components/tela-servicos';

// const StackNavigator = createStackNavigator();

const App: () => React$Node = () => {
  return (
    // <TelaPrincipal></TelaPrincipal>
    // <TelaCliente></TelaCliente>
    // <TelaContato></TelaContato>
    // <TelaEmpresa></TelaEmpresa>
    <TelaServicos></TelaServicos>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
