function sayMyName(){
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}
// sayMyName()    //  sayMyName() --> Execution , sayMyName--> reference


// function addTwoNumbers(number1 , number2){
//   console.log(number1 + number2);
// }

// addTwoNumbers(3,4)       // 7
// addTwoNumbers(3,"4")     //34
// addTwoNumbers(3,"a")     //3a
// addTwoNumbers(3,null)    //3

function addTwoNumbers(number1 , number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
    console.log("sandhya")  // after return --> this never executes
  }
const result = addTwoNumbers(3,5)
// console.log("result: ", result)


function loginUserMessage(username = "sam"){
  if(username === undefined){             // if(!username)
    console.log("please enter a username")
    return
  }
    return `${username} just logged in`
}
console.log(loginUserMessage("hitesh"))   // overwrite
// console.log(loginUserMessage())  // undefined






