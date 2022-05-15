import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./src/components/Home"
import HelloFromDede from "./src/components/HelloFromDede"
import ChoosePet from "./src/components/ChoosePet"
import Item1 from "./src/components/Item1"
import Item2 from "./src/components/Item2"
import Item3 from "./src/components/Item3"
import Interact from "./src/components/Interact"
import NamePet from "./src/components/NamePet"
import { CartContext } from "./src/components/CartContext"

import { COLORS } from "./src/values/colors"
const Stack = createNativeStackNavigator();

const App = () => {


   return ( 
      <CartContext.Provider value={{}}>
         <NavigationContainer>
            <Stack.Navigator>

               {/* Custom Options to HIDE the header bar on the home screen */}
               <Stack.Group screenOptions={{ headerShown:false }}>
                  <Stack.Screen name="Home" component={Home} />
               </Stack.Group>

               {/* Custom Options to SHOW the header bar on all screens */}
               <Stack.Group 
                  screenOptions={{
                     headerTransparent: true,
                     headerTintColor: COLORS.blue_dark,
                  }}>

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

                  <Stack.Screen name="Item1" 
                     component={Item1} 
                     options={{ title:"" }} 
                  />

                  <Stack.Screen name="Item2" 
                     component={Item2} 
                     options={{ title:"" }} 
                  />

                  <Stack.Screen name="Item3" 
                     component={Item3} 
                     options={{ title:"" }} 
                  />

                  <Stack.Screen name="Interact" 
                     component={Interact} 
                     options={{ title:"" }} 
                  />

               </Stack.Group>

            </Stack.Navigator>
         </NavigationContainer>
      </CartContext.Provider>
   );
}

export default App;
