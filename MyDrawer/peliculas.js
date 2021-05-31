import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useLayoutEffect} from 'react'; //importamos react
import { StyleSheet, TextInput, Text, View, Modal, Image, Button, Alert ,ActivityIndicator ,Dimensions, TouchableOpacity, Platform, ScrollView, FlatList, SectionList, RefreshControl, SafeAreaView } from 'react-native'; //imoprtamos reac native
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


const Peli = (props) => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [title, setTitle] = useState([]);
    const [ano, setAno] = useState([]);

    
    useEffect(()=>{
        fetch ('https://facebook.github.io/react-native/movies.json')
            .then((response)=> response.json())
            .then((json) => {
                setData(json.movies);
                setTitle(json.title);
                setAno(json.releaseYear);

            })
            .catch((error)=> alert(error))
            .finally(setLoading(false))

        } ,[]);

        


    return(
        <View style={styles.container} >

            <Text style={{fontSize:40, marginTop:35, marginLeft:20}}>Peliculas</Text>
            
            {isLoading ? (<ActivityIndicator/> ): (
            <View  >
                
                <FlatList
                    style={styles.flatList}
                    //contentContainerStyle={styles.flatList}            
                    data={data}
                    keyExtractor={({id}, index) => id}
                    renderItem={({item})=>{
                        return(
                        <TouchableOpacity style={styles.boton} onPress={()=> props.navigation.navigate('movie', item)} >
                            <Text style={{fontSize:20, marginLeft:10}}>
                                {item.title}
                                
                            </Text>
                        </TouchableOpacity>
                    );
             } }


            />
            
            </View>

            )}
            
        </View>
    )
    
    
     
    
  
}


const styles = StyleSheet.create({   

    container:{
        flex: 1,   
        backgroundColor: 'beige'
      },
    

    boton:{
        backgroundColor: 'orange',
        padding: 8,
        margin: 10,
        borderRadius: 10
      },
      pelii:{
          backgroundColor: 'lightskyblue',
          padding:10,
          margin:20,
          borderRadius: 10

      },
      flatList: { margin:20   },
    

})


export default Peli;