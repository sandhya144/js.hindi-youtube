const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);    // it specifies the number 

// console.log(balance.toString().length);    //type of string
// console.log(balance.toFixed(1));   // precision value

const otherName = 123.8966
// console.log(otherName.toPrecision(4)) 

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));  // to counts zeroes

// ******************************* Maths ****************************************

// console.log(Math);
// console.log(Math.abs(-4));  // results positive value
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9));
// console.log(Math.min(4,5,6,7,8));
// console.log(Math.max(7,8,9));


console.log(Math.random());  // it can take the values from  0 to 1
console.log((Math.random()*10) + 1);  // add +1 to avoid the value 0 , (0.08) ---> floor returns 0
console.log(Math.floor(Math.random()*10) + 1);

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random()*(max - min + 1)) + min)

const min = 13
const max = 26
// console.log((Math.random()*(max - min + 1)) + min )   // max - min + 1 ---> close to 27 
// console.log((Math.random()*(min - max + 1)) + min )
console.log((Math.random()*(min - max + 1)))