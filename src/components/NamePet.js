import React from "react"; 
import { Text, View, Image, ImageBackground, TextInput, StyleSheet, Platform, Dimensions } from 'react-native';
import SpeechBubble from "./SpeechBubble"
import { TopWithDede, Top, Bottom } from "./Layout"
import { COLORS } from '../values/colors.js';
import MyBox from "./Box"
import { useFonts } from 'expo-font';

const petshop = require('../../images/background.png');
const dog = require('../../images/dog.png');
const cat = require('../../images/cat.png');
const rabbit = require('../../images/rabbit.png');
const turtle = require('../../images/turtle.png');
const parrot = require('../../images/parrot.png');
const hamster = require('../../images/hamster.png');

const BLUR_RADIUS = Platform.OS == 'ios' ? 20 : 4;

const width = Dimensions.get('window').width;
const FONT_SIZE=(width > 500) ? 60 : 30;


const NamePet = (props) => {

   let [fontsLoaded] = useFonts({
      'Patrick-Hand': require('../../assets/fonts/PatrickHand-Regular.ttf'),
   });

   if (!fontsLoaded) {
      return <View/>;
   }

   const message = [
      "Name your " + props.route.params.name
   ];

   return (
      <ImageBackground 
         source={petshop} 
         resizeMode="cover" 
         blurRadius={BLUR_RADIUS}
         style={{
            flex:1,
         }}>

         <View style={{
            flex:1,
            backgroundColor: "rgba(0, 0, 0, .4)",
         }}>

            <TopWithDede message={message} />

            <Bottom>
               <Image style={styles.img} source={props.route.params.source}/>

               <TextInput
                  style={styles.input}
                  placeholder={props.route.params.name}

               />
            </Bottom>

         </View>
      </ImageBackground>
   );
}

const styles = StyleSheet.create({
   input: {
      backgroundColor:"white",
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius:15,
   },
   img: {
      flex:1,
      width: undefined,
      height: undefined,
      resizeMode:'contain',
      margin:20,
   },
});

export default NamePet;
