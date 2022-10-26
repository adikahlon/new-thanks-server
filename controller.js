const todosService = require("./todos");

const removeToDo = function(req, res) {

}
const getToDo = function(req, res) {
    res.send(todosService.getToDo()).end();
}
const adding = function(req, res) {
    const todo = req.body;
    res.send(todosService.addToDo(todo));
}
const updating = function(req, res) {
    const {todoId} = req.params;
    res.send(todosService.updateToDo(todoId, req.body));
}

module.exports = {removeToDo, getToDo, adding, updating}