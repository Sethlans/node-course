const chalk = require('chalk');

const command = process.argv[2];

console.log(process.argv);
if(command==='add'){
    console.log('Adding note');
} else if (command==='remove'){
    console.log('removing note');
}