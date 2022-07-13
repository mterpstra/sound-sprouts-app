import React, { useRef, useState, useContext } from "react";
import { Animated, View, StyleSheet, PanResponder, Text} from "react-native";

const Draggable = (props) => {
   const pan = useRef(new Animated.ValueXY()).current;

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

            // @todo: Better way than 2 big if statements
            if ( (gestureState.moveY > props.dest.y) && 
               (gestureState.moveY < props.dest.y + props.dest.height) &&
               (gestureState.moveX > props.dest.x) && 
               (gestureState.moveX < props.dest.x + props.dest.width)) {

               const x = props.dest.x - props.origin.x;
               const y = props.dest.y - props.origin.y;

               Animated.spring(pan, {
                  toValue: {x, y},
                  friction: 5,
                  useNativeDriver:false,
               }).start();
            }

            if ( (gestureState.moveY > props.origin.y) && 
               (gestureState.moveY < props.origin.y + props.origin.height) &&
               (gestureState.moveX > props.origin.x) && 
               (gestureState.moveX < props.origin.x + props.origin.width)) {

               Animated.spring(pan, {
                  toValue: {x:0, y:0},
                  friction: 5,
                  useNativeDriver:false,
               }).start();
            }
         }
      })
   ).current;

   return (
      <Animated.View
         style={{
            ...styles.box,
            top:props.origin.y,
            left:props.origin.x,
            transform: [{ translateX: pan.x }, { translateY: pan.y }],
            backgroundColor:"white",
            borderStyle:"none",
            borderWidth:0,
         }}
         {...panResponder.panHandlers}>
         {props.children}
      </Animated.View>

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
});

export default Draggable;
