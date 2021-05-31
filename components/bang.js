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


const OPTIONS = ['https://i.pinimg.com/originals/dd/7a/50/dd7a5090e1770da79dbbc925a3f2786f.png'


];
const WIDHT = Dimensions.get('window').width; 
const HEIGHT = Dimensions.get('window').height;


const Bang = (props) => {
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
                <Image 
                    style={{width:300, height:250}}
                    source={{uri: item}} />
            </TouchableOpacity>
        )
    })

    return(
        <TouchableOpacity
            onPress={() => props.changeModalVisibility(false)}
            style={styles.container}
        >
            <View style={{ borderRadius:10,  alignItems: 'center', justifyContent:'center'}}/*con WIDHT -30 es ara achicar el anchi, y HEIGHT /2 para q sea la mitad de la pamtañña */> 
                
                    {option}
                
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

export {Bang};