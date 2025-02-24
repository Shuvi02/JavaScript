// Primitive Data Types - call by value we get the copy of the data and the changes are to mde in the copy itself
// 7Types - Number, String, Boolean, Null, Undefined, Symbol, BigInt
const score = 100;               // typeof score = number
const  scoreVal = 100.3          //typeof scoreVal = number
const isLogin = true;            //typeof isLogin = boolean
const Temp = null                //typeof null = object  null is standalone value its empty not zero    
let userEmail;                   //typeof userEmail = undefined;
const id = Symbol('A12');        //typeof id = symbol;
const anotherId = Symbol('A12');  //typeof anotherId = symbol;
console.log(id === anotherId); //Although value same but its not same bcuz of Symbol 

const BigInt = 1234567890123456789012345678901234567890n;
console.log(BigInt);             //typeof BigInt = bigint

// Non Primitive Data Types = call by Reference we get the actual value changes to be made in the actual value itself
// Array, Object, Function

const heros = ["Shaktiman" , "Superman", "Batman"];  //typeof heros = object;
let myObj = {
    name : "Shaktiman",
    age: 30,
    city: "Mumbai"  
}    //typeof myObj = object;

function myGreatFunction(){
    console.log("This is function");
}     //typeofmy GreatFuncton = function;

console.log(typeof BigInt)
console.log(typeof myObj)
console.log(typeof myGreatFunction)
console.log(typeof heros)
console.log(typeof score)
console.log(typeof isLogin)
console.log(typeof Temp)
console.log(typeof userEmail)
console.log(typeof id)
console.log(typeof anotherId)
console.log(typeof scoreVal)

