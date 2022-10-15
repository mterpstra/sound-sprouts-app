import React, { useContext, useState, useEffect, useRef } from "react";
import { View, ImageBackground, Image, StyleSheet, Animated, Easing } from "react-native";
import { CartContext } from "./CartContext"
import Draggable from "./Draggable"
import { ITEMS } from '../values/items.js';
import { useHeaderHeight } from '@react-navigation/elements';

// Pulled these from the Layout file for now
const petshop = require('../../images/backgroundHome.png')

const Interact= () => {
   let cart = useContext(CartContext);
   const headerHeight = useHeaderHeight();

   const [spotA, setSpotA] = useState({});
   const [spotB, setSpotB] = useState({});
   const [spotC, setSpotC] = useState({});

   const [dropA, setDropA] = useState({});
   const [dropB, setDropB] = useState({});
   const [dropC, setDropC] = useState({});

   const [help, setHelp] = useState(true);

   const startValue = new Animated.Value(0);
   const duration = 3000;
   let endValue = 0;

   const locItemA = useRef(null);
   const locItemB = useRef(null);
   const locItemC = useRef(null);

   if (spotA && spotA.y && dropA && dropA.y) {
      endValue = dropA.y - spotA.y;
   }

   useEffect(() => {
      if (help) {
         const interval = setInterval(() => {
            startValue.setValue(0);
            Animated.timing(startValue, {
               toValue: endValue,
               duration: duration,
               useNativeDriver: true,
               easing:Easing.inOut(Easing.ease),
            }).start();
         }, 5000);

         console.log("useEffect, setting interval", interval);

         return () => {
            console.log("return", interval);
            clearInterval(interval);
         }
      }
   });

   const dropped = () => {
      // Since setHelp() is in state, this will cause a rerender.
      // When a rerender occurs, the callback from the original
      // setInterval will fire and clear the previous interval.
      console.log("dropped");
      setHelp(false);
   }

   const checkDone = () => {
      console.log("checking done", locItemA, locItemB, locItemC);
      if((locItemA.current == 2) && (locItemB.current == 2) && (locItemC.current == 2)) {
         // Potentially set a state value to trigger a re-render and display something.
         console.log("They are all in their destinations");
      }
   }

   // This is just used for debugging and quicker developmment
   if (!cart.item1) {
      cart = JSON.parse(`{
      "item1": {"image": 18, "text": "Dog Bone Dish"}, 
      "item2": {"image": 20, "text": "Steak"}, 
      "item3": {"image": 23, "text": "Tennis Ball"}, 
      "name": "Spot", 
      "pet": "dog", 
      "source": 9}`
      );
   }

   console.log("locItemA", locItemA);

   return (
      <ImageBackground 
         source={petshop} 
         resizeMode="cover" 
         style={{
            flex:1,
            flexDirection:"column",
         }}>

         <View style={{
            height:headerHeight,
            postion:"absolute",
            backgroundColor:"rgba(0,0,0,0.5)",
         }}/>

         {/* Window  */}
         <View style={{ 
            flex:0.3,
            flexDirection:"row",
         }}>
         </View>

         {/* Wall and Rug */}
         <View
            style={{ 
               flex:0.55,
               alignItems:"center",
            }}>
            <Image 
               source={ITEMS[cart.pet].idle}
               resizeMode='contain'
               style={{ 
                  flex:1,
               }}
            />
         </View>

         {/* Bottom, below rug*/}
         <View style={{ 
            flex:0.15,
         }}>
         </View>

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
            <Draggable origin={spotA} dest={dropA} 
               onDrop={dropped}
               onMove={() => { 
                  console.log("Move of Item A");
                  locItemA.current = 0; 
               }}
               onDropOrigin={() => {
                  console.log("Drop Origin of Item A");
                  locItemA.current = 1; 
               }}
               onDropDestination={() => {
                  console.log("Drop Destination of Item A");
                  locItemA.current = 2; 
                  checkDone() 
               }}>
               <Image source={cart.item1.image} style={styles.img} />
            </Draggable>
            : null
         }

         {Object.keys(spotB).length && Object.keys(dropB).length ?
            <Draggable origin={spotB} dest={dropB}
               onMove={() => { 
                  console.log("Move of Item B");
                  locItemB.current = 0; 
               }}
               onDropOrigin={() => {
                  console.log("Drop Origin of Item B");
                  locItemB.current = 1; 
               }}
               onDropDestination={() => {
                  console.log("Drop Destination of Item B");
                  locItemB.current = 2; 
                  checkDone() 
               }}>
               <Image source={cart.item2.image} style={styles.img} />
            </Draggable>
            : null
         }

         {Object.keys(spotC).length && Object.keys(dropC).length ?
            <Draggable origin={spotC} dest={dropC}
               onMove={() => { 
                  console.log("Move of Item C");
                  locItemC.current = 0; 
               }}
               onDropOrigin={() => {
                  console.log("Drop Origin of Item C");
                  locItemC.current = 1; 
               }}
               onDropDestination={() => {
                  console.log("Drop Destination of Item C");
                  locItemC.current = 2; 
                  checkDone() 
               }}>
               <Image source={cart.item3.image} style={styles.img} />
            </Draggable>
            : null
         }


         {(help) ?
            <Animated.View
               style={[
                  styles.square,
                  {
                     transform: [
                        {
                           translateY: startValue,
                        },
                     ],
                  },
               ]}
            >
               <Image source={require("../../images/helphand.png")} style={styles.img} />

            </Animated.View>
            :null
         }

      </ImageBackground>
   );
}

const SPOT_TOP = "15%";
const DROP_TOP = "85%";

const styles = StyleSheet.create({
   square: {
      height:"10%",
      width:"20%",
      position:"absolute",
      top:SPOT_TOP,
      left:"10%",
   },
   box: {
      height:"10%",
      width:"20%",
      position:"absolute",
      borderWidth:3,
      borderRadius:15,
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
