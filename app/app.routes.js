module.exports = (app) => {
    const todo = require('./app.controller.js');

    // Create a new todo
    app.post('/todo', todo.create);

    // Retrieve all todos
    app.get('/todo', todo.findAll);

    // Retrieve a single todo with todoId
    app.get('/todo/:todoId', todo.findOne);

    // Delete a todo with todoId
    app.delete('/todo/:todoId', todo.delete);
}