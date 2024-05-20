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