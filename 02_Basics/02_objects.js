//singleton (constructors)=>create like this //Object.create
//const tinderUser=new Object()

//object literals

const mySym=Symbol("key1")

const JsUser={
    name:"Areeb",
    age:22,
    [mySym]:"mykey1",
    location:"Bangaluru",
    isLoggedIn:false,
    email: "Areeb@gmail.com",
    lastLoginginDays:["Monday","Saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[mySym])
console.log(typeof(JsUser[mySym]))

//JsUser.email="AreeAgamil.com"
//Object.freeze(JsUser)
JsUser.email="Moha@gamil.com"
console.log(JsUser)


JsUser.greeting=function(){
    console.log("Hello js user");
}
JsUser.greetingTwo=function(){
    console.log(`Hello js user,${this.name}`);//giving the reference name
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())

//object literals
const tinderUser={} //inserting the object elements!
tinderUser.id="123abc"
tinderUser.name="Samy"
tinderUser.isLoggedIn=false
console.log(tinderUser)

const regualarUser={
    eamil:"samy@gamil.com",
    fullName:{
        userfullname:{
            firstname:"Mohammed",
            lastNmae:"Areeb"
        }
    }
}
console.log(regualarUser.fullName.userfullname)

const obj1={1:"a",2:"b"}

const obj2={3:"a",4:"b"}
//const obj3={obj1,obj2}
const obj3={...obj1,...obj2} //split and join
console.log(obj3)

//objects inside the array!
const user=[
    {
        id:"1a",
        email:"a@gmail.com"
    },
    {
        id:"1ab",
        email:"ab@gmail.com"
    }
]
console.log(user[0].email)
console.log(user[1].email)

console.log(Object.keys(tinderUser))//keys & values are stored as array in objects
console.log(Object.values(tinderUser))


const course={
    cousename:"JS in Hindi",
    price:999,
    courseInstructor:"Hithesh"
}
//console.log(course.courseInstructor)
const {courseInstructor:Instructor}=course
console.log(Instructor)//destructuring

/*const navbar=({company})=>{
   DESTRUCTURING IN JS ! USED MUCH IN REACT!
}
navbar(company="Hitesh")*/

//API's =>its like objects without object name &  keys and objects are in string!
/*{
  "login": "hiteshchoudhary",
  "id": 11613311,
  "public_gists": 1,
  "followers": 4140,
  "following": 65,
  "created_at": "2013-03-23T11:12:52Z",
  "updated_at": "2024-04-09T17:22:55Z"
}
*/
// we use api's by converting it to objects!