import {
    StyleSheet,
  } from 'react-native';

  const styles = StyleSheet.create({

    row1: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        margin: 30,
        marginTop: 100
    },

    row: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        margin: 30,
    },

    text: {
        color: "gray",
        fontSize: 14
    },

    inputText: {
        height: 45,
        width: 60,
        borderColor: "gray",
        color: "gray",
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 10,
        textAlign: "center"
    },

    signText: {
        color: "gray",
        fontSize: 20, 
        alignSelf: "center" 
    },

    boxText: {
      color: "gray",
      fontSize: 20, 
      alignSelf: "center", 
      marginTop: 5
    },

    number: {
      // backgroundColor: "grey",
      borderRadius: 5,
      borderWidth: 1,
      height: 45,
      width: 60
    },

    numberGreen: {
      backgroundColor: "green",
      borderRadius: 5,
      borderWidth: 1,
      height: 45,
      width: 60
    },

    button: {
      backgroundColor: "green",
      borderRadius: 5,
      borderWidth: 1,
      height: 50,
      width: 120
    },

    output: {
      color: "aliceblue",
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center"
    }

  })

export default styles;
