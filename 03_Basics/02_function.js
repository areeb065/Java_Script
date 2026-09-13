let a=300
if(true){
    let a=10
    const b=20
    console.log("Inner:",a)
}
console.log(a)
//let block-scoped ->cannot be reassigned !
//var function-scoped -> reassaingnd and redeclared !!


function one(){
    const username="Areeb"

    function two(){
        const website="Youtue"
        console.log(username)
    }
    //console.log(website);
    two()
}
one()

if(true){
    const username="Areeb"
    if(username==="Areeb"){
        const website="youtube"
        console.log(username +" " + website);
    }
    //console.log(website)
    console.log(username)
}
//console.log(username)