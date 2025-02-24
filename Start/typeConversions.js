"use strict";
let score = 33;
console.log(typeof(score) + " " + score);;

//this way we can convert number to string
let scoreStr = String(score);
console.log(typeof(scoreStr) + " " + scoreStr);

let scoreStr2 = "55abc";
console.log(typeof(scoreStr2) + " " + scoreStr2);

//this way we can convert string to number
let score2Num = Number(scoreStr2);
console.log(typeof(score2Num) + " " + score2Num);

//convet string to number
let scoreStr2Num = Number(scoreStr2);
console.log(typeof(scoreStr2Num) + " " + scoreStr2Num);

let scoreF3 = 55.5;
console.log(typeof(scoreF3) + " " + scoreF3);

//this way we can covert float to integer
let scoreF3Num = parseInt(scoreF3);
console.log(typeof(scoreF3Num) + " " + scoreF3Num);

//this way convert to string
let scoreF3Str = String(scoreF3);
console.log(typeof(scoreF3Str) + " " + scoreF3Str);

let score4 = null;
console.log(typeof(score4) + " " + score4);

//converting null to 0
let score4Num = Number(score4);
console.log(typeof(score4Num) + " " + score4Num);

//converting null to String
let score4Str = String(score4);
console.log(typeof(score4Str) + " " + score4Str);

let score5 = undefined;
console.log(typeof(score5) + " " + score5);

// coverting undefind to Nan
let score5Num = Number(score5);
console.log(typeof(score5Num) + " " + score5Num);

// conerting undefind to String
let score5Str = String(score5);
console.log(typeof(score5Str) + " " + score5Str);

// converting undefined to 0
let score5Num2 = parseInt(score5);
console.log(typeof(score5Num2) + " " + score5Num2);

let score6 = true;
console.log(typeof(score6) + " " + score6);

let score6Num = Number(score6);
console.log(typeof(score6Num) + " " + score6Num);

let score6str = String(score6);
console.log(typeof(score6str) + " " + score6str);

let isLogin = 1;
console.log(typeof(isLogin));

let booleanIsLogin = Boolean(isLogin);
console.log(typeof(booleanIsLogin) + " " + booleanIsLogin);

//here counting the space in the middle so return true
let isLogin2 =" "; 
console.log(" empty " + typeof(isLogin2));

let booleanIsLogin2 = Boolean(isLogin2);
console.log(typeof(booleanIsLogin2) + " " + booleanIsLogin2 );

//here since no space provided it will return 0 only
let isbull = "";
let BollIsBull = Boolean(isbull);
console.log(typeof(BollIsBull) + " " + BollIsBull);

console.table([score,scoreStr,scoreStr2,score2Num,scoreStr2Num,scoreF3,scoreF3Num,scoreF3Str,score4,score4Num,score4Str,score5,score5Num,score5Str,score5Num2,score6,score6Num,score6str]);

