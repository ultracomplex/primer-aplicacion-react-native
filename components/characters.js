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


const OPTIONS = ['https://i2.wp.com/www.bitme.gg/wp-content/uploads/2020/07/Demon-Slayer-celebra-el-cumpleanos-de-Tanjiro-Kamado.jpg?fit=1280%2C720&ssl=1', 
'http://pm1.narvii.com/7230/8962018708369f1a0804a3ef44ed57a221c29c9br1-750-750v2_uhq.jpg',
'https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/5/57/Inosuke_sin_m%C3%A1scara_anime.png/revision/latest?cb=20190908134727&path-prefix=es',
'https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/9/91/Tengen_colored_body.png/revision/latest?cb=20190803194025',
'https://fueradeseries.com/wp-content/uploads/2019/08/1E3DrG0S77WuiXaPYmXMn4Q.jpeg'


];
const WIDHT = Dimensions.get('window').width; 
const HEIGHT = Dimensions.get('window').height;


const ElegiPersonaje = (props) => {
    const onPressItem = (option) => {
        props.changeModalVisibility(false);
        props.setData(option);
        console.log(option)
       
    }

    const option = OPTIONS.map((item, index)=>{
        return(
            <TouchableOpacity
                key={index}
                style={styles.opto}
                onPress={()=> onPressItem(item)} //cuando lo apreto llamo a esta funcion
            >
                <Image 
                    style={{width:80, height:80}}
                    source={{uri: item}} />
            </TouchableOpacity>
        )
    })

    return(
        <TouchableOpacity
            onPress={() => props.changeModalVisibility(false)}
            style={styles.container}
        >
            <View style={{backgroundColor: 'white', borderRadius:10,  width: WIDHT -150, height: HEIGHT/2, alignItems: 'center',}}/*con WIDHT -30 es ara achicar el anchi, y HEIGHT /2 para q sea la mitad de la pamtañña */> 
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

export {ElegiPersonaje};