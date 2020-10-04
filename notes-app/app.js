const chalk = require('chalk');
const yargs = require('yargs');

const command = process.argv[2];

yargs.command({
    command: "add",
    describe: "Add a new note",
    handler : function() { console.log("Adding a new note");}
});

yargs.command({
    command: "remove",
    describe: "Remove a note",
    handler : function() { console.log("removing a note");}
});


console.log(yargs.argv);