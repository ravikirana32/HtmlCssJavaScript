// The charAt() method returns the character at the specified index in a string.
// The index of the first character is 0, the second character is 1, and so on.
// Tip: The index of the last character in a string is string.length-1, the second last character is string.length-2, and so on (See "More Examples").
//string.charAt(index)
console.log('\n------------------------ charAt() -----------------------');
let greet="HELLO WORLD";
console.log(greet.charAt(1));//E
console.log(greet.charAt(6));//W


// The charCodeAt() method returns the Unicode of the character at the specified index in a string.
// The index of the first character is 0, the second character 1, and so on.
// Tip: You can use the charCodeAt() method together with the length property to return the Unicode of the last character in a string. The index of the last character is -1, the second last character is -2, and so on (See Example below).
//string.charCodeAt(index)
console.log('\n------------------------ charCodeAt() -----------------------');
console.log(greet.charCodeAt(1));//69
console.log(greet.charCodeAt(6));//87

// The concat() method is used to join two or more strings.
// This method does not change the existing strings, but returns a new string containing the text of the joined strings.
//string.concat(string1, string2, ..., stringX)
console.log('\n------------------------ concat() -----------------------');
var str1 = "Hello ";
var str2 = "world!";
var res = str1.concat(str2);
console.log(res);


// In JavaScript, the constructor property returns the constructor function for an object.
// The return value is a reference to the function, not the name of the function:
// For JavaScript numbers the constructor property returns function Number() { [native code] }
// For JavaScript strings the constructor property returns function String() { [native code] }
// For JavaScript booleans the constructor property returns function Boolean() { [native code] }
//string.constructor
console.log('\n------------------------ constructor() -----------------------');
console.log(str1.constructor);//ƒ String() { [native code] }
str1.constructor("Ravi Kirana");
console.log(str1.constructor("Ravi Kirana"));//Ravi Kirana


// The endsWith() method determines whether a string ends with the characters of a specified string.
// This method returns true if the string ends with the characters, and false if not.
// Note: The endsWith() method is case sensitive.
//string.endsWith(searchvalue, length)
console.log('\n------------------------ endsWith() -----------------------');
var endstr = "Hello world, welcome to the universe.";
console.log(endstr.endsWith("world", 11));//true
console.log(endstr.endsWith("o", 5));//true
console.log(endstr.endsWith("the"));//false
console.log(endstr.endsWith("universe."));//true
console.log(endstr.endsWith("universe.",25));//false


// The fromCharCode() method converts Unicode values into characters.
// Note: This is a static method of the String object, and the syntax is always String.fromCharCode().
//String.fromCharCode(n1, n2, ..., nX)
console.log('\n------------------------ String.fromCharCode() -----------------------');
console.log(String.fromCharCode(65),String.fromCharCode(66),String.fromCharCode(67));//A B C


// The includes() method determines whether a string contains the characters of a specified string.
// This method returns true if the string contains the characters, and false if not.
// Note: The includes() method is case sensitive.
//string.includes(searchvalue, start)
console.log('\n------------------------ includes() -----------------------');
console.log(endstr.includes('welcome'));//true
console.log(endstr.includes('Welcome'));//false
console.log(endstr.includes('ravi'));//false


