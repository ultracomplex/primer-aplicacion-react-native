import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useLayoutEffect} from 'react'; //importamos react
import { StyleSheet, TextInput, Text, View, Modal, Image, Button, Alert, Dimensions, TouchableOpacity, Platform, ScrollView, FlatList, SectionList, RefreshControl, SafeAreaView } from 'react-native'; //imoprtamos reac native
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


function Esta(props){ //los estados son reactivos, es decir q se actualizan todo el tiepo

    const [auto, setAuto] = useState(false) //aca la variable AUTO es una BOOLEANO, es decir solo puede tomar TRUE y FALSE

    const [cuenta, setCeunta] = useState(0) //"cuenta" toma el valor de 0 al principio, por asi lo declare en "useState", osea "cuenta" es una variable
                                            //al apretar el boton a la variable "cuenta" se le suma 1  
    
    const prendidoApagado= () =>{
        auto ? setAuto(false) : setAuto(true); //"?" si estru, ":" si es false, son condicionales, si el BOOLEAN es TRUE, ahora sea FALSE, y si es FALSE ahora sea TRUE 
        
    }

    return(                                 
        <View style={styles.viewstyle}>
            <TouchableOpacity onPress={()=> props.navigation.navigate('down')} style={styles.botonpa}> 
                <Text style={{fontSize:20, color:'white'}}>Ir a DownDrop Menu</Text>
            </TouchableOpacity>


            <Text style={{fontSize:20, marginTop:30}}>Apreaste {cuenta} veces</Text>
            <TouchableOpacity onPress={()=> setCeunta(cuenta + 1)} style={styles.botonpa}> 
                <Text style={{fontSize:20, color:'white'}}>Apretame</Text>
            </TouchableOpacity>
            


            <TouchableOpacity onPress={prendidoApagado}>
                <Image source={{uri:'http://assets.stickpng.com/images/580b585b2edbce24c47b2850.png'}} style={{width:40, height:40, marginTop:20}} />
            </TouchableOpacity>
            <Text style={{marginTop:5, fontSize:15}} >El auto esta {auto ? "prendido" : "apagado" /*"?" si estru, ":" si es false*/} </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    viewstyle:{
    flex:1, 
      justifyContent:'center', 
      alignItems: 'center',
      backgroundColor: 'beige' 
    },

    botonpa:{
      backgroundColor: 'darkslategrey', 
      padding: 8, 
      marginTop: 10, 
      borderRadius:100,
      marginTop: 20,
    }
})

export default Esta;    