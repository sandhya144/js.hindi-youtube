// primitive

// 7 types : string, number, boolean, null, undefined, symbol, BigInt

// integer data types
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);

// const bigNumber = 34567898765432n

// reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga" ]   // arrays

let myobj = {
    name: "sandhya",                 // object
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);  // we can check more ......


// ******************************** Memory *********************************************

// stack (Primitive) --> you'll get the copy of declared variable
// and heap (non primitive type) -->  you'll get the reference of original value

let myYoutubeChannel = "sandhyadotcom"
let anothername = myYoutubeChannel
anothername = "chaiaurcode"
 
console.log(myYoutubeChannel);
console.log(anothername);

let userOne = {
    email: "sandhya@google.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);