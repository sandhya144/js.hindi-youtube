const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)     // *** push on existing array  ***

// console.log(marvel_heros);  // array inside array
// console.log(marvel_heros[3][1])  // flash

// [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// arrays can take any data either string, object, boolean, array ......


// concatenate --> Combines two or more arrays. This method returns a ***new array****  without modifying any existing arrays.

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);
// [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

/* spread operator */ 
 
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);   mostly used

const another_array = [1, 2, 3, [4, 5 , 6], 7,[6 ,7 [4 , 5]]]  //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


// different format --> intoarray 
console.log (Array.isArray("hitesh"))
console.log (Array.from("hitesh"))
console.log (Array.from({name: "hitesh"}))    // interesting -->  returns empty (use keys or values)


let score1 = 100
let score2 = 200
let score3 = 300
// Returns a new array from a set of elements --> .of

console.log(Array.of(score1, score2, score3));   