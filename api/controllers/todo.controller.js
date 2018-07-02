const Todo = require("../models/todo.model");

// Create and Save a new todo
exports.create = (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({
      message: "Todo text cannot be empty"
    });
  }

  const todo = new Todo({
    text: req.body.text
  });

  todo
    .save()
    .then(data => res.send(data))
    .catch(err =>
      res.status(500).send({
        message: err.message || "Failed to create todo"
      })
    );
};

// Retrieve and return all todos from the database.
exports.findAll = (req, res) => {
  Todo.find()
    .then(todos => res.send(todos))
    .catch(err =>
      res.status(500).send({
        message: err.message || "Failed to get all the todos"
      })
    );
};

// Find a single todo with a id
exports.findOne = (req, res) => {
  Todo.findById(req.params.todoId)
    .then(todo => {
      if (!todo) {
        return res.status(404).send({
          message: "Didn't found todo with id: " + req.params.todoId
        });
      }
      res.send(todo);
    })
    .catch(err =>
      res.status(500).send({
        message: "Failed to get todo by id: " + req.parmas.todoId
      })
    );
};

// Update a todo identified by the id in the request
exports.update = (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({
      message: "Todo text cannot be empty"
    });
  }

  Todo.findByIdAndUpdate(
    req.params.todoId,
    {
      text: req.body.text
    },
    { new: true }
  )
    .then(todo => {
      if (!todo) {
        return res.status(404).send({
          message: "Didn't found todo with id: " + req.params.todoId
        });
      }
      res.send(todo);
    })
    .catch(err =>
      res.status(500).send({
        message: "Faild to update todo by id: " + req.params.todoId
      })
    );
};

// Delete a todo with the specified id in the request
exports.delete = (req, res) => {
  Todo.findByIdAndRemove(req.params.todoId)
    .then(todo => {
      if (!todo) {
        return res.status(404).send({
          message: "Didn't found todo with id: " + req.params.todoId
        });
      }
      res.send(todo);
    })
    .catch(err =>
      res.status(500).send({
        message: "Could not delete todo with id: " + req.params.todoId
      })
    );
};
