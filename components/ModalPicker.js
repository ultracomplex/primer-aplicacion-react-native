import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useLayoutEffect} from 'react'; //importamos react
import { StyleSheet, TextInput, Text, Dimensions, View, Modal, Image, Button, Alert, TouchableOpacity, Platform, ScrollView, FlatList, SectionList, RefreshControl, SafeAreaView } from 'react-native'; //imoprtamos reac native
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


const OPTIONS = ['rojo', 'azul', 'verde', 'negro', 'blanco', 'gris', 'amarillo'];
const WIDHT = Dimensions.get('window').width; 
const HEIGHT = Dimensions.get('window').height;


const ModalPicker = (props) => {

    const onPressItem = (option) => {
        props.changeModalVisibility(false);
        props.setData(option);
      
    }

    const option = OPTIONS.map((item, index)=>{
        return(
            <TouchableOpacity
                key={index}
                style={styles.opto}
                onPress={()=> onPressItem(item)} //cuando lo apreto llamo a esta funcion
            >
                <Text style={styles.texto}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    })
    return(
        <TouchableOpacity
            onPress={() => props.changeModalVisibility(false)}
            style={styles.container}
        >
            <View style={{backgroundColor: 'white', borderRadius:10,  width: WIDHT -30, height: HEIGHT/2}}/*con WIDHT -30 es ara achicar el anchi, y HEIGHT /2 para q sea la mitad de la pamtañña */> 
                <ScrollView>
                    {option}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent:'center', 
      alignItems: 'center',
  
    },
    
    opto:{
        alignItems: 'flex-start'
    },

    texto:{
        margin:20,
        fontSize:20,
        fontWeight: 'bold'

    }
  
  })

export {ModalPicker};