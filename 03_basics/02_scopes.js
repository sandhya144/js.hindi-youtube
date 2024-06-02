// var c = 300    
// {} --> with some function or if else called as scope
let a = 300
if(true){
    let a = 10
    const b = 20      // inside if --> block scope --> can't go outside ; outside it --> global scope --> value available for block scope
    // var c = 30    // returns -->30
    console.log("INNER: ", a);
}    

// console.log(a);
// console.log(b);
// console.log(c);

/******************nested scope*****************/
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);   // line by line execution 

    two()

}

one()

if (true){
    const username = "hitesh"
    if (username == "hitesh"){
       const website = "youtube"
       console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ********************interesting**********************//
addone(5)
function addone(num){
 return num + 1
}
// console.log(addone(5))

addTwo(5)   // cannot access before initialisation
const addTwo = function(num){
  return num + 2
}
console.log(addTwo(5));