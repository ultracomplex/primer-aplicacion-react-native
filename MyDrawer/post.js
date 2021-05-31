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

function postear (employee_name, employee_salary, employee_age) {
    fetch(
        "http://dummy.restapiexample.com/api/v1/create",
        {
          method: "POST",
          dataType: 'json',
          headers: {
            Accept: "application/json,", // It can be used to overcome cors errors
            "Content-Type": "application/json",
          },
          body: {
            employee_name: employee_name,
            employee_salary: employee_salary,
            employee_age: employee_age

          }
        }
      )
      console.log(employee_age)
}

export default function Post (props){
    const [employee_name, setNombre] = useState("");
    const [employee_salary, setSalario] = useState("");
    const [employee_age, setEdad] = useState("");

    return(
        <View style={styles.container}>
            <TextInput style={styles.inputstyle}
                placeholder='Nombre'
                onChangeText={(value)=> setNombre(value)}
                value={employee_name}
                id="employee_name"
            />

            <TextInput style={styles.inputstyle}
                placeholder='Salario'
                onChangeText={(value)=> setSalario(value)}
                value={employee_salary}
                id="employee_salary"
            />

<           TextInput style={styles.inputstyle}
                placeholder='Edad'
                onChangeText={(value)=> setEdad(value)}
                value={employee_age}
                id="employee_age"
            />

            <TouchableOpacity onPress={()=> postear(employee_name, employee_salary, employee_age)} style={styles.boton}>
                <Text>
                    Enviar
                </Text>
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


    