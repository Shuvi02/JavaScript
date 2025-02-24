console.log( 2 > 1);
console.log("2" > "1");  //true
console.log("2" > 1); //true String 2 get converted to number 2
console.log("abc" > "abd"); //true

console.log(null > 0);
console.log(null >= 0); //true
console.log(null <= 1)  //false
console.log(null == 0);


//===
//used to do strict check using == it allows comapring different datatype by convertin them but === does not allow conversion one data type compared with other of same datatype only

console.log("2" === 2);