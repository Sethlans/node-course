const chalk = require('chalk');
const yargs = require('yargs');

const command = process.argv[2];

console.log(process.argv);
console.log(yargs.argv);

if(command==='add'){
    console.log('Adding note');
} else if (command==='remove'){
    console.log('removing note');
}