import React, { Component, useState, useEffect } from "react";
import { Text, View, Image, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Layout from "./src/components/Layout"
import Home from "./src/components/Home"
import HelloFromDede from "./src/components/HelloFromDede"
import ChoosePet from "./src/components/ChoosePet"


const Stack = createNativeStackNavigator();

const App = () => {

   const screenOptions = {
      headerStyle: {
         backgroundColor: '#42627c',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
         fontWeight: 'bold',
      }
   };

   return ( 
      <NavigationContainer>
         <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Home" 
               component={Home} 
               options={{ title:"Welcome to Sound Sprouts" }} />

            <Stack.Screen name="HelloFromDede" 
               component={HelloFromDede} 
               options={{ title:"Welcome" }} />

            <Stack.Screen name="ChoosePet" 
               component={ChoosePet} />

         </Stack.Navigator>
      </NavigationContainer>
   );
}

export default App;
