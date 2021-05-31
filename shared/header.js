import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'; //importamos react
import { StyleSheet, TextInput, Text, View, Image, Button, Alert, TouchableOpacity, Platform, ScrollView, FlatList, SectionList, RefreshControl, SafeAreaView } from 'react-native'; //imoprtamos reac native
import 'react-native-gesture-handler';
//import arma from './assets/gun-png.png';
//solo puede haber un export default
import * as ImagePicker from 'expo-image-picker'; //importo todo el elemnt
import Constants from 'expo-constants';
import * as Sharing from 'expo-sharing'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createAppContainer} from "react-navigation" ;

export default function Header(){
    retrurn(
        <View style={StyleSheet.header} >
            <View>
                <Text style={StyleSheet.headerText}>Zona de Juegos</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText:{
        fontWeight:'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing:1,
    }
})