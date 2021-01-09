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