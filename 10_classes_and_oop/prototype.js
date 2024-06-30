// let myName = "namaste     "
// let myLogo = "MissIndia     "

// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.sandy = function(){
    console.log(`sandy is present in all objects`);
}

Array.prototype.heysandy = function(){
    console.log(`sandy says hello`);
}

// heroPower.sandy()
myHeros.sandy()
myHeros.heysandy()
// heroPower.heysandy()



// inheritance.........   // how u can access the properties of others


const user = {
    name: "Chai aur code",
    email: "Sandhya@google.com",
}

const Teacher = {
    makevideo: true 
}
const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport,           // it will borrow the properties of TeachingSupport....
}

Teacher.__proto__ = user

// modern syntax .....

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Chaiaurcode      "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`true length is:${this.trim().length} `);
}

anotherUsername.trueLength()
"sandy".trueLength()
"coldcofee".trueLength()
