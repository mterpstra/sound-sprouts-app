import React from "react";
import PropTypes from 'prop-types';
import { Button, StyleSheet, ImageBackground } from 'react-native';
import { Layout, Top, Bottom } from "./Layout"
import SpeechBubble from "./SpeechBubble"
import { COLORS } from "../values/colors"

//const dede = require('../../images/Dede.png')
const dede = require('../../images/Dede.gif')

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
         <>
            <Top>
               <SpeechBubble message={message} onComplete={speechComplete} />
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
