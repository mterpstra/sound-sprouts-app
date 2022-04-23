import React, { Component, useState, useEffect } from "react";
import { View, StyleSheet, Text, Pressable, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../values/colors.js';
import { useFonts } from 'expo-font';

let width = Dimensions.get('window').width;
const FONTSIZE=(width > 500) ? 80 : 35;

const HomeButton = (props) => {

   let [fontsLoaded] = useFonts({
      'Patrick-Hand': require('../../assets/fonts/PatrickHand-Regular.ttf'),
   });

   if (!fontsLoaded) {
      return <View/>;
   }

   return (
      <Pressable 
         style={styles.pressable}
         onPress={props.onPress}>
         <LinearGradient
            colors={[COLORS.orange, COLORS.red]}
            style={styles.outer}>
            <LinearGradient
               colors={[COLORS.blue_light, COLORS.blue_dark]}
               style={styles.inner}>
               <View style={styles.center}>
                  <Text style={styles.text}>
                     {props.text}
                  </Text>
               </View>
            </LinearGradient>
         </LinearGradient>
      </Pressable>
   );
}

const styles = StyleSheet.create({

   pressable: {
      flex:0.15,
      marginLeft:"auto",
      marginRight:"auto",
      width:"80%",
   },

   outer: {
      flex:1,
      borderRadius:20,
      padding:3,
   },

   inner: {
      flex:1,
      borderRadius:20,
      padding:5,
   },

   center: {
      flex:1,
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
   },

   text: {
      fontSize: (width > 500) ? 80 : 35,
      color:COLORS.red,
      textAlign:"center",
      fontFamily: 'Patrick-Hand',
      flexWrap: 'wrap',
   },
});

export default HomeButton;
