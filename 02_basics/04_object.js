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
const obj3 = {obj1 , obj2}
console.log(obj3);
