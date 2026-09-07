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