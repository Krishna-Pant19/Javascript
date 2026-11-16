let name1 = "krishna";
let age = '19';

//here krishna and 19 are strings 

//Concatenation

let first = "krishna";
let second = "pant";

console.log(first + second)
console.log(first + " " + second)

let name2 = "kashvika";
console.log(name2.length) //Length of the string

let word = "Hello World";
console.log(word[0]) //character counting starts from 0
console.log(word[5]) //space is also counted as a character


let name = "krishna";
console.log(name.toUpperCase());
console.log(name.toLowerCase());

//Special concept:template literals

let name5 = "krishna";
let age5 = 19;

//Old way of concatenation
console.log("My name is " + name5 + " and my age is " + age5);

//New way of concatenation using template literals
console.log(`my name is ${name5} and my age is ${age5}`) //using backticks we can change the value as much we want and it will be reflected in the output. This is called template literals.

//Strings are immutable in javascript.It means that once the string is created it cannot be changed. If we try to change the string it will create a new string in memory and the old string will remain unchanged.

let str = "hello";
str[0] = "H"; //this will not change the string because strings are immutable in javascript. It will create a new string in memory and the old string will remain unchanged.
console.log(str) //output will be hello and not Hello

//*****************Methods of string*****************

//Length,toUpperCase(),toLowerCase(),charAt(),indexOf(),slice(),replace(),trim(),includes()

str1 = "hello world";
console.log(str1.charAt('2')) // output will be l because it is the character at index 2 in the string "hello world" basically batayega character kaunse index pe hai and index start from 0
console.log(str1.indexOf('h'))// output will be 0 because char ka index 0 pe hai 

// substring and slice ki kahani 

//they both are used to extract a part of the string but the difference is that slice can take negative index and sustring cannot .Also substring will swap the index if the first index is greater than the second index but slice will not do that. Also substring will treat negative index as 0 but slice will treat negative index as length of the string + negative index.

let str2 = "hello world";
console.log(str2.slice(0,5)) //output will be hello endpoint is not included
console.log(str2.substring(0,5)) //output will be hello endpoint is not included

console.log(str2.slice(-5)) //output will be world because it will take the last 5 characters of the string
console.log(str2.substring(-5)) //output will be hello world because substring will treat negative index as 0

console.log(str2.slice(5,0))//output will be empty string in case of slice 
console.log(str2.substring(5,0))//output will be hello because substring will swap 5,0 to 0,5 and then return the string from index 0 to 5 which is hello 

//Replace()

let str3 = "I love Javascript";
console.log(str3.replace("Javascript","Python")) //output will be I love Python because it will replace the first occurrence of Javascript with Python

let str4 = "Java Java Java";
console.log(str4.replace("Java","Python")) //output will be Python Java Java because it will replace the first occurrence of Java with Python
console.log(str4.replaceAll("Java","Python")) //output will be Python Python Python because it will replace all the occurrences of Java with Python

//Trim()

//removes spaces from both ends of the string but not from the middle of the string

let str5 = "  Hello world   ";
console.log(str5.trim())

//Includes()

//check whether a particular word,character or substring is present in the string or not.
//It returns boolean value true of false

let str6 = "Javascript is a programming language";
console.log(str6.includes("Javascript")) //output will be true
console.log(str6.includes("javascript")) //output will be false because it is case sensitive