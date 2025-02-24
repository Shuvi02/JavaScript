//Stack Memory - changes are made in the copy of the data dit does not chanhes the original data
// used for primitive data types

let name = "Alpha";
let Sname = name;
Sname = "Beta";
console.log(Sname);   //here the value get changed in Sname only bcuz we get the copy and we are rying to changes the value of the copy
console.log(name);


//Heap Memory - changes are to be made in orginial data itself
// used for non primitive data types . call by reference

let user = {
    email: "alpha@goggle.com",
    up: "alpha@ypl"
}

let user2 = user; //we get access to original data so the changes are made in the original data itself
user2.email = "beta@google.com";

console.log(user2.email);  
console.log(user.email);