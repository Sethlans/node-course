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

yargs.command({
    command: "list",
    describe: "List all the notes",
    handler : function() { console.log("List all the notes");}
});

yargs.command({
    command: "read",
    describe: "Reading a note",
    handler : function() { console.log("reading a note");}
});

console.log(yargs.argv);