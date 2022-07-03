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
import TelaPrincipal from './src/components/tela-principal';
import TelaCliente from './src/components/tela-cliente';

const App: () => React$Node = () => {
  return (
    // <TelaPrincipal></TelaPrincipal>
    <TelaCliente></TelaCliente>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
