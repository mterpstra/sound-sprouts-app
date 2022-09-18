import React from "react";
import { Audio } from 'expo-av';
import PropTypes from 'prop-types';

const Sound = (props) => {
   const [sound, setSound] = React.useState();

   async function playSound() {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(props.audio);
      setSound(sound);
      console.log('Playing Sound');
      await sound.playAsync(); 

      // This will listen on the navigation changes and stop the sound.
      props.navigation.addListener('blur', (e) => {
         sound.unloadAsync(); 
      });
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

Sound.propTypes = {
   audio: PropTypes.number,
};

export default Sound;
