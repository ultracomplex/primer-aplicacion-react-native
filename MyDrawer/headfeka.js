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


function Feka (props){

    return(
        <View style={{justifyContent:'center',  alignItems: 'center'}}>
            <TouchableOpacity style={styles.botondeatras}/*aca tengo q poner la posicoin de la imagen*/
            onPress={()=> props.navigation.navigate('Input')}> 
                <Image style={styles.flecha} source={{uri: 'https://i.pinimg.com/originals/d7/9e/ec/d79eec66e370f8f9787e821cb7752f6a.png'}} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.botondehome}/*aca tengo q poner la posicoin de la imagen*/
            onPress={()=> props.navigation.navigate('home')}> 
                <Image style={{height:80, width:80,}} source={{uri: 'https://topa.com.ar/web2019/wp-content/uploads/2019/12/TOPA-03.png'}} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.botondeesta} /*aca tengo q poner la posicoin de la imagen*/
            onPress={()=> props.navigation.navigate('estados')}> 
                <Image style={{height:80, width:80,}} source={{uri: 'http://2.bp.blogspot.com/_pQN7jbxZTok/SdNJwScrrAI/AAAAAAAAAAM/QkIwtpwKZjc/s280/imagenes-dibujos-animados-bob-esponja-p.jpg'}} />
            </TouchableOpacity>

            

        </View>
    )
}

const styles = StyleSheet.create({

    flecha:{
        height:35,
        width:60,
        
    },
    botondeatras:{
        position:'absolute',
        top: 40,
        left: 20

    },
    botondehome:{
        justifyContent:'center', 
        alignItems: 'center',       
        position:'absolute',
        top: 20,        
        
    },

    botondeesta:{
        justifyContent:'center', 
        alignItems: 'center',
        position:'absolute',
        top: 200,          
                
        
    }

})

export default Feka;