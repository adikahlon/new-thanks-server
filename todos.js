const { readFileSync, writeFileSync } = require('fs');

function getToDos() {
    const data = readFileSync('todos.json').toString();
    return JSON.parse(data);
}


function getToDo(todoId) {
    const todos = getToDo();
    return todos.find(function (todo) {
        return todoId === todo.id;
    })
}

function addToDo(todo) {
    const todos = getToDos();
    const newToDo = {
        id: Math.random().toString().slice(3, 8),
        task: todo.task || 'no task',
        created: new Date(),
        isDone: todo.isDone || false,
        priority: todo.priority || 1
    }
    todos.push(newToDo);
    setToDos(todos);
    return newToDo;
}
function setToDos(todos) {
    return writeFileSync('todos.json', JSON.stringify(todos));
 }

function deleteToDo(id) {
    const todos = getToDos();
    const filtertodos = todos.filter(function (todo) {
       return todo.id !== id;
    });
    setToDos(filtertodos);
}

function updateToDo(todoId, { task, isDone, priority }) {
    const todos = getToDos();
    const updateToDo = todos.find(function (todo) {
        return todo.id === todoId;
    });
if (task) {
    updateToDo.task = task;
}
if (typeof isDone === 'boolean') {
    updateToDo.isDone === isDone;
}
if (typeof priority === 'number' && isNaN(priority)) {
    updateToDo.priority = priority;
};
setToDos(todos)
return updateToDo;
}

function getToDoById(id) {
    debugger;
    const todos = getToDos();
    const updateToDo = todos.find(function (todo) {
        return todo.id === id;
    });

    return updateToDo ? updateToDo : "Please Enter Valid ID";

    // if (updateToDo)
    //     return updateToDo;
    // else
    //     return "Please Enter Valid ID";
}

module.exports = { getToDos, deleteToDo, updateToDo, addToDo, getToDoById, setToDos, getToDo }