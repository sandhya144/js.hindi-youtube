// for of

// [" "," "," "]
// [{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr){      // (const iterator of object)
//     console.log(num); 
 }

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`)  
}

// maps --> objects holds the key value pairs and remembers the original
// insertion order of the keys... (you will get the all unique values inside it)

const map = new Map()
map.set('IN', "INDIA")
map.set('USA',"United states of america")
map.set('Fr',"France")
map.set('IN', "INDIA")

// console.log(map);

for (const [key, value] of map) {         // seperate
    // console.log(key, ':-', value)
}

const myObject = {
    'game1': 'NFS',
    'game2': 'spideramn'
}

for (const [key, value] of myObject) {         // seperate
    // console.log(key, ':-', value)   // myObject is not iterable
}
