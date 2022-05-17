import React  from "react"; 
import PropTypes from 'prop-types';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import MyBox from "./Box"
import { COLORS } from '../values/colors.js';

const width = Dimensions.get('window').width;
const FONT_SIZE=(width > 500) ? 60 : 30;


const Item = (props) => {

   const text = props.text ? props.text : "";

   let [fontsLoaded] = useFonts({
      'Patrick-Hand': require('../../assets/fonts/PatrickHand-Regular.ttf'),
   });

   if (!fontsLoaded) {
      return <View/>;
   }

   return (
      <View style={styles.box}>
         <MyBox onPress={props.onPress}>

            <View style={{ flex:1, flexDirection:"row", justifyContent:"center", alignItems:"stretch" }}>
               <Image source={props.source} style={styles.img} />
            </View>

         </MyBox>
         <Text style={styles.text}>{text}</Text>
      </View>
   );
}

Item.propTypes = {
   text: PropTypes.string,
   source: PropTypes.number,
   onPress: PropTypes.func,
};

const styles = StyleSheet.create({
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

export default Item;
