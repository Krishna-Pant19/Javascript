const score = 500;
const num1 = new Number(1000); 
console.log(score) // normally output will be 500
console.log(num1) // output will be [Number:1000] here the value is specified as a number object and not a primitive value. This is beacause we have used the "new" keyword to create a number object.

console.log(num1.toString()) // output will be 1000 here but the value will converted to string and will not exist as a number object anymore.
console.log(num1.toFixed(2)) // output will be 1000.00 here that is till two decimal places and the output will be a string.tofixed() method isused where things like gst,tax etc kind of things are calculated which can be till many decimal places but we want to round it off to two decimal places. It will round off the number to the nearest value and will return the string.


const num2 = 37.676767;
console.log(num2.toPrecision(2)) // till 2 significant digits the output will be 38 here. toPrecision() method is used to round off the number to the nearest value and will return the string.
console.log(num2.toPrecision(4)) // output will be 37.68 here.
console.log(num2.toPrecision(1)) // output will be in exponential form since there are two significant digit before the decimal but we have taken till just one precision.Therefore the output will be 4e+1 here.
console.log(num2.toExponential(5)) // samjh nhi aaya 


const num3 = 3729274;
console.log(num3.toLocaleString())


//*************************** MATHS *******************************

console.log(Math.abs(-5)) //output will be 5 here. abs means absolute value
console.log(Math.abs(5)) // output will be 5 here.
console.log(Math.abs(-5.5)) // output will be 5.5 here.
console.log(Math.round(5.5)) // output will be 6 here.
console.log(Math.round(5.4)) // output will be 5 here.

console.log(Math.ceil(5.1)) // output will be 6 here.ceil() means ceiling value i.e. the top value.
console.log(Math.floor(5.9)) // output will be 5 here.floor() means floor value i.e. the bottom value.
console.log(Math.min(5,10,15,20)) // output will be the minimum value i.e. 5 here.
console.log(Math.max(5,10,15,20)) // output will be the maximum value i.e. 20 here.

console.log(Math.random()) // output will be a random number between 0 and 1 here.It will generate a random number between 0 and 1.
console.log(Math.random()*10) // output will be a random and will be multiplied by 10 here.

//here is the twist if you want to generate a random number between 1 to 10 for ignoring the decimal values which comes after 0 then 

console.log((Math.random()*10)+1) // output now will be greater than 1 by adding 1 this we do because if you have a random value such as 0.02 then after multiplying by 10 also you will get 0.2 which is less than 1 so to avoid that we add 1 here.

console.log(Math.floor((Math.random()*10)+1)) // by this the value will never be less than 1 and greater than 10 because in above case it can also be 10.999 becuase of adding 1 so to avoid that we use floor() method which will round off the value to the nearest lower value. Therefore the output will be between 1 and 10 here.
console.log(Math.round((Math.random()*10)+1)) // these two we use to get the specific random number without decimal values.
console.log(Math.ceil(Math.random()*10)) // these two we use to get the specific random number without decimal values and also using ceil() we will not get less than 1 and greater than 10 because in above case it can also be 10.999 becuase of adding 1 so to avoid that we use ceil() method which will round off the value to the nearest upper value. Therefore the output will be between 1 and 10 here.


