console.log('line 1', module);

module.exports.title = 'NODE';
console.log('line 4', module.exports.title);

const LIB = require('./lib');
console.log('line 9', LIB.sum(546, 434));

console.log('line 11', module.exports);