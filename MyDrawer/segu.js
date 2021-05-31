
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'; //importamos react
import { StyleSheet, Text, View, Modal, Image, Button, Alert, TouchableOpacity, Dimensions, Platform, ScrollView, FlatList, SectionList, RefreshControl, SafeAreaView } from 'react-native'; //imoprtamos reac native
import 'react-native-gesture-handler';
//import arma from './assets/gun-png.png';
//solo puede haber un export default
import * as ImagePicker from 'expo-image-picker'; //importo todo el elemnt
import Constants from 'expo-constants';
import * as Sharing from 'expo-sharing'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createAppContainer} from "react-navigation" ;
import { Dropdown } from 'semantic-ui-react';
//import {createStackNavigator} from "react-navigation-stack";
//import { NavigationContainer, createStackNavigator } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation';
//import * as React from 'react';
//import {Segu} from './';
import * as SecureStore from 'expo-secure-store';


const KEY_ON_STORAGE = "KEY_ON_STORAGE";

function HomeScreen(props){

  React.useEffect(()=>{ //---------------------------------------aca compruebo si se guarda el token en las demas pestañas-------------
    SecureStore.getItemAsync(KEY_ON_STORAGE).then(result=>{
      if(!result) //si resultado no existe
        console.log("usario no logeado en la pestaña de perfil");
      else console.log("usuario logeado en la pestaña de perfil", result);
    })
  }, []);


    return(
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView} contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}} >

        <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}} >
          <Image
          source={{uri:'https://static.wikia.nocookie.net/backyardigans/images/2/21/Pablo-0.png/revision/latest?cb=20201030184330&path-prefix=es'}}
          style={styles.imagendepablo}
            />

            <TouchableOpacity style={styles.bottonpa} 
                onPress={()=> props.navigation.navigate('Views')}  >
                    <Text style={{color:'white'}} >Probando las Views</Text>
            </TouchableOpacity>

            <Text style={styles.text}>
            Que ganas de romper las pelotas, siempre rompiendo las pelotas,
             no hay un momento que no rompan las pelotas, viven rompiendo las pelotas, 
             viven para romper las pelotas, es lo único que les sale hacer, romper las pelotas
             Que ganas de romper las pelotas, siempre rompiendo las pelotas,
             no hay un momento que no rompan las pelotas, viven rompiendo las pelotas, 
             viven para romper las pelotas, es lo único que les sale hacer, romper las pelotas
          </Text>
        </View>
            
        
       

        </ScrollView>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 42,
    textAlign: 'center'
  },

  imagendepablo:{
    justifyContent:'center', 
    alignItems: 'center',
    height: 60,
    width: 43

  },

  bottonpa: {
      
    backgroundColor: 'green', 
    padding: 8, 
    marginTop: 10, 
    borderRadius:100 
           
  },
});


export default HomeScreen;

/*
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      
    },
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 10, 
      
      
    },
    text: {
      fontSize: 80,
      position: 'absolute',
      top:100,
    //right: 30,
      justifyContent:'center', 
      alignItems: 'center',
      color:'white',
      textAlign: 'center'

    },
    imagendepablo:{
        position: 'absolute',
        top:30,
        right: 30,
        height: 60,
        width: 43
  
      },
  });
*/