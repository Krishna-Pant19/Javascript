//********************Date**********************

const date1 = new Date();
console.log(date1); //Not readable format of date and time.
console.log(date1.toString()); //Readable format of both date and time.
console.log(date1.toDateString()); // Readable format of date only.e.g. Sun Nov 15 2026
console.log(date1.toTimeString()); // Readable format of time only.
console.log(date1.toLocaleString()); // Readable format of both date and time but do the work work what locle string is used for adding commas in between therefore it add comma between date and time.
console.log(date1.toLocaleDateString()); // readable format in local format for date only. e.g. 15/11/2026
console.log(date1.toLocaleTimeString()); //readable format in local format for time only.

const date2 = new Date(2024,1,12);
console.log(date2.toDateString()); // the counting starts from 0 therefore january is 0 andfebruary is 1 that"s why the output will be Mon Feb 12 2024

let myTimeStamp = Date.now();
console.log(myTimeStamp); //output will be in total millisec till where js has started i.e. from 1970
console.log(myTimeStamp/1000); // for getting the output in sec we divide by 1000
console.log(Math.floor(myTimeStamp/1000)) // since when the output is changed to sec the millisec part comes in point also and to remove it we use floor option.

let newDate = new Date() // new is used to create an object from a constructor function or class.
console.log(newDate.getFullYear()) //output will be 2026
console.log(newDate.getMonth())  //output will be 10 but the month is 11(november) why because the counting starts from 0.