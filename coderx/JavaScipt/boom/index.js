var generatePassword = require("password-generator");
var markdown = require( "markdown" ).markdown;
var fs = require('fs');
console.log(generatePassword());
console.log(fs.readFileSync('./readfile.txt',{ encoding: 'utf8'}));
console.log( markdown.toHTML( "**Hello** *World*!" ) );