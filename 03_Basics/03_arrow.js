const user={
    username:"Areeb",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this)
    }
}

user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

console.log(this)


function chai(){
    let username="Areeb"
    console.log(this.username)
}
chai()
// this can be only used inside the objects not in functions!



const chai1=() =>{
    let username="Areeb"
    console.log(this)
}
chai1()

// basic arrow function   () => {}

const addTwo = (num1, num2) =>{
    return num1+num2
}
console.log(addTwo(2,5))

/*  this is the implicit arrow function , used in react!*/

const addedTwo=(num1,num2)=>(num1+num2)
console.log(addedTwo(3,5))


// if we want to return objects
const obj=()=>({username:"Areeb"})
console.log(obj())