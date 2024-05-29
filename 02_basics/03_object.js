// singelton  --> creates single object 
// singelton forms when we use constructor not in literals

// Object.create  constructor methods

// object literals 
// object declaration
const JsUser = {
    name: "hitesh",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
} 
//  to access an object 
console.log(JsUser.email)
console.log(JsUser["email"])

