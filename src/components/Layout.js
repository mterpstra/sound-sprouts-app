import React from "react";
import PropTypes from 'prop-types';
import { View, StyleSheet, Image, ImageBackground, Platform } from 'react-native';
import SpeechBubble from "./SpeechBubble"
import { useHeaderHeight } from '@react-navigation/elements';

const petshop = require('../../images/background.png')
const head = require('../../images/head.gif')

const Layout = (props) => {
   const headerHeight = useHeaderHeight();
   return(
      <View style={styles.container}>
         <ImageBackground 
            source={petshop} 
            resizeMode="cover" 
            style={styles.image}>
            <View style={{
               height:headerHeight,
               backgroundColor:"rgba(0,0,0,0.5)",
            }}/>
            {props.children}
         </ImageBackground>
      </View>
   )
}
Layout.propTypes = {
   children: PropTypes.object,
};

const Top = (props) => {
   return(
      <View style={styles.top}>
         {props.children}
      </View>
   )
}
Top.propTypes = {
   children: PropTypes.object,
};

const BluredLayout = (props) => {

   const headerHeight = useHeaderHeight();
   const BLUR_RADIUS = Platform.OS == 'ios' ? 20 : 4;

   return (
      <ImageBackground 
         source={petshop} 
         resizeMode="cover" 
         blurRadius={BLUR_RADIUS}
         style={{
            flex:1,
         }}>

         <View style={{
            height:headerHeight,
            backgroundColor:"rgba(0,0,0,0.5)",
         }}/>

         <View style={{
            flex:1,
            backgroundColor: "rgba(0, 0, 0, .4)",
         }}>

            <TopWithDede message={props.message} />
            <Bottom>
               {props.children}
            </Bottom>
         </View>
      </ImageBackground>
   );
}
BluredLayout.propTypes = {
   children: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
   ]),
   message: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
   ]),
};

const TopWithDede = (props) => {
   return(
      <Top>
         <View style={{
            flexDirection:"row",
            height:"100%",
         }}>

            <View style={styles.left}>
               <Image style={styles.head} source={head}/>
            </View>

            <View style={styles.right}>
               <SpeechBubble
                  message={props.message}
                  arrow="left"
               />
            </View>

         </View>
      </Top>
   )
}

TopWithDede.propTypes = {
   children: PropTypes.object,
   message: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
   ]),
}

const Bottom = (props) =>{
   return(
      <View style={styles.bottom}>
         {props.children}
      </View>
   )
}
Bottom .propTypes = {
   children: PropTypes.object,
}

const styles = StyleSheet.create({
   left: {
      //backgroundColor:"red",
   },
   right: {
      //backgroundColor:"violet",
      flex:1,
   },
   container: {
      flex:1,
      height: "100%",
      width:"100%",
      backgroundColor:"black",
   },
   image: {
      flex: 1,
   },
   top: {
      flex:0.15,
      //backgroundColor:"purple",
   },
   topWithDede: {
      flex:0.15,
      backgroundColor:"blue",
      flexDirection:"row",
      justifyContent:"flex-start",
   },
   bottom: {
      flex:0.85,
      //backgroundColor:"yellow",
   },
   head: {
      width:undefined,
      height:"100%",
      aspectRatio: 1,
   }
});

export {BluredLayout, Layout, Bottom, Top, TopWithDede}
