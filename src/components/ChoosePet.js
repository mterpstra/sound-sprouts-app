import React from "react"; 
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { BluredLayout } from "./Layout"
import MyBox from "./Box"
import { COLORS } from '../values/colors.js';

const petshop = require('../../images/background.png');
const dog = require('../../images/dog.png');
const cat = require('../../images/cat.png');
const rabbit = require('../../images/rabbit.png');
const turtle = require('../../images/turtle.png');
const parrot = require('../../images/parrot.png');
const hamster = require('../../images/hamster.png');
const message = [
   "We have lots of nice pets to choose from!",
   "Pick one and lets get started." 
];

const width = Dimensions.get('window').width;
const FONT_SIZE=(width > 500) ? 60 : 30;

const Pet = (props) => {
   return (
      <View style={styles.box}>
         <MyBox 
            onPress={() => props.navigation.navigate('NamePet', {
               source:props.source,
               name:props.name,
            })}>

            <View style={{
               flex:1,
               flexDirection:"row",
               justifyContent:"center",
               alignItems:"stretch",
            }}>

               <Image source={props.source} style={styles.img} />
            </View>

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
      <BluredLayout message={message}>
         {/* Row 1 */}
         <View style={styles.row}>
            <View style={styles.col}>
               <Pet source={dog} name="Dog" {...props}/> 
            </View>
            <View style={styles.col}>
               <Pet source={cat} name="Cat" {...props}/> 
            </View>
         </View>

         {/* Row 2 */}
         <View style={styles.row}>
            <View style={styles.col}>
               <Pet source={rabbit} name="Rabbit" {...props}/> 
            </View>
            <View style={styles.col}>
               <Pet source={turtle} name="Turtle" {...props}/> 
            </View>
         </View>

         {/* Row 3 */}
         <View style={styles.row}>
            <View style={styles.col}>
               <Pet source={parrot} name="Parrot" {...props}/> 
            </View>
            <View style={styles.col}>
               <Pet source={hamster} name="Hamster" {...props}/> 
            </View>
         </View>
      </BluredLayout>
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
