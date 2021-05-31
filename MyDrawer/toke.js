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

function Ejercicios (props){


    const [texto, setTexto] = useState("");
    const [letra, setLetra] = useState("");
    
    const listaLetra = Array.from(texto);
    
    var canti= 0;
    const cantLetra = () =>{
        console.log("apretandoo");
        for(var i = 0; i < listaLetra.length; i= i+1){
            if(listaLetra[i] == letra){
                canti = canti + 1;
            }
        }
        alert(canti);
    }
    
    

    return(
        <View style={styles.container}>
            <Text>sapeeeee</Text>
            <TextInput style={styles.inputstyle}
                placeholder='pone lo que quieras'
                onChangeText={(val)=> setTexto(val)}
            />
            <TextInput style={styles.inputstyle}
                placeholder='la Letra que quieras'
                onChangeText={(val)=> setLetra(val)}
            />
            
            <TouchableOpacity style={styles.boton}
                onPress={cantLetra}
            >
                
                <Text>Cantidad de {letra} en el texto</Text>
            </TouchableOpacity>
            

        </View>
    )
}

const styles = StyleSheet.create({   

    container:{
        flex: 1,
        justifyContent:'center', 
        alignItems: 'center',
        backgroundColor: 'beige'
      },

      inputstyle:{
        borderWidth:1,
        borderColor:'red',
        margin:10,
        padding:5, //distancia entre el texto de adentro cn el borde 
        width:200 //largo       
    },
    boton:{
        backgroundColor: 'orange',
        padding: 8,
        marginTop: 10,
        borderRadius: 100
      }
    })

export default Ejercicios;