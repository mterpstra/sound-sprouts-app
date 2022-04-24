import React, { Component, useRef } from "react";
import { View, Image, Button, StyleSheet, Pressable, ImageBackground, Animated, Easing } from 'react-native';
import { Layout, Top, Bottom } from "./Layout"
import SpeechBubble from "./SpeechBubble"
import { COLORS } from "../values/colors"

const dede = require('../../images/Dede.png')

function HelloFromDede(props) {

   // speechComplete
   function speechComplete() {
      props.navigation.setOptions({
         headerRight: () => ( 
            <Button 
               title="Next" 
               color={COLORS.blue_dark}
               onPress={() => { 
                  props.navigation.navigate('ChoosePet');
               }}
            />
         )
      });
   }

   const message = [
      "Hi there, I’m Dede and welcome to my pet shop.",
      "Let me help you find your new friend."
   ];

   return (
      <Layout>
         <Top>
            <SpeechBubble message={message} 
               onComplete = {speechComplete} />
         </Top>

         <Bottom>
            <ImageBackground
               source={dede}
               style={styles.full}
               imageStyle={{
                  resizeMode: 'contain',
               }}

            >
            </ImageBackground>
         </Bottom>
      </Layout>
   );
}

const styles = StyleSheet.create({
   full: 
   {
      flex:1,
      width: '100%', 
      height: '100%',
      position:"relative",
   },
});

export default HelloFromDede;
