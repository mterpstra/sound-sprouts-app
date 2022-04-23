import React, { Component } from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import SpeechBubble from "./SpeechBubble"

const petshop = require('../../images/background.png')
const head = require('../../images/head.png')

class Layout extends Component {
   render() {
      return(
         <View style={styles.container}>
            <ImageBackground 
               source={petshop} 
               resizeMode="cover" 
               style={styles.image}>
               {this.props.children}
            </ImageBackground>
         </View>
      )
   }
}

class Top extends Component {
   render() {
      return(
         <View style={styles.top}>
            {this.props.children}
         </View>
      )
   }
}

class TopWithDede extends Component {
   render() {
      return(
         <Top>

            <View style={{
               //backgroundColor:"green",
               flexDirection:"row",
               height:"100%",
            }}>

               <View style={styles.left}>
                  <Image style={styles.head} source={head}/>
               </View>

               <View style={styles.right}>
                  <SpeechBubble
                     message={this.props.message}
                     arrow="left"
                  />
               </View>

            </View>
         </Top>
      )
   }
}

class Bottom extends Component {
   render() {
      return(
         <View style={styles.bottom}>
            {this.props.children}
         </View>
      )
   }
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

export {Layout, Bottom, Top, TopWithDede}
