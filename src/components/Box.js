import React from "react";
import PropTypes from 'prop-types';
import { Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../values/colors.js';

const MyBox = (props) => {
   const r = props.radius ? props.radius : 30;
   const outerPadding = props.outerPadding ? props.outerPadding : 3;
   const innerPadding = props.innerPadding ? props.innerPadding : 5;
   return (
      <Pressable 
         style={{flex:1}}
         onPress={props.onPress}>
         <LinearGradient
            colors={[COLORS.orange, COLORS.red]}
            style={{
               flex:1,
               borderRadius:r,
               padding:outerPadding,
            }}>
            <LinearGradient
               colors={[COLORS.blue_light, COLORS.blue_dark]}
               style={{
                  flex:1,
                  borderRadius:r,
                  padding:innerPadding,
               }}>
               {props.children}
            </LinearGradient>
         </LinearGradient>
      </Pressable>
   );
}

MyBox.propTypes = {
   children: PropTypes.object,
   radius: PropTypes.number,
   onPress: PropTypes.func,
};

export default MyBox;
