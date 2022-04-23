import React from "react"; 
import { View, Image, ImageBackground, StyleSheet, Linking } from 'react-native';
import HomeButton from "./Button"

const logo = require('../../images/logo.png');
const home = require('../../images/home.png')

const Home = (props) => {

   return (
      <ImageBackground 
         source={home} 
         resizeMode="cover" 
         style={styles.home}>

         <Image style={styles.logo_image} source={logo}/>

         <HomeButton
            text="Dede's Pet Shop"
            onPress={() => {
               props.navigation.navigate('HelloFromDede');
            }}/>

         <HomeButton
            text="Visit Our Website"
            onPress={() => {
               Linking.openURL("https://sound-sprouts.com")
            }}/>

      </ImageBackground>
   );
}


const styles = StyleSheet.create({
   home: {
      height: "100%",
      width:"100%",
      flex:1,
      flexDirection:"column",
      justifyContent:"space-evenly",
   },

   logo_image: {
      flex:0.4,
      width: undefined,
      aspectRatio: 1,
      marginLeft:"auto",
      marginRight:"auto",
   },
});

export default Home;
