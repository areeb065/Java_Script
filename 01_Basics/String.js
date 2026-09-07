const name="Areeb"
const repoCount=50

//console.log(name+ repoCount + " value") //its old version

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//This is the modren way of concatination of string!!


const gameName=new String('Areebs')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName);
console.log(gameName.charAt(3));

const url ="https://Areeb.com/%20@esehi"
console.log(url.replace('%20',"_"))