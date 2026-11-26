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

//splice()- Add,remove
const array7 = [10,20,30,40,50]
array7.splice(0,2,60,70) 
console.log(array7)