import React, { useContext } from "react"; 
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { BluredLayout } from "./Layout"
import Item from "./Item"
import { COLORS } from '../values/colors.js';
import { ITEMS } from '../values/items.js';
import { CartContext } from "./CartContext"

const Row = (props) => {
   return (
      <View style={{ flex:0.3, flexDirection:"row", justifyContent:"space-evenly"}}>
         <View style={{ flex:0.4 }}>
            <Item 
               source={ITEMS[props.cart.pet].Item1.Items[props.index].image} 
               text={ITEMS[props.cart.pet].Item1.Items[props.index].text} 
               onPress={() => 
                  {
                     props.cart.item1 = ITEMS[props.cart.pet].Item1.Items[props.index]; 
                     props.navigation.navigate("Item2");
                  }
               }
            />
         </View>
         <View style={{ flex:0.4 }}>
            <Item 
               source={ITEMS[props.cart.pet].Item1.Items[props.index+1].image} 
               text={ITEMS[props.cart.pet].Item1.Items[props.index+1].text} 
               onPress={() => 
                  {
                     props.cart.item1 = ITEMS[props.cart.pet].Item1.Items[props.index+1]; 
                     props.navigation.navigate("Item2");
                  }
               }
            />
         </View>
      </View>
   );
}

const Item1 = (props) => {

   const cart = useContext(CartContext);
   const message = `Lets choose a ${cart.pet} ${ITEMS[cart.pet].Item1.type} for ${cart.name}`;

   return (
      <BluredLayout message={message}>
         <View style={{ flex:1, flexDirection:"column", justifyContent:"space-evenly"}}>
            <Row index={0} cart={cart} {...props} />
            {ITEMS[cart.pet].Item1.Items.length > 2 &&
            <Row index={2} cart={cart} {...props}/>
            }
         </View>
      </BluredLayout>
   );
}

export default Item1;
