import React, { Component, useState, useEffect } from "react";
import { Text, View, Pressable, Image, ImageBackground, Button, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SpeechBubble from "./SpeechBubble"
import { TopWithDede, Layout, Top, Bottom } from "./Layout"
import { COLORS } from '../values/colors.js';
import MyBox from "./Box"

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

const ChoosePet = (props) => {

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
                     <View style={styles.box}>
                        <MyBox>
                           <Image source={dog} style={styles.img} />
                        </MyBox>
                     </View>
                  </View>
                  <View style={styles.col}>
                     <View style={styles.box}>
                        <MyBox>
                           <Image source={cat} style={styles.img} />
                        </MyBox>
                     </View>
                  </View>
               </View>

               {/* Row 2 */}
               <View style={styles.row}>
                  <View style={styles.col}>
                     <View style={styles.box}>
                        <MyBox>
                           <Image source={rabbit} style={styles.img} />
                        </MyBox>
                     </View>
                  </View>
                  <View style={styles.col}>
                     <View style={styles.box}>
                        <MyBox>
                           <Image source={turtle} style={styles.img} />
                        </MyBox>
                     </View>
                  </View>
               </View>

               {/* Row 3 */}
               <View style={styles.row}>
                  <View style={styles.col}>
                     <View style={styles.box}>
                        <MyBox>
                           <Image source={parrot} style={styles.img} />
                        </MyBox>
                     </View>
                  </View>
                  <View style={styles.col}>
                     <View style={styles.box}>
                        <MyBox>
                           <Image source={hamster} style={styles.img} />
                        </MyBox>
                     </View>
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
      flexDirection:"row",
      alignItems: "stretch",
      margin:20,
   },
   img: {
      flex:1,
      width: undefined,
      height: undefined,
      resizeMode:'contain',
   },
});

export default ChoosePet;
