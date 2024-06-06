// for loop 
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element == 5){
       console.log("5 is best number");
    }
    console.log(element); 
}
// console.log(element);  --> out of scope block so it'll not execute

for (let i = 0; i <= 10 ; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 0; j <= 10 ; j++){
    // console.log(`inner loop value ${j} and inner loop ${i}`);
    // console.log(i + '*' + j + '=' + i*j );
    } 
}
let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

//  break and continue 
for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`detected 5`);
        break    // to break a control flow
    }
   console.log(`value of i is ${index}`);
    
}
for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`detected 5`);
        continue  // skip that condition for one time 
    }
   console.log(`value of i is ${index}`);
    
}



