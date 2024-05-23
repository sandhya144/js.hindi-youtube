const name = "Sandhya"
const repoCount = 50 

// console.log(name + repoCount + " Value");  // Not the corerct way of representation

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('hitesh-hc-com')   // another method t declare a string 

// console.log( gameName [0]);   // to access key value
// console.log( gameName.__proto__); // to access prototype


// console.log(gameName.length);            // for lenght of string
// console.log(gameName.toUpperCase());     // to convert it into uppercase
// console.log(gameName.charAt(2));        // character position 
// console.log(gameName.indexOf('s'));     // index of characters

const newString = gameName.substring(0,4)    //4 is not included here 
console.log(newString);

const anotherString = gameName.slice(-8,4)    // it can take negative values as well
console.log(anotherString);

const newStringOne = "      Sandhya    "
console.log(newStringOne);
console.log(newStringOne.trim());   //cuts down the extra spaces

const url = "https://hitesh.com/hitesh%20chaudhary"

console.log(url.replace('%20','-'))  // if we want to remove something from string
console.log(url.includes('hitesh'))   // to check wheather it includes hitesh or not
console.log(url.includes('sundar')) //false

console.log(gameName.split('-'));    // split a string and convert to an array form
