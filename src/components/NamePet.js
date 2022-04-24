import React from "react"; 
import { Text, View, Image, TextInput, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { BluredLayout } from "./Layout"
import MyBox from "./Box"

const NamePet = (props) => {
   const message = "Name your " + props.route.params.name.toLowerCase();
   return (
      <BluredLayout message={message}>
         <View style={{ 
            flex:1, 
         }}>
            <View style={{ 
               flex:0.6, 
               flexDirection:"column",
               justifyContent:"center",
            }}>
               <Image style={styles.img} source={props.route.params.source}/>
            </View>
            <View style={{ flex:0.4, 
               flexDirection:"column",
               justifyContent:"center",
               alignItems:"center",
            }}>
               <TextInput style={styles.input} placeholder={props.route.params.name} />

               <View style={{
                  height: 60,
                  width:"80%",
               }}>
                  <MyBox radius={15}>
                     <View style={{
                        flex:1,
                        flexDirection:"column",
                        justifyContent:"center",
                        alignItems:"center",
                     }}>
                        <Text style={{ color:"white",fontWeight:"bold" }}>Next</Text>
                     </View>
                  </MyBox>
               </View>

            </View>
         </View>
      </BluredLayout>
   );
}

const styles = StyleSheet.create({
   input: {
      width:"80%",
      backgroundColor:"white",
      height: 60,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius:15,
   },
   img: {
      flex:0.8,
      width: undefined,
      height: undefined,
      resizeMode:'contain',
      margin:20,
   },
});

export default NamePet;
