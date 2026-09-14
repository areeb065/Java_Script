//immediately Invoked Function Expressions(IIFE)

/* ITS a normal function

function chai(){
    console.log(`DB CONNECTED`)
    console.log("DB CONNECTED")

}
chai()

*/

//immediately Invoked Function Expressions(IIFE)
//(function)(call)   tahts alll iife !

(function chai(){
    // named iife
    console.log(`DB CONNECTED`)
    console.log("DB CONNECTED")

})();


( (name) =>{
    console.log(`HELLO 2 ${name}`);
})("Areeeb");