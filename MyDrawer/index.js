

import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'; //importamos react
import { StyleSheet, Text, Modal, View, Image, Button, Alert, TouchableOpacity, Dimensions, Platform, ScrollView, FlatList, SectionList, RefreshControl } from 'react-native'; //imoprtamos reac native
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
//import {createStackNavigator} from "react-navigation-stack";
//import { NavigationContainer, createStackNavigator } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation';
//import * as React from 'react';

//import MyDrawer from './MyDrawer';

import * as SecureStore from 'expo-secure-store';

import { Bang } from '../components/bang.js';


const KEY_ON_STORAGE = "KEY_ON_STORAGE"; //constante global




function Ceraelortotontoketa(props){                     //importante q la fucnion tenga props para compartir--------------------------

  const [bang, setBang] = useState('');
  const [isModalVisible, setisModalVisible] = useState(false);
  const changeModalVisibility = (bool) => {
      setisModalVisible(bool)
    }
  
    const confData = (option) =>{
      setBang(option)
    }

    const [image, setImage] = useState(null); //aca actulizo y guardo la imagen, es un estado-------------------------------------------

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') { //para q se puede ejecutar en sitios web(osea la compu)
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result.uri); //aca es donde tira los datos---------------------------------------------------------------

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  //fin
      
  
  //para compartir la foto              ---------------------------------------------------------
  const openShareDialog = async () => {
     if ( ! (await Sharing.isAvailableAsync())){ //await siempre va con ASYNC
       alert("no podes copartir pa");
       return;
     }
     await Sharing.shareAsync(image);
  }

//-----------------------------token----------------------------------------------------------------------------------------

const token = "5t6gyh0i30of3";

  React.useEffect(()=>{
    SecureStore.getItemAsync(KEY_ON_STORAGE).then(result=>{
      if(!result) //si resultado no existe
        console.log("usario no logeado");
      else console.log("usuario logeado", result);
    })
  }, []);

  const logearse = async () =>{
    await SecureStore.setItemAsync(KEY_ON_STORAGE, token); //para guardar el, osea cuando tenga q hacer un login, en vez del token, pongo el "ID" del usuario
    alert("usuario logeado");
    
  }

  const deslogearse = async ()=>{
    await SecureStore.deleteItemAsync(KEY_ON_STORAGE); //para borrar el token
    alert("usario deslogeado");
    
  }

    return(
      
    <View 
    style={styles.container} //llamo a la constante esilo, punto, el estilo q quiero, que estan a adentro d la constante q cree antes
      >
        
        <Text style={{fontSize:15}} >ahora si funcionas basuraa</Text>

        <Text style= {styles.title} > soy el titulo pa</Text>

        <Image
          source={{uri: 'https://tdj.gg/uploads/attachs/20560_w9RC4W-QqXw-200x200.jpg' }} //dice uri
          style={styles.imagendehomer}
        />


        <TouchableOpacity
          onPress={()=> changeModalVisibility(true)}
        >
        <Image
            source={{uri: 'http://assets.stickpng.com/images/580b585b2edbce24c47b2447.png'}}
            style={styles.imagendearma}
        />
        </TouchableOpacity>

        <Modal
              transparent={true}
              animationType='fade'
              visible={isModalVisible}
              nRequestClose={()=> changeModalVisibility(false)}
                >
              <Bang
                changeModalVisibility={changeModalVisibility}
                setData={confData}
                />
           </Modal>


        <Image
          source={{uri:'https://static.wikia.nocookie.net/backyardigans/images/2/21/Pablo-0.png/revision/latest?cb=20201030184330&path-prefix=es'}}
          style={styles.imagendepablo}

        />

        <Button
          color="red"
          title= "apretame wachin"          
          onPress={()=> props.navigation.navigate('ejer')}
          //style={styles.bottonpa}
        />

        <TouchableOpacity                                                               //ir a optra peestaña---------------------------------
          style={styles.bottonpa}
          onPress={()=> props.navigation.navigate('perfil')
          

          }
          >
              <Text style={styles.bottontext}>Otra pestaña</Text>                                          
        </TouchableOpacity>

        <TouchableOpacity                                                               //ir a optra peestaña---------------------------------
          style={{backgroundColor:'orange', padding:10, marginTop:10, borderRadius:10}}
          onPress={logearse}>
              <Text style={{fontSize:20, color:'black'}}>LogearToken</Text>                                          
        </TouchableOpacity>

        <TouchableOpacity                                                               //ir a optra peestaña---------------------------------
          style={{backgroundColor:'purple', padding:10, marginTop:10, borderRadius:10}}
          onPress={deslogearse}>
              <Text style={{fontSize:20, color:'black'}}>Deslogear Token</Text>                                          
        </TouchableOpacity>


        
        <TouchableOpacity //para agarra una foto de la galeria------------------------------------------         
          style={styles.bottondeimagen}
          onPress={pickImage} //cuando aprete el botton va  a llanar a la funcion                        
          >
              <Text style={styles.bottontext}>Seleccionar foto</Text> 
        </TouchableOpacity> 
        {image && <Image source={{ uri: image }} style={styles.imagendearma} />} 

        
        <TouchableOpacity /*asi puedo cliquear la imagen*/ 
        onPress={pickImage}
        >
        {image && <Image source={{ uri: image }} style={styles.imagendearma} />} 
        </TouchableOpacity>

        { //para q solo aparezca el boton si hay una imagen cargada
          image ? //si adentro de imagen hay algo, q se ejecute esto
          <TouchableOpacity //                                                                         para compartir la foto---------------------------------------------------------      
          style={styles.bottondeimagen}
          onPress={openShareDialog}//es decir q cuando apreto llama a la funcion "openShareDialog"                                 
          >
              <Text style={styles.bottontext}>Compartir foto</Text>                                   
          </TouchableOpacity>

          :   <View/> //sino q se ejecute esto
        }

        
        
        
      
          

      </View>
      
    )
}





//--------------------------------------------------------------------estilos----------------------------------------------------------------

const styles = StyleSheet.create({ //este seria para los estilo, osea como el css
    container:{
      flex:1, 
      justifyContent:'center', 
      alignItems: 'center',
      backgroundColor: 'beige'   
  },

    title: {fontSize:10},

    imagendehomer: {
      height: 100, 
      width: 100, 
      borderRadius:50//para q la imagen sea circular, q el numero sea la mitad del tamño de la imagen
    },

    imagendearma: {
      height:53, 
      width:100,
      //marginTop: 10,
      marginVertical:10 //que tenes un margen de 10px cn los objetos de ARRIBA y de ABAJO
    },

    imagendepablo:{
      position: 'absolute',
      top:30,
      right: 30,
      height: 60,
      width: 43

    },

    bottonpa: {
      
      backgroundColor: 'blue', //es decir q se modifica el botton desde los styles, (estilos)
      padding: 8, //distancia entre el boton y el texto
      marginTop: 10, //q se separa 10px de lo q tiene arriba
      borderRadius:100 //darle borde al botno

      //esto 4 van de la mano simpre
      //position: 'absolute',
      //top:560, la posicion a lo alto y bajo, es decir en el eje Y
      //left:0   la posicion para la izquierda
      //right:0    la posicion para la derecha        
    },

    bottontext:{ //para editar el texto del boton
      color:'yellow',
      fontSize: 15


    },

    bottondeimagen: {
      backgroundColor: 'green',
      padding: 8,
      marginTop: 10,
      borderRadius: 100
    }
})

export default Ceraelortotontoketa;





