//Array.concat(arrays to concat)
let array1=[1,2,3,4,5,6,7,8,9,10];
let array2=[100,200,300,400,500]
console.log("----------- Concat Example  ---------------------");
console.log(array1.concat(array2));//OUTPUT:[1,2,3,4,5,6,7,8,9,10,100,200,300,400,500]
console.log(array1.concat(array2,array1));//OUTPUT:[1,2,3,4,5,6,7,8,9,10,100,200,300,400,500,1,2,3,4,5,6,7,8,9,10]

//Array.constructor(Initialization array) it is same for Object and strings also
let ar=["R","A","V","I"];
console.log("----------- constructor Example  ---------------------");
console.log(ar.constructor(array2));//[100,200,300,400,500]
console.log(ar);

//The copyWithin(coping value position,copy to position) method copies array elements to another position in the array, overwriting the existing values.
//This method will never add more items to the array.
//Note: this method overwrites the original array.

let fruits=["apple","Mango","finapple","Orrange","Banana"];
fruits.copyWithin(1,4)
console.log("----------- copyWithin Example  ---------------------");
console.log(fruits);//["apple", "Banana", "finapple", "Orrange", "Banana"]



//The entries() method returns an Array Iterator object with key/value pairs.
//For each item in the original array, the new iteration object will contain an array with the index as the key, and the item value as the value:

let entries=fruits.entries();
console.log("----------- entries Example  ---------------------");
for(let item of entries){
    console.log(item);
}


