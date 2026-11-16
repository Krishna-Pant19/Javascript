//Stack => Primitive 
//Hash => Non-Primitive(Reference)

//Stack => Memory can be changed again since you're storing the value directly in the variable. So, when you change the value of score2, it doesn't affect score1 because they are stored in different memory locations.This is because in stack memory you get a copy of the value when you assign it to another variable.


let score1 = 100;
let score2 = score1
console.log(score1)
console.log(score2)


score2 = 200;
console.log(score1)
console.log(score2)

//Heap => Memory can be changed again but since you're storing the original reference value the change in score2 will let the change happen in score1 also.

let obj1 = {
    Name:"Krishna",
    age:"19"
}

console.log(obj1)

let obj2 = obj1
console.log(obj2)

obj2.Name = "Meow"
console.log(obj1)
console.log(obj2) // change in obj2 will also let the change happen in obj1 also since obj1 and obj2 are on the same reference

