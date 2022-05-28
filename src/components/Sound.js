import React from "react";
import { Audio } from 'expo-av';

const Sound = (props) => {
   const [sound, setSound] = React.useState();

   async function playSound() {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(
         require('../../assets/HelloFromDede.m4a')
      );
      setSound(sound);
      console.log('Playing Sound');
      await sound.playAsync(); 
   }

   React.useEffect(() => {
      console.log("Use Effect");
      if(sound) {
         console.log("I have a sound");
         return () => {
            console.log('Unloading Sound');
            sound.unloadAsync(); 
         }
      }
      else {
         console.log("I do NOT have a sound");
         playSound();
      }
   });

   return (
      <>
      </>
   );
}

export default Sound;
