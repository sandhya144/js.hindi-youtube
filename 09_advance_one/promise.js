const promiseOne = new Promise(function(resolve, reject){
  // Do an async task 
  // DB calls ,cryptography,network operations ...
   setTimeout (function(){
    console .log('Async task is completed');
    resolve()                          // to connect it with resolve (.then)
   }, 1000)
})
promiseOne.then(function(){                
   console.log("promise consumed")          // to consume promise
})

new Promise(function(resolve, reject){
    setTimeout(function(){
    console.log("Async task 2");
     resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Sweety", email:"sndy@eg.com"})
    } , 1000)
})
promiseThree.then(function(even){       // to get the parameter which we have passed in resolve
  console.log(even)
})

const promiseFour = new Promise(function(resolve, reject){
   setTimeout(function(){
    let error = true
    if (!error) {
        resolve({username: "hitesh", password: "123"})
    } else {
        reject('ERROR: Something went wrong')
    }
   }, 1000)
})



promiseFour.then((user) => {
    console.log(user);
    return user.username
}) .then((username)=>{
    console.log(username);
}) .catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "python", password: "163"})
        } else {
            reject('ERROR; Py went wrong')
        }
       }, 1000)
})
async function consumePromiseFive (){
    try{
   const response = await promiseFive               // throwing inside of an async function without a catch block
   console.log("response")
    } catch (error) {
        console.log(error);
    }
}

// consumePromiseFive()

// async function getAllUsers (){
//     try{
//         const response = await fetch ('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()          // await function
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }  
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})

