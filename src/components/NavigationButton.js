import React from "react";
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import MyBox from "./Box"

const NavigationButton = (props) => {
   const transform = props.direction == "left" ?  
      {transform:[{ rotate:"180deg"}]} : 
      {transform:[{ rotate:"0deg"}]};
   return (
      <View>
         <MyBox radius={8} outerPadding={2} {...props}>
            <Text style={[
               styles.arrow, 
               transform]}>{"\u2B95"}</Text>
         </MyBox>
      </View>
   );
}

NavigationButton.propTypes = {
   direction: PropTypes.string,
};

const styles = StyleSheet.create({
   arrow: {
      textAlign:"center", 
      color:"white", 
      marginLeft:15,
      marginRight:15,
   }
});

export default NavigationButton;
