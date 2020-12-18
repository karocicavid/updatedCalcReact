import {StyleSheet} from 'react-native'
export const styles = StyleSheet.create({
    device : {
      flex : 1,
    },
    buttons:{
      flex : 2,
      backgroundColor : 'white',
  
    },
    row:{
      flex : 1,
      backgroundColor : 'white',
      flexDirection : 'row',
      justifyContent : 'space-around',
      alignItems : "center"
    },
    rowForeach :{
      flex : 1,
      backgroundColor : 'white',
      justifyContent : "center",
      alignItems : "center"
    },
    rowSpecial:{
      flex : 1,
      backgroundColor : 'gray',
      justifyContent : "center",
      alignItems : "center",
    },
    operation : {
      flex : 0.5,
      justifyContent :"center",
      alignItems : "flex-end",
      backgroundColor : 'white',
    },
    operationText : {
      fontSize:34,
    },
    result : {
      flex : 0.5,
      alignItems : 'flex-end',
      justifyContent : "center",
      backgroundColor : 'white'
    },
    resultText : {
      fontSize : 45
    },
    font : {
      fontSize : 42
    },
    specialFont:{
      fontSize : 42,
      color:'white'
    }
  })