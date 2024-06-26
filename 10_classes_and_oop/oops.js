const user = {
    username: "sandhya",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from Databases");
        // console.log(`Username: ${this.username}`);
        console.log(this)
    }

}
console.log(user["username"]);
// console.log(user.getUserDetails());
// console.log(this);              // {}

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this      // implicitly defined...
}

const userOne = new User("hello", 12, true)
const userTwo = new User("Chaiaurcode", 45, false)          // values gets overwrite.......
console.log(userOne.constructor);
console.log(userTwo);

