import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useLayoutEffect} from 'react'; //importamos react
import { StyleSheet, TextInput, Text, View, Modal, Image, Button, Alert, ActivityIndicator ,Dimensions, TouchableOpacity, Platform, ScrollView, FlatList, SectionList, RefreshControl, SafeAreaView } from 'react-native'; //imoprtamos reac native
import 'react-native-gesture-handler';
//import arma from './assets/gun-png.png';
//solo puede haber un export default
import * as ImagePicker from 'expo-image-picker'; //importo todo el elemnt
import Constants from 'expo-constants';
import * as Sharing from 'expo-sharing'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createAppContainer} from "react-navigation" ;
//import { Dropdown } from 'semantic-ui-react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';


export default function Movie ({navigation, route}){
    const { title, releaseYear } = route.params;
    return(
        <View style={styles.container} >
            <Text style={{fontSize:30, fontWeight: "bold", margin:10}} > {(title)} </Text>
            <Text style={{fontSize:20}}>Fecha de estreno: {(releaseYear)}</Text>
        </View>
    )
}


const styles = StyleSheet.create({   

    container:{
        flex: 1,   
        backgroundColor: 'beige',
        justifyContent:'center', 
        alignItems: 'center',

      },
    

    boton:{
        backgroundColor: 'orange',
        padding: 8,
        margin: 10,
        borderRadius: 10
      },
      pelii:{
          backgroundColor: 'lightskyblue',
          padding:10,
          margin:20,
          borderRadius: 10

      },
      flatList: { margin:20   },
    

})