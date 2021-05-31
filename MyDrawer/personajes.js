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
//import { Dropdown } from 'semantic-ui-react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';

//import 'bootstrap/scss/bootstrap.scss'
import {ElegiPersonaje} from '../components/characters.js';

function Perso(props){

    const [personaje, setPersonaje] = useState('');
    const [isModalVisible, setisModalVisible] = useState(false);
    const changeModalVisibility = (bool) => {
        setisModalVisible(bool)
      }
    
      const confData = (option) =>{
        setPersonaje(option)
      }

    return(
        <View style={styles.container}>
          <  TouchableOpacity style={styles.boton}
                onPress={()=> props.navigation.navigate('peli')}
            >                
                <Text style={{fontSize:20}}>Pelicula</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botno}
                onPress={()=> props.navigation.navigate('posts')}
                >                
                <Text style={{fontSize:20}}>Posts</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={()=> changeModalVisibility(true)}
                style={styles.botno} 
          >
            <Text style={styles.texto}>Elegi un personaje</Text>
          </TouchableOpacity>

            <Modal
              transparent={true}
              animationType='fade'
              visible={isModalVisible}
              nRequestClose={()=> changeModalVisibility(false)}
                >
              <ElegiPersonaje
                changeModalVisibility={changeModalVisibility}
                setData={confData}
                />
           </Modal>

           <Image 
                    style={{width:200, height:200}}
                    source={{uri: personaje}} />

            

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
  
    botno:{
      backgroundColor: 'orange', 
      padding: 8, 
      margin: 10, 
      borderRadius:10
    },
    texto:{
      fontSize:20
  
    },
      boton:{
          backgroundColor: 'orange',
          padding: 8,
          margin: 40,
          borderRadius: 100
        }
  
  
  })


export default Perso;