//Primitive Datatypes

//String,boolean,number,undefined,null,symbol

//What is symbol in javascript?

const id = Symbol("id");
const id2 = Symbol("id");

console.log(id==id2) // false because both are unique and different symbol

//Non-Primitive Datatypes(Reference Datatypes)
//Memory ko reference ke through access karte hai. Reference datatypes me hum directly value ko access nhi karte hai. Hum uske address ko access karte hai.

// array,object,function

//Array 

const array = ["modi","rahul","akhilesh"];
console.log(array) //=> output:["modi","rahul","akhilesh"]
console.log( typeof array) // => output: object (array is a type of object in javascript)

//Object

const obj = {
    name:"krishnapant",
    age:19
}

console.log(obj) // => output: {name: "krishnapant", age: 19}
console.log(typeof obj) // => output: object


//Function

function krishna(){
    console.log("hello world")
}

krishna() // => output: hello world
console.log(krishna) // => output: [Function: krishna]
console.log(typeof krishna) // => output:function (function is also a type of object in javascript known as functional object)


//function => keyword to create a function
//Krishna => name of the function
//() => parameter of the function
//{} => body of the function
//krishna() => runs the function and gives the output 



