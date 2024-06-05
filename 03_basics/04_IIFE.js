// immediately invoked function expressions (IIFE)
// to remove the global scpoe pollution inside  a function & also for immediately execution 



(function chai(){
    console.log(`DB CONNECTED`)
})();

//() --> function defination
//() --> execution

(function aurCode(){
    console.log(`DB CONNECTED`)
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})(`sandhya`)


