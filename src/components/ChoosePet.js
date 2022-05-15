import React, { useContext } from "react"; 
import PropTypes from 'prop-types';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { BluredLayout } from "./Layout"
import MyBox from "./Box"
import { COLORS } from '../values/colors.js';
import { CartContext } from "./CartContext"

const dog = require('../../images/dog/dog.png');
const cat = require('../../images/cat/cat.png');
const bunny = require('../../images/bunny/bunny.png');
const turtle = require('../../images/turtle/turtle.png');
const parrot = require('../../images/parrot/parrot.png');
const hamster = require('../../images/hamster/hamster.png');

const message = [
   "We have lots of nice pets to choose from!",
   "Pick one and lets get started." 
];

const width = Dimensions.get('window').width;
const FONT_SIZE=(width > 500) ? 60 : 30;

const Pet = (props) => {

   const cart = useContext(CartContext);

   return (
      <View style={styles.box}>
         <MyBox 
            onPress={() => 
               {
                  cart.source = props.source;
                  cart.pet = props.pet;
                  props.navigation.navigate('NamePet');
               }
            }>

            <View style={{
               flex:1,
               flexDirection:"row",
               justifyContent:"center",
               alignItems:"stretch",
            }}>

               <Image source={props.source} style={styles.img} />
            </View>

         </MyBox>
         <Text style={styles.text}>{props.pet}</Text>
      </View>
   );
}

Pet.propTypes = {
   source: PropTypes.number,
   pet: PropTypes.string,
   name: PropTypes.string,
   navigation: PropTypes.object,
};

const ChoosePet = (props) => {

   let [fontsLoaded] = useFonts({
      'Patrick-Hand': require('../../assets/fonts/PatrickHand-Regular.ttf'),
   });

   if (!fontsLoaded) {
      return <View/>;
   }

   return (
      <BluredLayout message={message}>
         <>
            {/* Row 1 */}
            <View style={styles.row}>
               <View style={styles.col}>
                  <Pet source={dog} pet="dog" {...props}/> 
               </View>
               <View style={styles.col}>
                  <Pet source={cat} pet="cat" {...props}/> 
               </View>
            </View>

            {/* Row 2 */}
            <View style={styles.row}>
               <View style={styles.col}>
                  <Pet source={bunny} pet="bunny" {...props}/> 
               </View>
               <View style={styles.col}>
                  <Pet source={turtle} pet="turtle" {...props}/> 
               </View>
            </View>

            {/* Row 3 */}
            <View style={styles.row}>
               <View style={styles.col}>
                  <Pet source={parrot} pet="parrot" {...props}/> 
               </View>
               <View style={styles.col}>
                  <Pet source={hamster} pet="hamster" {...props}/> 
               </View>
            </View>
         </>
      </BluredLayout>
   );
}

const styles = StyleSheet.create({
   row: {
      flex:.33,
      flexDirection:"row",
   },
   col: {
      flex:.50,
      flexDirection:"row",
   },
   box: {
      flex:1,
      flexDirection:"column",
      alignItems: "stretch",
      margin:20,
   },
   img: {
      flex:1,
      width: undefined,
      height: undefined,
      resizeMode:'contain',
   },
   text: {
      fontSize: FONT_SIZE,
      lineHeight: FONT_SIZE+5,
      color:COLORS.red,
      textAlign:"center",
      fontFamily: 'Patrick-Hand',
      flexWrap: 'wrap',
      textTransform:"capitalize",
   },
});

export default ChoosePet;
