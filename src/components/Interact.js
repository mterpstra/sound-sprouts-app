import React, { useContext } from "react";
import { View, ImageBackground, Image, Dimensions } from "react-native";
import { CartContext } from "./CartContext"
import { ITEMS } from '../values/items.js';

// Pulled these from the Layout file for now
const petshop = require('../../images/backgroundHome.png')
const dimensions = Dimensions.get('window');
const ratio = dimensions.height / dimensions.width;
console.log("Dimensions:", dimensions, ratio);

const Interact= () => {
   let cart = useContext(CartContext);

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

   console.log(JSON.stringify(cart, null, 4));

   return (
      <ImageBackground 
         source={petshop} 
         resizeMode="cover" 
         style={{
            flex:1,
         }}>
         <View style={{ flex:1, flexDirection:"column" }}>


            {/* Window  */}
            <View style={{ 
               flex:0.3,
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
            <View style={{ flex:0.1 }}>
            </View>

         </View>


      </ImageBackground>
   );
}

export default Interact;
