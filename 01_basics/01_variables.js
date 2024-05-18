const accountId = 144553
let accountEmail = "sandhya@google.com"
var accountPassword = "12345"
accountCity ="jaipur"
let accountState;
// accountId = 2 // not allowed

accountEmail ="hc@hc.com"
accountPassword = "212123"
accountCity = "Bengauru"

console.log(accountId);

/*
prefre not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail, accountPassword, accountCity, accountState ]);

