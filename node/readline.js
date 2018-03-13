const READLINE = require('readline');
const UTIL = require('util');

const READLINE_INTERFACE = READLINE.createInterface(process.stdin, process.stdout);

READLINE_INTERFACE.question("What is your name? ", (name) => {
    READLINE_INTERFACE.setPrompt(`${name} what is your age? `);
    READLINE_INTERFACE.prompt();

    READLINE_INTERFACE.on("line", (age) => {
        if(age < 18) {
            UTIL.log(`${name.trim()} because you are ${age} years old, you cannot proceed.`);
            READLINE_INTERFACE.close();
        } else {
            UTIL.log(`${name.trim()}, is great that you are ${age} yeard old, because now you can enjoy our services.`);
            READLINE_INTERFACE.close();
        }
    })
});