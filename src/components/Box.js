import React, { Component, useState, useEffect } from "react";
import { View, StyleSheet, Pressable, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../values/colors.js';
import { useFonts } from 'expo-font';

let width = Dimensions.get('window').width;
const FONTSIZE=(width > 500) ? 80 : 35;

const MyBox = (props) => {

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
                  {props.children}
               </View>
            </LinearGradient>
         </LinearGradient>
      </Pressable>
   );
}

const styles = StyleSheet.create({

   pressable: {
      flex:1,
   },

   outer: {
      flex:1,
      borderRadius:30,
      padding:3,
   },

   inner: {
      flex:1,
      borderRadius:30,
      padding:5,
   },

   center: {
      flex:1,
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"stretch",
   },
});

export default MyBox;
