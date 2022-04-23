import React from "react"; 
import { Text, View, Image, ImageBackground, StyleSheet, Platform, Dimensions } from 'react-native';
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
const message = [
   "We have lots of nice pets to choose from here at the pet shop!",
   "Pick one and get started." 
];

const BLUR_RADIUS = Platform.OS == 'ios' ? 20 : 4;

const width = Dimensions.get('window').width;
const FONT_SIZE=(width > 500) ? 60 : 30;


const Pet = (props) => {
   return (
      <View style={styles.box}>
         <MyBox 
            //onPress={() => props.navigation.navigate('NamePet') } 
         >
            <Image source={props.source} style={styles.img} />
         </MyBox>
         <Text style={styles.text}>{props.name}</Text>
      </View>
   );
}

const ChoosePet = (props) => {

   let [fontsLoaded] = useFonts({
      'Patrick-Hand': require('../../assets/fonts/PatrickHand-Regular.ttf'),
   });

   if (!fontsLoaded) {
      return <View/>;
   }


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

               {/* Row 1 */}
               <View style={styles.row}>
                  <View style={styles.col}>
                     <Pet source={dog} name="Dog"/> 
                  </View>
                  <View style={styles.col}>
                     <Pet source={cat} name="Cat"/> 
                  </View>
               </View>

               {/* Row 2 */}
               <View style={styles.row}>
                  <View style={styles.col}>
                     <Pet source={rabbit} name="Rabbit"/> 
                  </View>
                  <View style={styles.col}>
                     <Pet source={turtle} name="Turtle"/> 
                  </View>
               </View>

               {/* Row 3 */}
               <View style={styles.row}>
                  <View style={styles.col}>
                     <Pet source={parrot} name="Parrot"/> 
                  </View>
                  <View style={styles.col}>
                     <Pet source={hamster} name="Hamster"/> 
                  </View>
               </View>

            </Bottom>
         </View>
      </ImageBackground>
   );
}

const styles = StyleSheet.create({
   row: {
      flex:.33,
      flexDirection:"row",
   },
   col: {
      flex:.50,
      flexDirection:"row",
   },
   box: {
      flex:1,
      flexDirection:"column",
      alignItems: "stretch",
      margin:20,
   },
   img: {
      flex:1,
      width: undefined,
      height: undefined,
      resizeMode:'contain',
   },
   text: {
      fontSize: FONT_SIZE,
      lineHeight: FONT_SIZE+5,
      color:COLORS.red,
      textAlign:"center",
      fontFamily: 'Patrick-Hand',
      flexWrap: 'wrap',
   },
});

export default ChoosePet;
