import React, { useRef } from "react";
import { Animated, StyleSheet, PanResponder } from "react-native";
import MyBox from "./Box"
import PropTypes from 'prop-types';

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

            if (props.onMove) {
               props.onMove();
            }
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

            // Make sure the item is not dragged and placed into
            // the header.  Dropping in the header prevents the
            // user of moving it again (out of the header).
            // For now, dragging anywhere above the original spot
            // gets repositioned to the original spot.
            if (parseInt(pan.y._value) < 0) {
               Animated.spring(pan, {
                  toValue: {x:0, y:0},
                  friction: 5,
                  useNativeDriver:false,
               }).start();

               if (props.onDropOrigin) {
                  props.onDropOrigin();
               }
            }

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

               if (props.onDrop) {
                  props.onDrop();
               }

               if (props.onDropDestination) {
                  props.onDropDestination();
               }
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

               if (props.onDropOrigin) {
                  props.onDropOrigin();
               }
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
            borderWidth:0,
         }}
         {...panResponder.panHandlers}>
         <MyBox radius={15}>
            {props.children}
         </MyBox>
      </Animated.View>

   );
}

Draggable.propTypes = {
   dest: PropTypes.object,
   origin: PropTypes.object,
   children: PropTypes.object,
};

const styles = StyleSheet.create({
   box: {
      borderRadius:15,
      height:"10%",
      width:"20%",
      position:"absolute",
      borderWidth:3,
   },
});

export default Draggable;
