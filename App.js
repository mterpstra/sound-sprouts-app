import React, { Component, useState, useEffect } from "react";
import { Text, View, Image, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Layout from "./src/components/Layout"
import Home from "./src/components/Home"
import HelloFromDede from "./src/components/HelloFromDede"
import ChoosePet from "./src/components/ChoosePet"
import NamePet from "./src/components/NamePet"

import { CartContext } from "./src/components/CartContext"

import { COLORS } from "./src/values/colors"
const Stack = createNativeStackNavigator();

const App = () => {

   const screenOptions = {
      headerShown: true,
      headerTransparent: true,
      headerTintColor: COLORS.blue_dark,
   };

   return ( 
      <CartContext.Provider value={{}}>
         <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions}>

               <Stack.Screen name="Home" 
                  component={Home} 
                  options={{ title:"" }} 
               />

               <Stack.Screen name="HelloFromDede" 
                  component={HelloFromDede} 
                  options={{ title:""}}
               />

               <Stack.Screen name="ChoosePet" 
                  component={ChoosePet} 
                  options={{ title:"" }} 
               />

               <Stack.Screen name="NamePet" 
                  component={NamePet} 
                  options={{ title:"" }} 
               />

               </Stack.Navigator>
            </NavigationContainer>
      </CartContext.Provider>
   );
}

export default App;
