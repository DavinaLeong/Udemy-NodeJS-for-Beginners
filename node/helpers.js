console.log('line 1', module);

module.exports.title = 'NODE';
console.log('line 4', module.exports.title);

module.exports.sum = (num1, num2) => {
    console.log(`${num1} + ${num2} = ` + (num1 + num2));
};
console.log('line 9', module.exports.sum(1, 2));

console.log('line 11', module.exports);