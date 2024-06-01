var c = 300    

// {} --> with some function or array called as scope
if(true){
    let a = 10
    const b = 20      // inside if --> block scope --> can't go outside ; outside it --> global scope --> value available for block scope
    var c = 30    // returns -->30
}    

// console.log(a);
// console.log(b);
console.log(c);