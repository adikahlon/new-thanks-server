const toDosController = require("./controller");

function loadRoutes(app) {
app.get('/api/todos/:todoId', function (req, res) {
    res.send(getToDos()).end()
});

app.get('/api/todos', function (req, res) {
    res.send(`your todo is ${req.params.id} `)
});

app.delete(`/api/todos/:todoId`, function (req, res) {
    const { todoId } = req.params
    const deletedToDo = getToDos(todoId)
    deleteToDo(todoId)
    res.send(deletedToDo).end()
})

app.post(`/api/todos`, function (req, res) {
    const todo = req.body
    res.send(addToDo(todo))
})

app.put(`/api/todos/:todoId`, function (req, res) {
    const { todoId } = req.params;
    const changesInToDo = req.body;
    const parToChange = changesInToDo.par
    const whatToChange = changesInToDo.newInput
    res.send(updateToDo(todoId, parToChange, whatToChange))
})
};
module.exports = { loadRoutes }