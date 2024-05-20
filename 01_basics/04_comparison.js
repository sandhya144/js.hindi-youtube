console.log(2 > 1);
console.log(2 >= 1);  // both numbers--> no problem
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);



console.log("2" > 1);    // one side string and number ---> conversions takes place
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);   // confusing (avoid it)
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// === (strictly check)

console.log("2" === 2);  // it will not occur
