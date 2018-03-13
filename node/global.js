var path = require('path');

var name = "Davina Leong";
var newName = name.toUpperCase(name);

console.log("HELLO WORLD FROM NODE!!");
console.log(`Hi, ${name}`);
console.log(`Your name has been converted: ${newName}`);

console.log(`dir path: ${__dirname}`);
console.log(`filename: ${__filename}`);
var basename = path.basename(__filename);
console.log(`basename: ${basename}`);