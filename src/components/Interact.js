import React, { useRef, useState, useContext } from "react";
import { Animated, View, StyleSheet, PanResponder, Text, ImageBackground, Image } from "react-native";
import { useHeaderHeight } from '@react-navigation/elements';
import { CartContext } from "./CartContext"

// Pulled these from the Layout file for now
const petshop = require('../../images/background.png')
const BLUR_RADIUS = Platform.OS == 'ios' ? 20 : 4;

const Interact= () => {
   const cart = useContext(CartContext);
   const headerHeight = useHeaderHeight();
   const pan = useRef(new Animated.ValueXY()).current;
   let drops = {};

   const [dropped, setDropped] = useState(true);

   const panResponder = useRef(
      PanResponder.create({
         onMoveShouldSetPanResponder: () => true,

         onPanResponderGrant: () => {
            pan.setOffset({
               x: pan.x._value,
               y: pan.y._value
            });
         },

         onPanResponderMove: Animated.event(
            [
               null,
               { dx: pan.x, dy: pan.y }
            ],
            {
               useNativeDriver:false,
            }
         ),

         onPanResponderRelease: (evt, gestureState) => {
            pan.flattenOffset();

            setDropped(false);
            for (const [key, value] of Object.entries(drops)) {
               if ( (gestureState.moveY > value.y) && (gestureState.moveY < value.y + value.height) &&
                  (gestureState.moveX > value.x) && (gestureState.moveX < value.x + value.width)) {

                  setDropped(true);
                  const x = value.x - drops.spotA.x;
                  const y = value.y - drops.spotA.y;

                  Animated.spring(pan, {
                     toValue: {x, y},
                     friction: 5,
                     useNativeDriver:false,
                  }).start();
               }
            }
         }
      })
   ).current;

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


         <View style={{...styles.spotA, ...styles.box}} onLayout={(e) => {drops['spotA'] = e.nativeEvent.layout}} />
         <View style={{...styles.spotB, ...styles.box}} onLayout={(e) => {drops['spotB'] = e.nativeEvent.layout}} />
         <View style={{...styles.spotC, ...styles.box}} onLayout={(e) => {drops['spotC'] = e.nativeEvent.layout}} />

         <View style={{...styles.dropA, ...styles.box}} onLayout={(e) => {drops['dropA'] = e.nativeEvent.layout}} />
         <View style={{...styles.dropB, ...styles.box}} onLayout={(e) => {drops['dropB'] = e.nativeEvent.layout}} />
         <View style={{...styles.dropC, ...styles.box}} onLayout={(e) => {drops['dropC'] = e.nativeEvent.layout}} />

         <Text style={styles.titleText}>
            { (dropped) ? "Dropped" : "Elsewhere" }
         </Text>

         <Animated.View
            style={{
               ...styles.box,
               ...styles.spotA,
               transform: [{ translateX: pan.x }, { translateY: pan.y }],
               backgroundColor:"white",
            }}
            {...panResponder.panHandlers}>
            <Image 
               style={{
                  flex:1,
                  width: undefined,
                  height: undefined,
                  resizeMode:'contain'}}
               source={cart.item1.image}/>
         </Animated.View>

      </ImageBackground>
   );
}

const styles = StyleSheet.create({
   box: {
      borderRadius:15,
      height:"10%",
      width:"20%",
      position:"absolute",
   },
   spotA: {
      backgroundColor:"red",
      top:"10%",
      left:"10%",
   },
   spotB: {
      backgroundColor:"orange",
      top:"10%",
      left:"40%",
   },
   spotC: {
      backgroundColor:"green",
      top:"10%",
      left:"70%",
   },
   dropA: {
      backgroundColor:"limegreen",
      top:"80%",
      left:"10%",
   },
   dropB: {
      backgroundColor:"blue",
      top:"80%",
      left:"40%",
   },
   dropC: {
      backgroundColor:"purple",
      top:"80%",
      left:"70%",
   },
   titleText: {
      fontSize: 14,
      lineHeight: 24,
      fontWeight: "bold"
   }
});

export default Interact;
