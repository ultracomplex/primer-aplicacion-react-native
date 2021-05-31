
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'; //importamos react
import { StyleSheet, Text, View, Modal, Image, Button, Alert, TouchableOpacity, Dimensions, Platform, ScrollView, FlatList, SectionList, RefreshControl } from 'react-native'; //imoprtamos reac native
import 'react-native-gesture-handler';
import arma from './assets/gun-png.png';
//solo puede haber un export default
import * as ImagePicker from 'expo-image-picker'; //importo todo el elemnt
import Constants from 'expo-constants';
import * as Sharing from 'expo-sharing'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createAppContainer} from "react-navigation" ;
//import {createStackNavigator} from "react-navigation-stack";
//import { NavigationContainer, createStackNavigator } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation';
//import * as React from 'react';
import { Dropdown } from 'semantic-ui-react';

import Ceraelortotontoketa from './MyDrawer/index.js';
import HomeScreen from './MyDrawer/segu.js';
import Vistas from './MyDrawer/vistas.js';
import crearInput from './MyDrawer/inputs.js';
import Feka from './MyDrawer/headfeka.js';
import Esta from './MyDrawer/estados.js';
import Down from './MyDrawer/downdrop.js';
import Perso from './MyDrawer/personajes.js';
import Peli from './MyDrawer/peliculas.js';
import Movie from './MyDrawer/laPelicula.js';
import Post from './MyDrawer/post.js';
import Ejercicios from './MyDrawer/toke.js'







const Stack = createStackNavigator();



function MyDrawer(){
    return(       //el orden si importa, dwe quien va primero
        <NavigationContainer>
            <Stack.Navigator>
            
                <Stack.Screen 
                  name="home" 
                  component= {Ceraelortotontoketa} 
                  options={{headerShown: false}}  /> 

                <Stack.Screen 
                  name='perfil' 
                  component= {HomeScreen}
                  options={()=>({
                    title:'perfil',
                    headerStyle:{
                      backgroundColor: 'blue'
                    },
                    headerTintColor: 'yellow', 
                    headerTitleStyle:{
                      fontWeight: 'bold',                                           
                    }
                  })

                  }/>

                <Stack.Screen 
                  name='Views' 
                  component= {Vistas}
                  options={{
                    headerRight: ()=>(
                      <TouchableOpacity style={{backgroundColor: 'aquamarine', padding: 8, margin: 10, borderRadius:100}}
                        onPress={()=> alert('que audis de virgo momo')} >
                          <Text>Penerigati</Text>
                      </TouchableOpacity>
                    )
                  }}
                  />

                <Stack.Screen 
                  name='Input' 
                  component= {crearInput}
                  options={({ navigation })=>({
                    headerTitleAlign: ()=>( //para q este en el medio                      
                        <Text >.</Text>                      
                    ),
                    headerTintColor: 'dimgray', 
                    headerTitleStyle:{
                      fontWeight: 'bold',
                      fontSize: 20                                           
                    },
                    headerStyle:{
                      backgroundColor: 'mistyrose'
                    },

                    headerRight: () => <Button onPress={() => navigation.navigate('home')} title="<" color="#FF3636" />              
                  })}
                  />
                
                <Stack.Screen 
                  name="head" 
                  component= {Feka} 
                  options={{headerShown: false}}  /> 
                
                <Stack.Screen 
                  name="estados" 
                  component= {Esta} 
                  options={{headerShown: false}}  /> 
                
                <Stack.Screen 
                  name="down" 
                  component= {Down} 
                  options={{headerShown: false}}  /> 

                <Stack.Screen 
                  name="perso" 
                  component= {Perso} 
                  options={{headerShown: false}}  /> 
                
                <Stack.Screen 
                  name="peli" 
                  component= {Peli} 
                  options={{headerShown: false}}  /> 
                
                <Stack.Screen 
                  name="movie" 
                  component= {Movie} 
                  options={{headerShown: false}}  /> 

                
                <Stack.Screen 
                  name="posts" 
                  component= {Post} 
                  options={{headerShown: false}}  /> 

                <Stack.Screen 
                  name="ejer" 
                  component= {Ejercicios} 
                  options={{headerShown: false}}  /> 

                
                

            </Stack.Navigator>

        </NavigationContainer>
    );
}





export default function App() { //asi tengo q llamr a las funciones para q funcionens
  return ( //Viwe es como un DIV, va con mayuscula
    

    <MyDrawer/>
       
      
      
  );
}
