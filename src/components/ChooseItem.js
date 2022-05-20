import React, { useContext } from "react"; 
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { BluredLayout } from "./Layout"
import Item from "./Item"
import { COLORS } from '../values/colors.js';
import { ITEMS } from '../values/items.js';
import { CartContext } from "./CartContext"


const next = (current) => {
   switch( current) {
      case "item1":
         return "Item2";
      case "item2":
         return "Item3";
      default:
         return "Interact";
   }
}

const Col = (props) => {
   const item = props.route.name.toLowerCase();
   console.log("col item", props.index, item);
   return (
      <>
         {ITEMS[props.cart.pet][item].items[props.index] &&
         <View style={{ flex:0.4 }}>
            <Item 
               source={ITEMS[props.cart.pet][item].items[props.index].image} 
               text={ITEMS[props.cart.pet][item].items[props.index].text} 
               onPress={() => { 
                  const item = props.route.name.toLowerCase();
                  props.cart[item] = ITEMS[props.cart.pet][item].items[props.index]; 
                  props.navigation.navigate(next(item));
               }}
            />
         </View>
         }
      </>
   );
}

const Row = (props) => {
   return (
      <View style={{ flex:0.3, flexDirection:"row", justifyContent:"space-evenly"}}>
         <Col {...props} />
         <Col {...props} index={props.index+1} />
      </View>
   );
}

const ChooseItem = (props) => {

   const item = props.route.name.toLowerCase();
   console.log("ChooseItem(item): ", item);

   const cart = useContext(CartContext);
   console.log("ChooseItem(cart):", cart);

   const message = `Lets choose a ${cart.pet} ${ITEMS[cart.pet][item].type} for ${cart.name}`;

   return (
      <BluredLayout message={message}>
         <View style={{ flex:1, flexDirection:"column", justifyContent:"space-evenly"}}>
            <Row index={0} cart={cart} {...props} />
            <Row index={2} cart={cart} {...props}/>
         </View>
      </BluredLayout>
   );
}

export default ChooseItem;