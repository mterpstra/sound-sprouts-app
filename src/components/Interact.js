import React, { useState, useContext } from "react";
import { View, StyleSheet, Platform, ImageBackground, Image } from "react-native";
import { useHeaderHeight } from '@react-navigation/elements';
import { CartContext } from "./CartContext"
import Draggable from "./Draggable"

// Pulled these from the Layout file for now
const petshop = require('../../images/background.png')
const BLUR_RADIUS = Platform.OS == 'ios' ? 20 : 4;

const Interact= () => {
   const cart = useContext(CartContext);
   const headerHeight = useHeaderHeight();

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

         <View style={{
            height:headerHeight,
            backgroundColor:"rgba(0,0,0,0.5)",
            width:"100%",
            top:0,
            position:"absolute",
         }}/>

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
            <Draggable origin={spotA} dest={dropA}>
               <Image source={cart.item1.image} style={styles.img} />
            </Draggable>
            : null
         }

         {Object.keys(spotB).length && Object.keys(dropB).length ? 
            <Draggable origin={spotB} dest={dropB}>
               <Image source={cart.item2.image} style={styles.img} />
            </Draggable>
            : null
         }

         {Object.keys(spotC).length && Object.keys(dropC).length ? 
            <Draggable origin={spotC} dest={dropC}>
               <Image source={cart.item3.image} style={styles.img} />
            </Draggable>
            : null
         }

      </ImageBackground>
   );
}

const SPOT_TOP = "15%";
const DROP_TOP = "85%";

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
      top:SPOT_TOP,
      left:"10%",
   },
   spotB: {
      top:SPOT_TOP,
      left:"40%",
   },
   spotC: {
      top:SPOT_TOP,
      left:"70%",
   },
   dropA: {
      top:DROP_TOP,
      left:"10%",
   },
   dropB: {
      top:DROP_TOP,
      left:"40%",
   },
   dropC: {
      top:DROP_TOP,
      left:"70%",
   },
});

export default Interact;
