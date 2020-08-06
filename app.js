console.log('Running app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const chalk = require('chalk');
const figlet = require('figlet');

const todos = require('./todos.js');

console.log(
    chalk.yellow(
        figlet.textSync('TodoList App', {
            horizontalLayout: 'full'
        })
    )
);

const argv = yargs.argv;
var command = argv._[0];
console.log('Running command: ', command);

if (command === 'addTodo') {
    todos.addTodo(argv.title);
} else if (command === 'deleteTodo') {
    var todoDeleted = todos.deleteTodo(argv.title);
    var message = todoDeleted ? "Todo was deleted" : "Todo not found";
    console.log(message);
} else if (command === 'readTodo') {
    var todo = todos.readTodo(argv.title);
    if (todo) {
        console.log("Great, the todo was found");
        todos.logTodo(todo);
    } else {
        console.log('Whoops! The todo was not found.');
    }
} else if (command === 'listTodos') {
    var alltodos = todos.listTodos();
    console.log(`printing ${alltodos.length} todo(s)`);
    alltodos.forEach((todo) => todos.logTodo(todo));
} else {
    console.log('Invalid command: ');
}