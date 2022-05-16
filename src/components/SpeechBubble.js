import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Dimensions } from "react-native";
import { View, Text, StyleSheet, } from 'react-native';

const speed=100;
const COLOR="#faf9d1";

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

            this.setState({
               msg: this.state.msg + speech[this.state.line][this.state.index],
               index: this.state.index+1,
            });

            return;
         } 

         if (this.state.line < speech.length-1) {

            this.setState({
               line: this.state.line+1,
               index: 0,
               msg: "",
            });

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

SpeechBubble.propTypes = {
   message: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
   ]),
   arrow:PropTypes.string,
   onComplete:PropTypes.func,
};

const styles = StyleSheet.create({

   text: {
      fontSize: Dimensions.get('window').width > 1000 ? 35 : 15,
   },

   bubbleContainer: {
      flex:1,
      flexDirection:"column-reverse",
   },

   textContainer: {
      padding:10,
      marginBottom:20,
      backgroundColor:COLOR,
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
      borderRightColor: COLOR,
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

      borderTopColor: COLOR,
      borderRightColor: 'transparent',
      borderBottomColor: 'transparent',
      borderLeftColor: 'transparent',

      position:'absolute',
      bottom:-20,
      left:"50%",
   },

});


export default SpeechBubble;
