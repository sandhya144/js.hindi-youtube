// Dates

let myDate;
myDate = new Date();
// console.log(myDate.toString());

// formates to write date-------------

// console.log(myDate.toDateString());  // proper date
// console.log(myDate.toLocaleString());  //date with time
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024 , 0 , 23)     // array --> single digit--> start with 0
// let myCreatedDate = new Date(2024 , 0 , 23 , 5 , 4 , 7)
let myCreatedDate = new Date("2024-01-17")        // YY/MM/DD --> starts from 01 
// console.log( myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); //millisec
// console.log(myCreatedDate.getTime());   //time compare 
// console.log(Math.floor(Date.now()/1000));   //sec

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// string interpolation --> fulltime

`${newDate.getDay()} and the time `

 // more customize way to represent
 console.log(newDate.toLocaleString('default', {
    weekday: "long",
    // timeZone: '',
}));