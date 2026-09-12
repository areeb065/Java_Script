function SayName(){
    console.log("Areeb")
}
SayName()

function addTwoNumbers(num1,num2){
    console.log(num1+num2)
}
addTwoNumbers(2,"5") //concatination


//return 
function add_TwoNumbers(num1,num2){
    let result =num1+num2
    console.log("Areeb")
    return result
    console.log("Areeb")//code cannot run bcz after return cannot run
}
const result=add_TwoNumbers(4,6)
console.log("result:",result);

function loginUserMessage(UserName){
    if(UserName===undefined){
        console.log("Please enter the valid name")
        return
    }
    return `${UserName} just loggedin `
}
console.log(loginUserMessage("Areeb"))


//Rest operator
function calculateCarPrice(...num1){
    return num1
}
console.log(calculateCarPrice(200,300,500))

const user={
    username:"Areeb",
    prices:100
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject({username:"Sam",price:1000})

//Array
const newArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(newArray))