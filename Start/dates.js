// // //begining from 1Jan.1970
// let myDate = new Date();
// console.log(myDate);   // 2021-07-07T10:00:00.000Z

// console.log(myDate.toString());   // Wed Jul 07 2021 15:30:00 GMT+0530 (India Standard Time)
// console.log(myDate.getMilliseconds());
// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getFullYear());
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());
// console.log(myDate.getTime());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); //object


// //declaring a specific date
// let myDate1 = new Date("2002-05-29");
// console.log(myDate1); 
// console.log(myDate1.toString());
// console.log(myDate1.toDateString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myTimeStamp.toString());
console.log(myTimeStamp.toLocaleString());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);