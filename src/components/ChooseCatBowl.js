import React, { useContext } from "react"; 
import PropTypes from 'prop-types';
import { Text, View, Image, StyleSheet } from 'react-native';
import { BluredLayout } from "./Layout"
import MyBox from "./Box"
import { COLORS } from '../values/colors.js';
import { CartContext } from "./CartContext"

const BlueCatBowl = require('../../images/BlueCatBowl.png');
const RedCatBowl = require('../../images/RedCatBowl.png');
const OrangeCatBowl = require('../../images/OrangeCatBowl.png');
const WhiteCatBowl = require('../../images/WhiteCatBowl.png');

const Bowl = (props) => {

   const cart = useContext(CartContext);

   return (
      <View style={styles.box}>
         <MyBox 
            onPress={() => 
               {
                  cart.bowl = props.source;
                  console.log("Bowl", cart);
                  //props.navigation.navigate('NamePet');
               }
            }>

            <View style={{ flex:1, flexDirection:"row", justifyContent:"center", alignItems:"stretch" }}>
               <Image source={props.source} style={styles.img} />
            </View>

         </MyBox>
      </View>
   );
}

Bowl.propTypes = {
   source: PropTypes.number,
   pet: PropTypes.string,
   name: PropTypes.string,
   navigation: PropTypes.object,
};

const ChooseCatBowl = (props) => {

   const cart = useContext(CartContext);
   console.log("ChooseCatBowl", cart);
   const message = "Lets choose a bowl for " + cart.name;

   return (
      <BluredLayout message={message}>

         {/* Container */}
         <View style={{ flex:1, flexDirection:"column", justifyContent:"space-evenly"}}>

            {/* Row 1*/}
            <View style={{ flex:0.3, flexDirection:"row", justifyContent:"space-evenly"}}>
               {/* Cell 1 */}
               <View style={{ flex:0.4 }}>
                  <Bowl source={BlueCatBowl} />
               </View>
               {/* Cell 2 */}
               <View style={{ flex:0.4 }}>
                  <Bowl source={RedCatBowl} />
               </View>
            </View>

            {/* Row 2*/}
            <View style={{ flex:0.3, flexDirection:"row", justifyContent:"space-evenly" }}>
               {/* Cell 1 */}
               <View style={{ flex:0.4 }}>
                  <Bowl source={OrangeCatBowl} />
               </View>
               {/* Cell 2 */}
               <View style={{ flex:0.4 }}>
                  <Bowl source={WhiteCatBowl} />
               </View>
            </View>
         </View>
      </BluredLayout>
   );
}

const styles = StyleSheet.create({


   row: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      width: "100%",
   },

   col: {
      display: "flex",
      flexDirection: "column",
      flexBasis: "100%",
      flex: 1,
   },
   /*
                     row: {
                        flex:1,
                        flexDirection:"row",
                        justifyContent:"space-evenly",
                     },
                     col: {
                        flex:.50,
                        flexDirection:"row",
   },
   */
   box: {
      flex:1,
      flexDirection:"column",
      alignItems: "stretch",
   },
   img: {
      flex:1,
      width: undefined,
      height: undefined,
      resizeMode:'contain',
   },
});

export default ChooseCatBowl;
