  function DelLastElement(myString){
    let str = myString.toString()
    let newStr = str.substring(0,str.length-1);
    return newStr;
  }
  function GetLastElement(myString){
    let str = myString.toString()
    let lastSymbhol = str.substring(str.length-1);
    return lastSymbhol
  }
  function GetLastValue(myString){
    let newStr = myString.split("").reverse().join("");
    let newStr1 =  newStr.split('/')[0];
    let newStr2 =  newStr1.split('+')[0];
    let newStr3 =  newStr2.split('-')[0];
    let newStr4 =  newStr3.split('*')[0];
    return newStr4;
    }
  function CheckingLength(myString){
    let newStr = myString.split("").reverse().join("");
    let newStr1 =  newStr.split('+')[0];
    let newStr2 =  newStr1.split('-')[0];
    let newStr3 =  newStr2.split('/')[0];
    let newStr4 =  newStr3.split('*')[0];
    let stringLength = 0
    for(let char of newStr4){
      if(char > 0 && char <= 9){
        stringLength += 1
      }
    } 
    return stringLength;
  }
  function DivideByZero(myString){
    let newStr1 =  myString.split('/')[myString.split('/').length-1];
    let newStr2 = newStr1.split('+')[0]
    let newStr3 = newStr2.split('-')[0]
    let newStr4 = newStr3.split('/')[0]
    return newStr4;
  }
  function Square(myString){
    let square = eval(myString)*eval(myString)
    let squareInString = square.toString()
    return squareInString
  }
  function PlusMinus(myString){
    let minusPlus = eval(myString)*(-1)
    let minusPlusInString = minusPlus.toString()
    return minusPlusInString;
  }
  function  IsDotExist(myString){
    let newStr = myString.split("").reverse().join("");
    let newStr1 =  newStr.split('+')[0];
    let newStr2 =  newStr1.split('-')[0];
    let newStr3 =  newStr2.split('/')[0];
    let newStr4 =  newStr3.split('*')[0];
    for(let char of newStr4){
        if(char =='.'){return true}   
    }
    return false;
  }
  function IsLastOperationSign(myString){
    let str = myString.toString()
    let lastSymbhol = str.substring(str.length-1);
    if(lastSymbhol== '+'||lastSymbhol== '-'||lastSymbhol== '/'||lastSymbhol== '*'){return true}
    return false
    }


  export  {DelLastElement,GetLastElement,GetLastValue,CheckingLength,IsDotExist,IsLastOperationSign,DivideByZero,Square,PlusMinus}