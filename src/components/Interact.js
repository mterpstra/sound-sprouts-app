import React, { useContext } from "react"; 
import PropTypes from 'prop-types';
import { Text, View, Image } from 'react-native';
import { BluredLayout } from "./Layout"
import Item from "./Item"
import { COLORS } from '../values/colors.js';
import { ITEMS } from '../values/items.js';
import { CartContext } from "./CartContext"

const Interact = (props) => {

   const cart = useContext(CartContext);
   const message = `Lets play with ${cart.name}`;

   return (
      <BluredLayout message={message}>

         <>
            <Image 
               source={cart.source}
               style={{
                  flex:1,
                  width: undefined,
                  height: undefined,
                  resizeMode:'contain',
               }}
            />

            {cart.item1.image &&
            <Image 
               source={cart.item1.image}
               style={{
                  flex:1,
                  width: undefined,
                  height: undefined,
                  resizeMode:'contain',
               }}
            />
            }

            {cart.item1.text &&
               <Text style={{fontSize:20}}>
                  {cart.item1.text}
               </Text>
            }

            {cart.item2.image &&
               <Image 
                  source={cart.item2.image}
                  style={{
                     flex:1,
                     width: undefined,
                     height: undefined,
                     resizeMode:'contain',
                  }}
               />
            }

            {cart.item2.text &&
               <Text style={{fontSize:20}}>
                  {cart.item2.text}
               </Text>
            }

            {cart.item3.image &&
               <Image 
                  source={cart.item3.image}
                  style={{
                     flex:1,
                     width: undefined,
                     height: undefined,
                     resizeMode:'contain',
                  }}
               />
            }

            {cart.item3.text &&
               <Text style={{fontSize:20}}>
                  {cart.item3.text}
               </Text>
            }


            <View style={{backgroundColor:"white"}}>
               <Text style={{fontSize:20}}>
                  {JSON.stringify(cart, null, 4)} 
               </Text>
            </View>

         </>
      </BluredLayout>
   );
}

export default Interact;
