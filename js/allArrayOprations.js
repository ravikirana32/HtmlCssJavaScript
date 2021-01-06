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
//Note: This method does not change the original array.

let entries=fruits.entries();
console.log("----------- entries Example  ---------------------");
for(let item of entries){
    console.log(item);
}


// The every() method checks if all elements in an array pass a test (provided as a function).
// The every() method executes the function once for each element present in the array:
// If it finds an array element where the function returns a false value, every() returns false (and does not check the remaining values)
// If no false occur, every() returns true
// Note: every() does not execute the function for array elements without values.
// Note: every() does not change the original array

let ages = [32, 33, 16, 40];
let ages2 = [32, 33, 20, 40];

function checkAdult(age) {
  return age >= 18;
}
console.log("----------- every() Example  ---------------------");
console.log(ages.every(checkAdult)); // if all condtion is true it will return TRUE Else FALSE    OUTPUT: False
console.log(ages2.every(checkAdult));// if all condtion is true it will return TRUE Else FALSE    OUTPUT: True


// The fill(),array.fill(value, start, end) method fills the specified elements in an array with a static value.
// You can specify the position of where to start and end the filling. If not specified, all elements will be filled.
// Note: this method overwrites the original array.
console.log("----------- fill() Example  ---------------------");
fruits.fill("Ravi",2,4);
console.log(fruits);// ["apple", "Banana", "Ravi", "Ravi", "Banana"]
fruits.fill("Kiwi");
console.log(fruits);//["Kiwi", "Kiwi", "Kiwi", "Kiwi", "Kiwi"]


// The filter(),array.filter(function(currentValue, index, arr), thisValue) method creates an array filled with all array elements that pass a test (provided as a function).
// Note: filter() does not execute the function for array elements without values.
// Note: filter() does not change the original array.

let filteredData=ages.filter((item,index,array)=>{
    return item <=32;
})
console.log("----------- filter() Example  ---------------------");
console.log(filteredData);// [32, 16]

filteredData=ages.filter((item,index,array)=>{
    return item >=32;
})
console.log(filteredData);//[32, 33, 40]
