var secretPassword = 'coders.tokyo';
var readline = require('readline-sync');

var result = readline.question('input password: ');
while(result !== secretPassword){
	console.log("wrong password ! ")
  result = readline.question('input password: ');
}
console.log("Welcome");
console.log(result);