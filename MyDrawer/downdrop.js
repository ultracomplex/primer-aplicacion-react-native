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
import {ModalPicker} from '../components/ModalPicker.js'


function Down(props){
    
  const [chooseData, setchooseData] = useState('elegí un color');
  const [isModalVisible, setisModalVisible] = useState(false);
  const changeModalVisibility = (bool) => {
    setisModalVisible(bool)
  }

  const confData = (option) =>{
    setchooseData(option)
  }
      
    return(
        
        <SafeAreaView style={styles.container}>
          
          <TouchableOpacity 
          onPress={()=> changeModalVisibility(true)}
          style={styles.botno} 
          >
            <Text style={styles.texto}>{chooseData}</Text>
          </TouchableOpacity>

        <Modal
          transparent={true}
          animationType='fade'
          visible={isModalVisible}
          nRequestClose={()=> changeModalVisibility(false)}

        >
          <ModalPicker
            changeModalVisibility={changeModalVisibility}
            setData={confData}
          />
        </Modal>




        <TouchableOpacity style={{backgroundColor: 'grey', padding:8, borderRadius:10, position:'absolute', top: 50}} onPress={()=> props.navigation.navigate('perso')}
            >
           <Text style={{fontSize:20}}>Otro</Text> 
        </TouchableOpacity>


        </SafeAreaView>
        
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

  }

})


export default Down;
