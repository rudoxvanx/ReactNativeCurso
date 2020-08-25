/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Viewer from './components/view/index';

/*
  //CONTENEDOR DEL TIPO CLASE
    --Consultas a API, bases de datos,transacciones

  class App extends Component{
    render() {
      return (
        <>
          <View style={styles.container}>
              <View style={styles.containerRed}></View>
              <View style={styles.containerGreen}></View>
              <View style={styles.containerBlack}></View>
          </View>
        </>
      );
    }
  }
*/

/*COMPONENTE DEL TIPO FUNCTION
  Usos más generales footer,headers elementos más pequeños
*/
const App = () => {
  return (
    <>
      <Viewer></Viewer>
      <View style={styles.container}>
        <View style={styles.containerRed}></View>
        <View style={styles.containerGreen}></View>
        <View style={styles.containerBlack}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'blue',
      justifyContent:'center',
      alignItems:'center'
    },
    containerRed:{
      flex:1,
      width:50,
      height:50,
      backgroundColor:'red'
    },
    containerGreen:{
      flex:1,
      width:50,
      height:50,
      backgroundColor:'green'
    },
    containerBlack:{
      flex:1,
      width:50,
      height:50,
      backgroundColor:'black'
    }

});

export default App;
