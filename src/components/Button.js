import React, { Component, useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { COLORS } from '../values/colors.js';
import { useFonts } from 'expo-font';
import MyBox from './Box';

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
      <View style={styles.button}>
         <MyBox onPress={props.onPress} radius={20}> 
            <View style={styles.center}>
               <Text style={styles.text}>
                  {props.text}
               </Text>
            </View>
         </MyBox>
      </View>
   );
}

const styles = StyleSheet.create({
   button: {
      flex:0.15,
      marginLeft:"auto",
      marginRight:"auto",
      width:"80%",
   },
   center: {
      flex:1,
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
   },
   text: {
      fontSize: FONTSIZE,
      color:COLORS.red,
      textAlign:"center",
      fontFamily: 'Patrick-Hand',
      flexWrap: 'wrap',
   },
});

export default HomeButton;
