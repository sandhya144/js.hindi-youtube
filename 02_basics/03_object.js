// singelton  --> ye apne tarah ka ek hi object hai  
// singelton forms when we use constructor not in literals

// Object.create  constructor methods

// object literals 
// object declaration  --> keys and values
const mySym = Symbol("key1") 

const JsUser = {
    name: "hitesh",
    "full name": "Hitesh Chaudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
} 

//  to access an object 
console.log(JsUser.email)
console.log(JsUser["email"])   // email treats --> string
console.log(JsUser["full name"])   // dot  --> can't access
console.log(JsUser[mySym]) 



