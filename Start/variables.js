const accountId =  144553;
let accountEmail = "abc@microsoft.com"
var accountPassword = "123"
accountCity = "Jaipur"
// accountId = 2 since declared inside const so cannot change.
accountEmail = "abc@google.com"
accountPassword = "2314"
accountCity = "Ranchi"
let accountState;
var accountDate;
//const accountCountry; Not allowed we need to assign a value to const variables
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState,accountDate])