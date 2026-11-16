console.log(2 + 2);
console.log(2==2);
console.log(2>=1);
console.log(2!=2);


console.log(null>0);    //1
console.log(null==0);   //2
console.log(null>=0);   //3

//reason for these unpredictable output is because of type coercion in javascript.
//this is because the equality check and comparison operators acts differently.
//comparison operation converts null to a number treatingit as 0 but equality check does not convert null to a number and treats it as a falsy value.
//That's why null>0 is false, and null>=0 is true.


console.log(undefined>0);  // False he rahega teeno me 
console.log(undefined==0);
console.log(undefined>=0);


// strict check (===) this operation is  used to strictly check the value and datatype of the variable. it will return true only if both value and datatypes are same otherwise it will return false

console.log(2==="2") // false because 2 is number and "2" is string
console.log(2===2); // true becuase both the value and datatypes are same 



