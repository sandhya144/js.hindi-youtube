// singelton  --> ye apne tarah ka ek hi object hai  
// singelton forms when we use constructor not in literals

// Object.create  constructor methods

// object literals 
// object declaration  --> keys and values

const mySym = Symbol("key1") 

const JsUser = {
    name: "Sandhya",
    "full name": "Sandhya Pandey",
    [mySym]: "mykey1",   //  correct syntax to decalre symbol 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
} 

 // to access an object 
// console.log(JsUser.email)
// console.log(JsUser["email"])   // email treats --> string
// console.log(JsUser["full name"])   // dot  --> can't access
// console.log(JsUser[mySym]) 

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"   // freeze allows no changes
// console.log(JsUser)


// const JsUser = {}; // Define JsUser as an object

JsUser.greeting = function (){
  console.log("hello Js User");
}
// console.log(JsUser.greeting);   // function reference
console.log(JsUser.greeting());  // function executes

JsUser.greetingTwo = function (){  // object ko reference dena hai 
    console.log(`hello Js User, ${this.name}`);
  }
  console.log(JsUser.greetingTwo());
