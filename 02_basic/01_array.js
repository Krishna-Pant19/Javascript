//****************************Array********************************

const array1 = [1,2,3,4,5,"krishna",true]
console.log(array1); // to get the whole value of array as the output 

console.log(array1[3]); // 3 is the index value js arrays are zero-indexed therefore the value will be 4

console.log(array1[0]); // 0 is the index value and in js values start from 0 therefore the value will be 1 according to the given array of 1


//**************************Arrays Method*******************************

const array2 = new Array(1,2,3,4) //Note: Array() can be called with or without new. Both create a new Array instance.
console.log(array2) //using new Array is the way to create a array is same as directly writing an array 

console.log(array2.length) // Method to find length 

const array3 = [10,20,30,40,50]
array3[1] = 100                 // 1 uska index hai therefore second place wala value likha jayega 
console.log(array3);

array3.push(70) // used to add element to the the array here output will be [10,20,30,40,50,70] 
console.log(array3) 

const array4 = [11,12,13,14,15]
array4.pop()  // used to delete the last element in the array 
console.log(array4)

const array5 = [10,20,30]
array5.shift()    // used to remove the first element from the array 
console.log(array5) 

const array6 = [10,20,30]
array6.unshift(40) // used to add the element in the first place push used to add but in the last place 
console.log(array6)

//splice()- Add,remove or replace element at any position in an array
const array7 = [10,20,30,40,50]
array7.splice(0,2,60,70) 
console.log(array7)

//splice(at or from,deletecount,additem1,additem2)
// splice is used to add, remove or replace elements at any position in an array.

const arr = [10,20,30,40,50]
arr.splice(1,2) // at index 1 delete 2 therefore 20and 30 will be deleted that's why the output is [10,40,50]
console.log(arr)

const arr2 = [10,20,30,40,50]
arr2.splice(1,2,60,70) // at/from index 1 delete 2 and add  item 60,70 in that place therefore output will be [10,6,70,40,50]
console.log(arr2)

// slice-extraction a portion of an array without chnaging the original array
// arr.slice(start,end) 
// Note-start wale ko nhi katega but end wale ko hata dega (but kaam nhi kar rha)

const arr3 = [10,20,30,40,50]
console.log(arr3.splice(1,4)) // output will be [20,30,40,50]

//LastIndexOf()-To know when the element last occured

const arr4 = [10,20,30,20,50]
console.log(arr4.lastIndexOf(20)) // Since 20 ka last index 3 hai therofre output be 3
console.log(arr4.lastIndexOf(2)) // Output is -1

//Includes-Checks whether an element exists in array or not 

const arr5 = [10,20,30,40,50]
console.log(arr5.includes(20)) // true
console.log(arr5.includes(70)) // false

//find()-returns the first element that satisfies the condition

const arr6 = [10,20,30,40,50]
console.log(arr6.find(num => num>25)) // since first number is 30 that is greater than 25 therefore returns 30
console.log(arr5.find(num => num>60)) //undefined

//Map() - Creates a new array by performing an operation

const arr7 = [10,20,30,40,50]
console.log(arr7.map(num => num>25)) //[false,false,ture,true,true]
console.log(arr7.map(num =>num*2))   //[20,40,6,80,100]

//filter-Creates a new array containing only element that satisfy equation

const arr8 = [10,20,30,40,50]
console.log(arr8.filter(num => num>25)) //output will be [30,40,50] that's the diff between filter and map. Map can also give boolean values as answer it doesn't give directly a array for comaprision purpose

//forEach()-executes a function for every element in an array.

const arr9 = [10,20,30,40,50]
console.log(arr9.forEach(num =>{console.log(num)})) // Here output console.log is giving an undefined value as an answer otherwise the output will be like 10,20,30,40,50 but in row format.
console.log(arr9.forEach(num =>{console.log(num>20)})) //output false,false,true,true,true,undefined in row format
arr9.forEach(num =>{console.log(num=20)}) //output will be 20,20,20,20,20 in row format

//Sort()- sort elements in an array

const arr10 = [40,10,30,70,20]
console.log(arr10.sort()) // output will be [10,20,30,40,70]

//Note: By default js sort values as strings

//Join()-converts array element into a string using a separator

const arr11 = ["i","love","js"]
console.log(arr11) // output will be ['i','love','js']
console.log(arr11.join(" ")) // i love js
console.log(arr11.join("")) // ilovejs