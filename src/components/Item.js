import React  from "react"; 
import PropTypes from 'prop-types';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import MyBox from "./Box"
import { GetFontSize } from "../values/fontsizes.js"; 
import { COLORS } from '../values/colors.js';

const FONT_SIZE=GetFontSize(Dimensions.get('window').width);

const Item = (props) => {

   const text = props.text ? props.text : "";

   let [fontsLoaded] = useFonts({
      'Patrick-Hand': require('../../assets/fonts/PatrickHand-Regular.ttf'),
   });

   if (!fontsLoaded) {
      return <View/>;
   }

   return (
      <View style={{
         flex:1,
         flexDirection:"column",
         alignItems: "stretch",
      }}>

         <View style={{ 
            flex:0.7, 
            flexDirection:"row", 
            justifyContent:"center", 
            alignItems:"stretch",
         }}>
            <MyBox onPress={props.onPress}>
               <Image source={props.source} style={styles.img} />
            </MyBox>
         </View>

         <View style={{ 
            flex:0.3,
         }}>
            <Text style={styles.text}>{text}</Text>
         </View>

      </View>
   );
}

Item.propTypes = {
   text: PropTypes.string,
   source: PropTypes.number,
   onPress: PropTypes.func,
};

const styles = StyleSheet.create({
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
      flexWrap: 'nowrap',
      textTransform:"capitalize",
   },
});

export default Item;
