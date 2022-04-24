import React, { Component, useState } from "react";
import { Dimensions, PixelRatio } from "react-native";
import { 
   View, 
   Text, 
   StyleSheet, 
} from 'react-native';

const speed=0;

class SpeechBubble extends Component {

   state = {
      msg:"",
      index:0,
      line:0
   }

   constructor(props) {
      super(props);
      this.state.index = 0;
   }

   componentDidMount() {

      var speech =[];
      if (Array.isArray(this.props.message)) {
         speech = this.props.message;
      } else {
         speech[0] = this.props.message;
      }

      this._interval = setInterval(() => {

         if (this.state.index < speech[this.state.line].length) {
            this.state.msg += speech[this.state.line][this.state.index];
            this.setState({index: this.state.index+1});
            return;
         } 

         if (this.state.line < speech.length-1) {
            this.state.line++;
            this.state.index = 0;
            this.state.msg = "";
            return;
         }

         clearInterval(this._interval);

         if (this.props.onComplete) {
            this.props.onComplete();
         }

      }, speed);
   }

   componentWillUnmount() {
      clearInterval(this._interval);
   }

   render() {
      return (
         <View style={styles.bubbleContainer}>
            <View style={styles.textContainer}>
               <Text style={styles.text}>{this.state.msg}</Text>
               {this.props.arrow && this.props.arrow == "left" 
                  ? <View style={styles.arrowLeft}/>
                  : <View style={styles.arrowBottom}/>
               }
            </View>

         </View>
      );
   }
}

const styles = StyleSheet.create({

   text: {
      fontSize: Dimensions.get('window').width > 1000 ? 40 : 20,
   },

   bubbleContainer: {
      flex:1,
      flexDirection:"column-reverse",
      //backgroundColor:"purple",
   },

   textContainer: {
      padding:10,
      marginBottom:20,
      backgroundColor:"white",
      flex:0.9,
      marginRight:"auto",
      marginLeft:"auto",
      width:"90%",
      borderRadius: 20,
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      textAlign:"center",
   },

   arrowLeft: {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',

      borderTopWidth: 10,
      borderBottomWidth: 10,

      borderRightWidth: 20,
      borderLeftWidth: 0,

      borderTopColor: 'transparent',
      borderRightColor: 'white',
      borderBottomColor: 'transparent',
      borderLeftColor: 'transparent',

      position:'absolute',
      bottom:"25%",
      left:-18,
   },

   arrowBottom: {
      width: 0,
      height: 0,

      backgroundColor: 'transparent',
      borderStyle: 'solid',

      borderTopWidth: 20,
      borderBottomWidth: 0,

      borderRightWidth: 10,
      borderLeftWidth: 10,

      borderTopColor: 'white',
      borderRightColor: 'transparent',
      borderBottomColor: 'transparent',
      borderLeftColor: 'transparent',

      position:'absolute',
      bottom:-20,
      left:"50%",
   },

});


export default SpeechBubble;
