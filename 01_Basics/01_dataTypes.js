"use strict"; //treat all JS code as newr version
//alert(2+3) we are usinig nodejs not browser !
console.log("Hey !")

/*
number,strings, booleean,null =>standalone value(khali hai)
undefine=>not define
symbol=>unique
*/
console.log(typeof(null)) //object !!
console.log(typeof(undefined))//undefined !!

//Premitive DT
//String,Number,Boolean,Null,Undefined,Symbol,BigInt
const score=100
const outSideTemp=100.4
let userEmail

//Reference (Non Primitive)
//array,Objects,Functions
const heros=["ShaktiMan","Hyperman"];

let myObj={
    name:"Areeb",
    age:22
}

const myFunction=function(){
    console.log("Hello world");
}

console.log(typeof(myObj))
console.log(typeof(myFunction))
console.log(typeof(heros))