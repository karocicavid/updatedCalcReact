import React , {Component} from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import {styles} from './Mystyles'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
       
    }
    resultText = '',
    operationText = '',
    isZeroExist = false,
    isDotExist = false,
    isParenthesisExist = false

  } 
  delLastSign(myString){
    let str = myString.toString()
    let newStr = str.substring(0,str.length-1);
    return newStr;
  }
  getLastSign(myString){
    let str = myString.toString()
    let lastSymbhol = str.substring(str.length-1);
    return lastSymbhol
  }
  parenthesisCheck(myString){
    let newStr = myString.split("").reverse().join("");
    newStr.map((element)=>{
      if(element==')'){return true;}
      if(element=='('){return false;}
    })
    return true;
  }
  checkingLength(myString){
    let newStr = myString.split("").reverse().join("");
    let newStr1 =  newStr.split('+')[0];
    let newStr2 =  newStr1.split('-')[0];
    let newStr3 =  newStr2.split('/')[0];
    let newStr4 =  newStr3.split('*');
    let stringLength = 0
    for(let char of newStr4){
      if(char > 0 && char <= 9){
        stringLength += 1
      }
    } 
    return stringLength;
  }
  checkingLastZeroOrNOt(myString){
    let newStr = myString.split("").reverse().join("");
    let newStr1 =  newStr.split('+')[0];
    let newStr2 =  newStr1.split('-')[0];
    let newStr3 =  newStr2.split('/')[0];
    let newStr4 =  newStr3.split('*');
    if(newStr4==0){return true}
    else{return false}
  }
  checkingDotExist(myString){
    let newStr = myString.split("").reverse().join("");
    let newStr1 =  newStr.split('+')[0];
    let newStr2 =  newStr1.split('-')[0];
    let newStr3 =  newStr2.split('/')[0];
    let newStr4 =  newStr3.split('*');
    newStr4.map((element)=>{})
    return false;
  }
  

   buttonPressed() {

  }
  
  render(){
    let myElems = [['(',')','del','/'],['1','2','3','+'],['4','5','6','-'],['7','8','9','*'],['C',0,'=','.']];
    let rows = [];
    myElems.map((subMass)=>{
        let row = []
        subMass.map((element)=>{
          row.push(<TouchableOpacity style = {styles.rowForeach} onPress={()=>this.buttonPressed()}><Text style = {styles.font}>{element}</Text></TouchableOpacity>)
        })
        rows.push(<View style = {styles.row}>{row}</View>)
    }) 
    return(
      <View style = {styles.device}>
          <View style = {styles.operation}>
              <Text style={styles.operationText}>4</Text>
          </View>
          <View style = {styles.result}>
              <Text style={styles.resultText}>3</Text>
          </View>
          <View style = {styles.buttons}>
              {rows}
          </View>
      </View>
    );
  }
}

