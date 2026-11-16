// ********************* CONVERSION ***********************



let score = "100"

console.log(typeof score)
console.log(typeof (score) )

let score1 = Number(score) // Number() is a function which is used to convert string to number
console.log(typeof score1)


let score2  = "krishnapant"
console.log(typeof score2)

let score3 = Number(score2)
console.log(typeof score3)
console.log(score3) // NaN = > Not a Number (ye ek special value hai jo ki number ke sath kaam nhi karta hai)

//"33" => 33
//"33abc" => NaN
//"abc33" => NaN
//"33.33" => 33.33
//"true" => 1 (boolean to number conversion for true is 1 and for false is 0)
//"false" => 0


let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "hitesh" => true



//******************OPERATION***********************




console.log( 2**2) //used for power operation 
console.log(2^2) // bitwise XOR operation that's why it is giving 0 as output
                //other are just normal arithmetic operations like +, -, *, /, % (modulus operator)



let str1="hello"
let str2="world"
let str3=str1 + str2
console.log(str3)


let str4 = str1 + " " + str2
console.log(str4)


console.log("2" + 2)
console.log(2 + "2")
console.log("2" + "2")
console.log(2 + 2)

console.log("1" + 2 + 2)//output: "122" because first 1 and 2 are concatenated to give "12" and then "12" and 2 are concatenated to give "122"
console.log(1 + 2 + "2")//output: "32" because first 1 and 2 are added to give 3 and then 3 and "2" are concatenated to give "32"


