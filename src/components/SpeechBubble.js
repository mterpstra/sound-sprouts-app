import React, { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import { Dimensions } from "react-native";
import { useFonts } from 'expo-font';
import { View, Text, StyleSheet, } from 'react-native';

const COLOR="#faf9d1";

const SpeechBubble = (props) => {

   let index = useRef(0);
   let line = useRef(0);
   let speed = useRef(100);
   let speech = useRef([]);

   const [msg, setMsg] = useState("");

   if (Array.isArray(props.message)) {
      speech = props.message;
   } else {
      speech[0] = props.message;
   }

   useEffect(() => {
      var timer1, timer2;
      timer1 = setTimeout(() => {

         if (index.current < speech[line.current].length) {
            setMsg(msg + speech[line.current][index.current]);
            index.current++;
            speed.current=50;
            return;
         }

         if (line.current < speech.length-1) {
            line.current++;
            index.current = 0;
            timer2 = setTimeout(() => {
               setMsg("");
            }, 1000);
            return;
         }

         if (props.onComplete) {
            props.onComplete();
         }
         index.current=0;
         speech=[];
         line.current = 0;

      }, speed.current);

      return (() => {
         clearTimeout(timer1);
         clearTimeout(timer2);
      });
   });


   let [fontsLoaded] = useFonts({
      'Patrick-Hand': require('../../assets/fonts/PatrickHand-Regular.ttf'),
   });

   if (!fontsLoaded) {
      return <View/>;
   }


   return (
      <View style={styles.bubbleContainer}>
         <View style={styles.textContainer}>
            <Text style={styles.text}>{msg}</Text>
            {props.arrow && props.arrow == "left" 
               ? <View style={styles.arrowLeft}/>
               : <View style={styles.arrowBottom}/>
            }
         </View>
      </View>
   );
}

SpeechBubble.propTypes = {
   message: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
   ]),
   arrow:PropTypes.string,
   onComplete:PropTypes.func,
};

const styles = StyleSheet.create({

   text: {
      fontSize: Dimensions.get('window').width > 1000 ? 40 : 20,
      fontFamily: 'Patrick-Hand',
   },

   bubbleContainer: {
      flex:1,
      flexDirection:"column-reverse",
   },

   textContainer: {
      padding:10,
      marginBottom:20,
      backgroundColor:COLOR,
      borderColor:"#bab480",
      borderWidth:3,
      flex:0.9,
      marginRight:"auto",
      marginLeft:"auto",
      width:"90%",
      borderRadius: 20,
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      textAlign:"center",
   },

   arrowLeft: {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',

      borderTopWidth: 10,
      borderBottomWidth: 10,

      borderRightWidth: 20,
      borderLeftWidth: 0,

      borderTopColor: 'transparent',
      borderRightColor: COLOR,
      borderBottomColor: 'transparent',
      borderLeftColor: 'transparent',

      position:'absolute',
      bottom:"25%",
      left:-18,
   },

   arrowBottom: {
      width: 0,
      height: 0,

      backgroundColor: 'transparent',
      borderStyle: 'solid',

      borderTopWidth: 20,
      borderBottomWidth: 0,

      borderRightWidth: 10,
      borderLeftWidth: 10,

      borderTopColor: COLOR,
      borderRightColor: 'transparent',
      borderBottomColor: 'transparent',
      borderLeftColor: 'transparent',

      position:'absolute',
      bottom:-20,
      left:"50%",
   },

});


export default SpeechBubble;
