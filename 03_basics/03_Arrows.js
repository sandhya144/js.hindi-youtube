const user = {
    username: "sandhya",
    price: 999,

    welcomeMessage: function(){
        console.log(`$ {this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()   //sam, welcome to website  (context changed now)

console.log(this);  // {} --> empty object ; as we are in node environment 

// function chai(){
//     let username = "sandhya"
//     console.log(this.username);   // not works on function
// }
// chai()

// const chai = function chai(){
//     let username = "sandhya"       // variable me store kara ke bhi it won't work 
//     console.log(this.username); 
//     }


/****************** arrows function ******************/



    const chai = () => {
        let username = "sandhya"
        console.log(this); 
        }
// chai()
 


// const addTwo = (num1, num2) => {
//     return num1 + num2                   // explicitly return
// }
// console.log(addTwo (3,4))

// const addTwo = (num1, num2) => (num1 + num2)  // implicit return 
const addTwo = (num1, num2) => ({username: "sandhya"})  // to return an object wrap it in parenthesis
console.log(addTwo (3,4))


// const myArray = [2,3,4,5,6]

// myArray.forEach( () => {})














