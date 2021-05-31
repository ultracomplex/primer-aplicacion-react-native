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


import Header from '../shared/header.js'; //importante los 2 "PUNTOS"


function crearInput (props){
    const [name, setName] = useState(false);
    const [age, setAge] = useState(false);
    const [cont1, setCont1] = useState(false);
    const [cont2, setCont2] = useState(false);

    /*const [view, setView] = useState(false);
    useLayoutEffect(()=>{
            props.navigation.setOptions({
                title:'perfil',
                headerStyle:{
                    backgroundColor: 'blue'
                },
                headerTintColor: 'yellow', 
                headerTitleStyle:{
                    fontWeight: 'bold',                                           
                    },
                headerShown: true
            })
    },[props])*/

    const num = 100;
    
    const esMenor = async () => {
        if (age < 18) {
                    <Text> edad: {age}</Text>
                    alert('sos menor, tenes'+ age)
                
                    
        } else {
                alert('sos mayor, tenes '+ age)
                
            
        }
    }

    const Hello = (props) => {
        if(!props.name) return null //hace q si no hay nombre para el Hello, no lo renderize
        return <Text>Hello, {props.name}</Text>
    }
    /*constructor(props){

    }*/

    const siSonIguales = (props) => {
        if(cont1 == cont2){
            alert('ya estas registrado')
        }
        else{
            alert('las contraseñas son distintas')
        }
    }

    
 
    return(
        <View style={styles.container} >

<           TouchableOpacity style={styles.boton}
                onPress={()=> props.navigation.navigate('head')}
            >
                
                <Text style={{fontSize:20}}>ir al feka</Text>
            </TouchableOpacity>

           <Text>nombre: {name}</Text>
            <TextInput style={styles.inputstyle}
                placeholder='Escribi tu nombre'
                onChangeText={(val)=> setName(val)}
            />

            <Text>
                edad: {age}
           </Text>
           
            <TextInput style={styles.inputstyle}
                keyboardType= 'numeric'
                placeholder='Escribi tu edad'
                onChangeText={(val)=> setAge(val)}
            />
            
            <Hello name='sar'/>
            <Hello />

            <TouchableOpacity style={styles.boton}
            onPress={esMenor} >
                <Text style={{fontSize:20}}>Es menor?</Text>
            </TouchableOpacity>

            <TextInput style={styles.inputstyle}
                placeholder='Contraseña1'
                onChangeText={(val)=> setCont1(val)}
            />
            <TextInput style={styles.inputstyle}
                placeholder='Contraseña2'
                onChangeText={(val)=> setCont2(val)}
            />

            <TouchableOpacity style={styles.boton}
                onPress={siSonIguales}
            >
                
                <Text>Registrarse</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.boton}
                onPress={()=> props.navigation.navigate('home')}
            >
                
                <Text>ir al inicio</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputstyle:{
        borderWidth:1,
        borderColor:'red',
        margin:10,
        padding:5, //distancia entre el texto de adentro cn el borde 
        width:200 //largo       
    },

    container:{
        flex:1, 
        justifyContent:'center', 
        alignItems: 'center',
        backgroundColor: 'mistyrose'
          
    },

    boton:{
        backgroundColor: 'orange',
        padding: 8,
        marginTop: 10,
        borderRadius: 100
      }
})

export default crearInput;