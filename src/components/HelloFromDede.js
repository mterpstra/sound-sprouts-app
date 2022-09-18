import React from "react";
import PropTypes from 'prop-types';
import { Button, StyleSheet, ImageBackground } from 'react-native';
import { Layout, Top, Bottom } from "./Layout"
import SpeechBubble from "./SpeechBubble"
import { COLORS } from "../values/colors"
import Sound from "./Sound"

const dede = require('../../images/Dede.gif');
const audio = require('../../assets/audio/HelloFromDede.mp3');

function HelloFromDede(props) {

   const message = [
      "Hi there, I’m Dede and welcome to my pet shop.",
      "Let me help you find your new friend."
   ];

   return (
      <Layout>
         <>
            <Sound {...props} audio={audio} /> 
            <Top>
               <SpeechBubble message={message} />
            </Top>
            <Bottom>
               <ImageBackground source={dede} 
                  style={styles.full} 
                  imageStyle={{resizeMode: 'contain'}}/>
            </Bottom>
         </>
      </Layout>
   );
}

HelloFromDede.propTypes = {
   navigation: PropTypes.object,
};

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
