// const userEmail = "sandhya.com"
const userEmail = []
// if (userEmail){
//     // console.log("Got user email");
// } else {
//     // console.log("don't have user email");
// }


 // empty array --> true  & empty string --> false
//   falsy values
// false,0,-0,BigInt,0n (zero in)," ",null, undefined, NaN (not a number)

// truthy value
// "0",'false', " ",[],{}, function(){}  (--> parameter haven't passed)


// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}
if (Object.keys(emptyObj.length === 0)){      // arrays of keys
    console.log("object is empty");
}

// nullish coalescing operator (??) : null undefined

let val1;
// val1 = 5 ?? 10                    // assign --> first value
// val1 = null ?? 10                 
// val1 = undefined ?? 17
val1 = null ?? 10 ?? 20

console.log(val1);

// ternary operator 

// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")


 
