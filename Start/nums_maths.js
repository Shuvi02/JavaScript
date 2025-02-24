const score = 400;
console.log(score);

const score1 = new Number(400);
console.log(typeof(score1));

console.log(score1.toString().length); //after converting to string we can use all string methods
console.log(typeof score1);
console.log(score1.toFixed(2)); //400.00 it gives value upto 2 decimal place


const score3 = 1123.8966;
console.log(score3.toPrecision(3)); //1.12e+3
console.log(score3.toPrecision(4)); //1124
console.log()

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); //USD
const hundreds1 = 1000000;
console.log(hundreds1.toLocaleString('en-IN'));  //indian way


//++++++++++++++++++++++++ MATHS+++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4)); //4
console.log(Math.round(4.7)); //5
console.log(Math.round(4.4)); //4
console.log(Math.ceil(4.1)); //5 takes upper value
console.log(Math.floor(4.9)); //4 takes lower value
console.log(Math.min(9,8,3,5,6,2,9,3,8)); //2
console.log(Math.max(9,8,3,10)) //10
console.log(Math.sqrt(9)) //3
console.log(Math.pow(3,3)); //27
console.log(Math.PI); //3.141592653589793
console.log(Math.random()); //random value between 0 and 1
console.log(Math.random() *10); //random value between 0 and 10 in points
console.log(Math.floor(Math.random() * 10)); //random value between 0 and 9 floor will remove the decimal

//we add 1 bcuz it can be a case where it will give 0 value so in such a case it we add up 1 and we get result as 1
console.log(Math.floor(Math.random() * 10) + 1); //random value between 1 and 10


const min = 10;
const max = 20;
//to get a value in certain range use max - min 
//to avoid getting 0 as output do +1

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //random value between 10 and 20
console.log(Math.floor(Math.random() * (max-min+1))); //random value between 0 and 10
