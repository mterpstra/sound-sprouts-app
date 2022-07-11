import React, { useRef, useState, useContext } from "react";
import { Animated, View, StyleSheet, PanResponder, Text, ImageBackground, Image } from "react-native";
import { useHeaderHeight } from '@react-navigation/elements';
import { CartContext } from "./CartContext"
import Draggable from "./Draggable"

// Pulled these from the Layout file for now
const petshop = require('../../images/background.png')
const BLUR_RADIUS = Platform.OS == 'ios' ? 20 : 4;

const Interact= () => {
   const cart = useContext(CartContext);
   const headerHeight = useHeaderHeight();
   let drops = {};

   const [spotA, setSpotA] = useState({});
   const [spotB, setSpotB] = useState({});
   const [spotC, setSpotC] = useState({});

   const [dropA, setDropA] = useState({});
   const [dropB, setDropB] = useState({});
   const [dropC, setDropC] = useState({});

   return (
      <ImageBackground 
         source={petshop} 
         resizeMode="cover" 
         blurRadius={BLUR_RADIUS}
         style={{
            flex:1,
            alignItems: "center",
            justifyContent: "center",
         }}>

         <View 
            style={{...styles.spotA, ...styles.box}} 
            onLayout={(e) => {setSpotA(e.nativeEvent.layout)}} />

         <View style={{...styles.spotB, ...styles.box}} 
            onLayout={(e) => {setSpotB(e.nativeEvent.layout)}} />

         <View style={{...styles.spotC, ...styles.box}} 
            onLayout={(e) => {setSpotC(e.nativeEvent.layout)}} />

         <View style={{...styles.dropA, ...styles.box}} 
            onLayout={(e) => {setDropA(e.nativeEvent.layout)}} />

         <View style={{...styles.dropB, ...styles.box}} 
            onLayout={(e) => {setDropB(e.nativeEvent.layout)}} />

         <View style={{...styles.dropC, ...styles.box}} 
            onLayout={(e) => {setDropC(e.nativeEvent.layout)}} />

         {Object.keys(spotA).length && Object.keys(dropA).length ? 
            <Draggable drops={drops} styles={styles.spotA} origin={spotA} dest={dropA}>
               <Image source={cart.item1.image} style={styles.img} />
            </Draggable>
            : null
         }

         {Object.keys(spotB).length && Object.keys(dropB).length ? 
            <Draggable drops={drops} styles={styles.spotB} origin={spotB} dest={dropB}>
               <Image source={cart.item2.image} style={styles.img} />
            </Draggable>
            : null
         }

         {Object.keys(spotC).length && Object.keys(dropC).length ? 
            <Draggable drops={drops} styles={styles.spotC} origin={spotC} dest={dropC}>
               <Image source={cart.item3.image} style={styles.img} />
            </Draggable>
            : null
         }

      </ImageBackground>
   );
}

const styles = StyleSheet.create({
   box: {
      borderRadius:15,
      height:"10%",
      width:"20%",
      position:"absolute",
      borderStyle:"dashed",
      borderWidth:3,
   },
   img: {
      flex:1,
      width: undefined,
      height: undefined,
      resizeMode:'contain',
   },
   spotA: {
      top:"10%",
      left:"10%",
   },
   spotB: {
      top:"10%",
      left:"40%",
   },
   spotC: {
      top:"10%",
      left:"70%",
   },
   dropA: {
      top:"80%",
      left:"10%",
   },
   dropB: {
      top:"80%",
      left:"40%",
   },
   dropC: {
      top:"80%",
      left:"70%",
   },
   titleText: {
      fontSize: 14,
      lineHeight: 24,
      fontWeight: "bold",
   }
});

export default Interact;
