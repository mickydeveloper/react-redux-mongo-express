module.exports = (app) => {
    const todos = require('../controllers/todo.controller.js');

    //Create new todo
    app.post("/todos", todos.create);

    //Get all todos
    app.get("/todos", todos.findAll);

    //Get todo by id
    app.get("/todos/:todoId", todos.findOne);

    //Update todo by id
    app.put("/todos/:todoId", todos.update);

    //Delete todo by id
    app.delete("/todos/:todoId", todos.delete);
}