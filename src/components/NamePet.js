import React, { useContext, useState }  from "react"; 
import { Text, View, Image, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { BluredLayout } from "./Layout";
import { COLORS } from "../values/colors.js";
import PropTypes from 'prop-types';
import MyBox from "./Box";
import { CartContext } from "./CartContext";


const Inner = (props) => {
   const [name, onChangeName] = useState("");
   const cart = useContext(CartContext);
   return (
      <KeyboardAvoidingView 
         style={{flex:1}} 
         behavior="height"
         keyboardVerticalOffset={160}
      >
         <View style={{ flex:1, position:"relative" }}>
            <View style={{ position:"absolute", height:"100%", width:"100%", zIndex:2 }}>
               <Image source={cart.source} style={styles.img} />
            </View>
            <View style={{ position:"absolute", height:"80%", width:"80%", top:"10%", left:"10%", zIndex:1 }}>
               <MyBox/>
            </View>
         </View>
         <View style={{ flex:0.4, flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
            <TextInput style={styles.input} 
               placeholder="Name"
               placeholderTextColor="#bab480"
               onChangeText={onChangeName} />
            <View style={{ height: 60, width:"80%" }}>
               <MyBox radius={15} onPress={() => { 
                  cart.name = name; 
                  props.navigation.navigate("Item1");
               }} >
                  <View style={{ flex:1, flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
                     <Text style={{ color:"white",fontWeight:"bold" }}>Next</Text>
                  </View>
               </MyBox>
            </View>
         </View>
      </KeyboardAvoidingView>
   );
}

Inner.propTypes = {
   navigation: PropTypes.object,
};

const NamePet = (props) => {
   const cart = useContext(CartContext);
   const message = "Name your " + cart.pet.toLowerCase();
   return (
      <BluredLayout message={message}>
         <Inner {...props}/>
      </BluredLayout>
   );
}

const styles = StyleSheet.create({
   input: {
      color: COLORS.brown_dark,
      width:"80%",
      backgroundColor:"#faf9d1",
      borderColor:"#bab480",
      borderWidth: 3,
      height: 60,
      margin: 12,
      padding: 10,
      borderRadius:15,
   },
   img: {
      flex:1,
      width: undefined,
      height: undefined,
      resizeMode:'contain',
   },
});

export default NamePet;
