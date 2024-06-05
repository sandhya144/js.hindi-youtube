// if (true--> code will execute) & (false --> code will not execute)
const isUserLoggedIn = true

if (2 != 3){
//   console.log("executed");
}
// <,>,<=,>=,==,!=,===,!==

// const temperature = 42
// if(temperature < 50){
//     console.log("less than 50");
// } else{                                  // conditional checking
// console.log("temperature is greater than 50")
// }
// console.log("execute");

const score = 200

if (score > 100) {
    const power = "fly"
    // console.log(`user power: ${power}`);                 // power is not defined
}
// console.log(`user power: ${power}`);

const balance = 1000

// if (balance > 500) console.log("test1"), console.log("test2");

// nesting...............

 // if (balance<500){
//   console.log("less than 500 ");

// } else if(balance < 750){
//     console.log("less than 750");

// } else if(balance < 900){
//     console.log("less than 900");

// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitcard  && 2==2 ){
  console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail || guestUser1 ){
    console.log("user logged in");
}






















