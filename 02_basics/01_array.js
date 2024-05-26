// arrays

const myArr = [0 , 1 , 2 , 3 , 4 , 5]
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1 , 2 , 3 , 4 , 5)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)  // values add 
// myArr.push(7) 
// myArr.pop()   // removes the last value

// myArr.unshift(9) // inserts at 1st position of array  (data optimized)
// myArr.shift()  // remove  

// console.log(myArr.includes(9));  // true or false 
// console.log(myArr.indexOf(3));    // -1 ---> does not exist

const newArr = myArr.join()  // joins all arr converts into string 
// console.log(myArr);
// console.log(typeof newArr);
// console.log(newArr);          

// slice, splice

console.log("A ",myArr);
const myn1 = myArr.slice(1, 3); //include 1 but not 3
console.log(myn1);  

console.log("B ", myArr);
const myn2 = myArr.splice(1 , 3);  // array manipulates 
console.log("C ", myArr);
console.log(myn2);

// difference between slice and splice --> that one includes range and another not --> not correct 
// which operation manipulates the original array and which does not 

// A  [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2 ]
// B  [ 0, 1, 2, 3, 4, 5 ]
// C  [ 0, 4, 5 ]   // cuts down the splice portion and original array gets manipulated 
// [ 1, 2, 3 ]



