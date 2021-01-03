//Array.concat(arrays to concat)
let array1=[1,2,3,4,5,6,7,8,9,10];
let array2=[100,200,300,400,500]
console.log(array1.concat(array2));//OUTPUT:[1,2,3,4,5,6,7,8,9,10,100,200,300,400,500]
console.log(array1.concat(array2,array1));//OUTPUT:[1,2,3,4,5,6,7,8,9,10,100,200,300,400,500,1,2,3,4,5,6,7,8,9,10]

//Array.constructor(Initialization array)
let ar=["R","A","V","I"];

console.log(ar.constructor(array2));//[100,200,300,400,500]
console.log(ar);