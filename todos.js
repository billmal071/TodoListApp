console.log('starting todos.js');
const fs = require('fs');


// add todos
var addTodo = (title) => {
    var todos = fetchTodos();
    var todo = {
        title
    };

    var duplicateTodos = todos.filter((todo) => todo.title === title);

    if (duplicateTodos.length === 0) {
        todos.push(todo);
        saveTodos(todos);
        return todo;
    }
};

//delete todos
var deleteTodo = (title) => {
    var todos = fetchTodos();
    var filteredTodos = todos.filter((todo) => todo.title !== title);
    saveTodos(filteredTodos);

    return todos.length !== filteredTodos.length;
}


// read todos
var readTodo = (title) => {
    var todos = fetchTodos();
    var filteredTodos = todos.filter((todo) => todo.title === title);
    return filteredTodos[0];
}

// list all todos
var listTodos = () => {
    return fetchTodos();
}

// utility functions
var fetchTodos = () => {
  try {
    var todosString = fs.readFileSync('todos-data.json');
    return JSON.parse(todosString);
  } catch (e) {
    return [];
  }
};
 
var saveTodos = (todos) => {
  fs.writeFileSync('todos-data.json', JSON.stringify(todos));
};

var logTodo = (todo) => {
    console.log('---------');
    console.log(`its title is ${todo.title}`);
}

module.exports = {
    addTodo,
    deleteTodo,
    readTodo,
    logTodo,
    listTodos
};