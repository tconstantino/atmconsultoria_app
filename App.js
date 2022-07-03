/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import BarraNavegacao from './src/components/barra-navegacao';

const App: () => React$Node = () => {
  return (
    <View>
        <StatusBar backgroundColor='#CCC' barStyle='dark-content'></StatusBar>
      <BarraNavegacao></BarraNavegacao>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
