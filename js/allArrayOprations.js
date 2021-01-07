//Array.concat(arrays to concat)
let array1=[1,2,3,4,5,6,7,8,9,10];
let array2=[100,200,300,400,500]
console.log("\n----------- Concat Example  ---------------------");
console.log(array1.concat(array2));//OUTPUT:[1,2,3,4,5,6,7,8,9,10,100,200,300,400,500]
console.log(array1.concat(array2,array1));//OUTPUT:[1,2,3,4,5,6,7,8,9,10,100,200,300,400,500,1,2,3,4,5,6,7,8,9,10]

//Array.constructor(Initialization array) it is same for Object and strings also
let ar=["R","A","V","I"];
console.log("\n----------- constructor Example  ---------------------");
console.log(ar.constructor(array2));//[100,200,300,400,500]
console.log(ar);

//The copyWithin(coping value position,copy to position) method copies array elements to another position in the array, overwriting the existing values.
//This method will never add more items to the array.
//Note: this method overwrites the original array.
let fruits=["apple","Mango","finapple","Orrange","Banana"];
fruits.copyWithin(1,4)
console.log("\n----------- copyWithin Example  ---------------------");
console.log(fruits);//["apple", "Banana", "finapple", "Orrange", "Banana"]



//The entries() method returns an Array Iterator object with key/value pairs.
//For each item in the original array, the new iteration object will contain an array with the index as the key, and the item value as the value:
//Note: This method does not change the original array.
let entries=fruits.entries();
console.log("\n----------- entries Example  ---------------------");
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
console.log("\n----------- every() Example  ---------------------");
console.log(ages.every(checkAdult)); // if all condtion is true it will return TRUE Else FALSE    OUTPUT: False
console.log(ages2.every(checkAdult));// if all condtion is true it will return TRUE Else FALSE    OUTPUT: True


// The fill(),array.fill(value, start, end) method fills the specified elements in an array with a static value.
// You can specify the position of where to start and end the filling. If not specified, all elements will be filled.
// Note: this method overwrites the original array.
console.log("\n----------- fill() Example  ---------------------");
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
console.log("\n----------- filter() Example  ---------------------");
console.log(filteredData);// [32, 16]

filteredData=ages.filter((item,index,array)=>{
    return item >=32;
})
console.log(filteredData);//[32, 33, 40]


// The find(), array.find(function(currentValue, index, arr),thisValue) method returns the value of the first element in an array that pass a test (provided as a function).
// The find() method executes the function once for each element present in the array:
// If it finds an array element where the function returns a true value, find() returns the value of that array element (and does not check the remaining values)
// Otherwise it returns undefined
// Note: find() does not execute the function for empty arrays.
// Note: find() does not change the original array.
//it is somthing simmiler to IndexOf() but it returns first found item index find() returns value
console.log("\n----------- find() Example  ---------------------");
console.log(ages.find((item,index,arr)=>{
    return item >18
}))//32
console.log(ages2.find((item,index,arr)=>{
    return item <=20
}))//20


// The findIndex(),array.findIndex(function(currentValue, index, arr), thisValue) method returns the index of the first element in an array that pass a test (provided as a function).
// The findIndex() method executes the function once for each element present in the array:
// If it finds an array element where the function returns a true value, findIndex() returns the index of that array element (and does not check the remaining values)
// Otherwise it returns -1
// Note: findIndex() does not execute the function for array elements without values.
// Note: findIndex() does not change the original array.
//it is ame as IndexOf(value) but here will pass function with condition instaed of value
console.log("\n----------- findIndex() Example  ---------------------");
console.log(ages.findIndex((curritem,index,arr)=>{
    return curritem >18
}))//0
console.log(ages2.findIndex((curritem,index,arr)=>{
    return curritem <=20
}))//2


// The forEach() method calls a function once for each element in an array, in order.
// Note: the function is not executed for array elements without values.
//array.forEach(function(currentValue, index, arr), thisValue)
console.log("\n----------- forEach() Example  ---------------------");
ages.forEach((curritem,index,arr)=>{
    console.log(curritem);
})


//The Array.from() method returns an Array object from any object with a length property or an iterable object.
//Array.from(object, mapFunction, thisValue)
console.log("\n----------- Array.from() Example  ---------------------");
let formArr = Array.from("ABCDEFG");
console.log(formArr);//["A", "B", "C", "D", "E", "F", "G"]


// The includes() method determines whether an array contains a specified element.
// This method returns true if the array contains the element, and false if not.
// Note: The includes() method is case sensitive.
console.log("\n----------- includes() Example  ---------------------");
console.log(formArr.includes('D'));//True
console.log(formArr.includes('M'));//False
console.log(formArr.includes('a'));//false  it check with case sensitive


// The indexOf() method searches the array for the specified item, and returns its position.
// The search will start at the specified position, or at the beginning if no start position is specified, and end the search at the end of the array.
// Returns -1 if the item is not found.
// If the item is present more than once, the indexOf method returns the position of the first occurence.
// Note: The first item has position 0, the second item has position 1, and so on.
// Tip: If you want to search from end to start, use the lastIndexOf() method
//array.indexOf(item, start)
console.log("\n----------- indexOf() and lastIndexOf() Example  ---------------------");
let indexOfArray=[1,2,3,4,5,6,4,3,2,1];
console.log(indexOfArray.indexOf(3));//2
console.log(indexOfArray.indexOf(10));//-1
console.log(indexOfArray.indexOf(3,4));//7    // Search starts form 4th index
console.log(indexOfArray.lastIndexOf(2));//8   // search starts from end of the array and returns first element from last


// The isArray() method determines whether an object is an array.
// This function returns true if the object is an array, and false if not.
//Array.isArray(obj)
console.log("\n----------- Array.isArray() Example  ---------------------");
console.log(Array.isArray(indexOfArray));//True
console.log(Array.isArray("RAVI KIRANA"));//False
console.log(Array.isArray({name:"Ravi kirana"}));//False


// The join() method returns the array as a string.
// The elements will be separated by a specified separator. The default separator is comma (,).
// Note: this method will not change the original array.
//array.join(separator)
console.log("\n----------- join() Example  ---------------------");
console.log(formArr.join());//A,B,C,D,E,F,G   by default ','  comma added as delimiter
console.log(formArr.join(' '));//A B C D E F G
console.log(formArr.join('#'));//A#B#C#D#E#F#G





