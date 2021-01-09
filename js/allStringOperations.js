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
console.log(endstr.includes('welcome',13));//true
console.log(endstr.includes('welcome',20));//true


// The indexOf() method returns the position of the first occurrence of a specified value in a string.
// This method returns -1 if the value to search for never occurs.
// Note: The indexOf() method is case sensitive.
//string.indexOf(searchvalue, start)
console.log('\n------------------------ indexOf() -----------------------');
console.log(endstr.indexOf('welcome'));//13
console.log(endstr.indexOf('welcome',13));//13
console.log(endstr.indexOf('welcome',20));//-1
console.log(endstr.indexOf('ravi',13));//-1
console.log(endstr.indexOf('z'));//-1
console.log(endstr.indexOf('e'));//1


// The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.
// Note: The string is searched from the end to the beginning, but returns the index starting at the beginning, at position 0.
// This method returns -1 if the value to search for never occurs.
// Note: The lastIndexOf() method is case sensitive!
//string.lastIndexOf(searchvalue, start)
console.log('\n------------------------ lastIndexOf() -----------------------');
console.log(endstr.lastIndexOf('e'));//35


// The length property returns the length of a string (number of characters).
// The length of an empty string is 0.
//string.length
console.log('\n------------------------ length() -----------------------');
console.log(endstr.length);//37


// The localeCompare() method compares two strings in the current locale.
// The locale is based on the language settings of the browser.
// The localeCompare() method returns a number indicating whether the string comes before, after or is equal as the compareString in sort order.
//string.localeCompare(compareString)
console.log('\n------------------------ localeCompare() -----------------------');
var compstr1 = "ab";
var compstr2 = "cd";
var compstr3 = "ab";
console.log(compstr1.localeCompare(compstr2));//-1 not equal
console.log(compstr1.localeCompare(compstr3));// 0 equal
console.log(compstr2.localeCompare(compstr3));// 0 equal


// The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
// Note: If the regular expression does not include the g modifier (to perform a global search), the match() method will return only the first match in the string.
// This method returns null if no match is found.
//string.match(regexp)
console.log('\n------------------------ match() -----------------------');
var matchstr = "The rain in SPAIN stays mainly in the plain";
console.log(matchstr.match(/ain/g));//["ain", "ain", "ain"] //case senstive search
console.log(matchstr.match(/ain/gi));//["ain","AIN", "ain", "ain"]  //search without case senstive


// The prototype property allows you to add new properties and methods to existing object types.
// Note: Prototype is a global property which is available with almost all JavaScript objects.
//object.prototype.name = value
console.log('\n------------------------ prototype -----------------------');
function Employee(name, jobtitle, born) {
    this.name = name;
    this.jobtitle = jobtitle;
    this.born = born;
  }
  Employee.prototype.salary = 2000;
  Employee.prototype.print=function(){
      console.log(this);
      console.log(this.name, "working as ",this.jobtitle," born on ",this.born," and getting salary ",this.salary);
  }
  
  var fred = new Employee("Fred Flintstone", "Caveman", 1970);
  console.log(fred);//salary 2000
  fred.salary=50000;
  console.log(fred.salary);//salary 50000
  var fred2 = new Employee("Ravi", "Kirana", 1989);
  console.log(fred2.salary);//salary 2000
  fred.print();//Fred Flintstone working as  Caveman  born on  1970  and getting salary  50000
  fred2.print();//Ravi working as  Kirana  born on  1989  and getting salary  2000

  
  //The repeat() method returns a new string with a specified number of copies of the string it was called on.
  //string.repeat(count)
  console.log('\n------------------------ repeat -----------------------');
  console.log(greet.repeat(2));//HELLO WORLDHELLO WORLD
  console.log(greet.repeat(3));//HELLO WORLDHELLO WORLDHELLO WORLD


// The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.
// Note: If you are replacing a value (and not a regular expression), only the first instance of the value will be replaced. To replace all occurrences of a specified value, use the global (g) modifier (see "More Examples" below).
// Read more about regular expressions in our RegExp Tutorial and our RegExp Object Reference.
// This method does not change the original string.
// string.replace(searchvalue, newvalue)
console.log('\n------------------------ replace -----------------------');
var replacestr = "Visit Microsoft!";
var res = replacestr.replace("Microsoft", "My world");
console.log(res);//Visit My world
var replacestr2 = "Mr Blue has a blue house and a blue car";
var res2 = replacestr2.replace(/blue/g, "red");
console.log(res2);//Mr Blue has a red house and a red car
var res3 = replacestr2.replace(/blue/gi, "red");
console.log(res3);//Mr red has a red house and a red car
var res4=replacestr2.replace(/blue|house|car/gi,(val)=>{
    return val.toUpperCase();//Mr BLUE has a BLUE HOUSE and a BLUE CAR
});
console.log(res4);


