// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sandy"
tinderUser.isLoggedIn = false 

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "sandhya",
            lastname: "pandey"
        }
    }
}
// console.log(regularuser.fullname.userfullname.firstname.lastname);  // methods to access 
// console.log(regularuser.fullname?.userfullname.firstname.lastname);   // optional chaining

// obj combination
const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}
const obj4 = {5: "a",6: "b"}

// const obj3 = {obj1 , obj2}  // same array's prblm
// const obj3 = Object.assign({}, obj1 , obj2 , obj4)
const obj3 = {...obj1, ...obj2, ...obj4}    // spread method
// console.log(obj3); 

const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },  
]
// console.log(users[1].email)
// console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));   // key-values ----> array me convert kr dete hai 

console.log(tinderUser.hasOwnProperty('isLoggedIn'))




