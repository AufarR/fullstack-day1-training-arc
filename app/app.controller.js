const Todo = require('./app.models.js');

// Create and Save a new todo
exports.create = (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Todo content can not be empty"
        });
    }

    // Create a todo
    const todo = new Todo({
        content: req.body.content
    });

    // Save todo in the database
    todo.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the todo."
        });
    });
};

// Retrieve and return all todos from the database.
exports.findAll = (req, res) => {
    Todo.find()
    .then(todos => {
        res.send(todos);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving todos."
        });
    });
};

// Delete a todo with the specified id in the request
exports.delete = (req, res) => {
    Todo.findByIdAndRemove(req.body.id)
    .then(todo => {
        if(!todo) {
            return res.status(404).send({
                message: "Todo not found with id " + req.body.id
            });
        }
        res.send({message: "Todo deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Todo not found with id " + req.body.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete todo with id " + req.body.id
        });
    });
};