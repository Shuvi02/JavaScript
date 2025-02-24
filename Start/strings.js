const str1 = "Hello! ";
const str2 = "How are you?" ;
console.log(str1 + str2);
console.log(str1.concat(str2));

const str3 = "Nishi";
const str4 = 50;
console.log(`Hello ${str3} How are you? ${str4}`);

const gameMaster = new String("Nishi");
console.log(gameMaster[0]);
console.log(gameMaster.__proto__);
console.log(gameMaster.length);
console.log(gameMaster.toUpperCase());
console.log(gameMaster.toLowerCase());
console.log(gameMaster.charAt(2))
console.log(gameMaster.indexOf('h'));
console.log(gameMaster.lastIndexOf('i'));
console.log(gameMaster); //even after conversion to upper/lower case origin value does not get changed



const newString = gameMaster.substring(0, 3); //substring does not work with negative values
console.log(newString);

const newString1 = gameMaster.slice(-4,-1);  //slice can be used for negative values
console.log(newString1);

const newString2 = "         henna     ";
console.log(newString2);
console.log(newString2.trim());
console.log(newString2.replace('h', 'H'));
console.log(newString2.replaceAll('h', 'H'));

const url = "https://www.google.com%20alexa";
console.log(url.replace("%20",'-'));
console.log(url.includes('alexa'));

//converting string to array on by spliting them on the basis of '-
const newString3 = new String("Nishi-com-google-microsoft");
console.log(newString3.split('-'));
