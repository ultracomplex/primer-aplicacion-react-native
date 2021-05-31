import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'; //importamos react
import { StyleSheet, TextInput , Text, View, Modal, Image, Button, Alert, Dimensions, TouchableOpacity, Platform, ScrollView, FlatList, SectionList, RefreshControl, SafeAreaView } from 'react-native'; //imoprtamos reac native
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


function Vistas (props){
    return(
        <View>
            
            <View style={styles.rojo}>
            <Text style={{textAlign: 'center'}} >
             Que ganas de romper las pelotas, siempre rompiendo las pelotas,
             no hay un momento que no rompan las pelotas</Text>
            </View>


            <View style={styles.azul}>
                <TouchableOpacity style={styles.botonamong} onPress={()=> alert('sos el impostor')} >
                    <Image source={{uri: 'https://cdn.icon-icons.com/icons2/2620/PNG/512/among_us_player_light_blue_icon_156934.png'}} 
                    style={{height:75, width:75}}
                />
                </TouchableOpacity>
            </View>

            <View style={styles.verde}>
            <TouchableOpacity style={styles.boton} onPress={()=> props.navigation.navigate('Input')} >
                <Text style={{fontSize:20}} >Ir a los inputs</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.amarillo}>
            <Text>lol</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    rojo:{
        flex: 1, 
        backgroundColor:'red', 
        position: 'absolute', 
        left:0,
        width:150,
        height:150,
        margin: 10,
        justifyContent:'center', //aca centro la imagen
        alignItems: 'center'

    },
    azul:{
        flex: 1, 
        backgroundColor:'blue', 
        position: 'absolute', 
        right:0,
        width:150,
        height:150,
        margin: 10,       
        justifyContent:'center', 
        alignItems: 'center'

    },
    verde:{
        flex: 1, 
        backgroundColor:'green', 
        position: 'absolute', 
        left:0,
        top: 170,
        width:150,
        height:150,
        marginLeft:10,
        justifyContent:'center',
        alignItems: 'center'

    },

    amarillo:{
        flex: 1, 
        backgroundColor:'yellow', 
        position: 'absolute', 
        right:0,
        top: 170,
        width:150,
        height:150,
        marginRight:10

    },
    boton:{
      backgroundColor: 'orange',
      padding: 8,
      marginTop: 10,
      borderRadius: 100
    },

    botonamong:{                
        marginTop: 10,
        
      }

   
})





export default Vistas;