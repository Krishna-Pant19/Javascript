//How to add two arrays

const marvel = ["ironman","thor","captainamerica"]
const dc = [ "flash","superman","batman"]
const Heroes = marvel.push(dc)
console.log(Heroes) // ["ironman","thor","captainamerica",["flash","superman,"batman"]] that's equal to 4 that's the output basically push pushed the whole array inside the same array

let superHeroes = marvel.concat(dc) // output will be ["ironman","thor","captainamerica","flash","superman","batman"]
console.log(superHeroes)

// adding two arrays using spread syntax

const allsuperheroes = [...marvel, ...dc] // output will be ["ironman","thor","captainamerica","flash","superman","batman"]
console.log(allsuperheroes)


//Flat()-what if there is a possibility of having array inside array which is inside another array how can you get all the vlaue in single array is done by using Flat()

const arr1 = [1,2,3,4,5,[6,7,[8,9,[10]]]]
console.log(arr1.flat(Infinity)) // output will be 1,2,3,4,5,6,7,8,9,10
console.log(arr1.flat(2)) // inside array will open till first 2 arrays only.

//Array ko command dena

console.log(Array.isArray('Krishna')) //it says that is krishna an array therefore the output is false
console.log(Array.from("Krishna")) // output will make Krishna an array ['K','r','i','s','h','n','a']
console.log(Array.from({name:"Krishna"})) //Gives blank bracket as an ouput because using {} hamne ek object banaya hai not an array therefore Array padh nhi pa rha use

//Array.of - returns the new array from the set of elements
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)) //output will be [100,200,300] i.e. array me badal gya values 