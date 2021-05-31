import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'; //importamos react
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, Platform, ScrollView, FlatList, SectionList, RefreshControl } from 'react-native'; //imoprtamos reac native
import 'react-native-gesture-handler';
//import arma from './assets/gun-png.png';
//solo puede haber un export default
import * as ImagePicker from 'expo-image-picker'; //importo todo el elemnt
import Constants from 'expo-constants';
import * as Sharing from 'expo-sharing'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native';
import { ScreenContainer } from 'react-native-screens';


