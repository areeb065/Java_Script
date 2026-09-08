const arr=[0,1,2,3,4,5]
console.log(arr)
// Array Methods

arr.push(6)
console.log(arr)
arr.pop()
console.log(arr)

arr.unshift(9)
console.log(arr)


arr.shift(9)
console.log(arr)

//slice and splice **  splice manipulate the original array!
console.log("A",arr);

const myn1=arr.slice(1,3)
console.log(myn1)

console.log("B",arr)

const myn2=arr.splice(1,3)
console.log(myn2)

//some more methods
const marvel_heros=["THor","IronMan","SpiderMan"]
const dc_heros=["superMan","flash","batsMan"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros)
//[ 'THor', 'IronMan', 'SpiderMan', [ 'superMan', 'flash', 'batsMan' ] ]

//const all_heros=marvel_heros.concat(dc_heros) //concat
//console.log(all_heros)

const all_new_heros=[...marvel_heros, ...dc_heros] //concat and spread operater
console.log(all_new_heros)

const nested_array=[1,2,3,[4,5],7,[8,9,10,[5,7]]]
const real_array=nested_array.flat(Infinity)
console.log(real_array) //flat

