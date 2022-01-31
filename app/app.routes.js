module.exports = (app) => {
    const todo = require('./app.controller.js');

    // Create a new todo
    app.post('/api', todo.create);

    // Retrieve all todos
    app.get('/api', todo.findAll);

    // Delete a todo with todoId
    app.delete('/api', todo.delete);
    
    // Main page
    app.get('/', function(req, res) {
    	res.sendFile(__dirname + "/html/" + "index.html");
    	});
    app.get('/script.js', function(req, res) {
    	res.sendFile(__dirname + "/html/" + "script.js");
    	});
    app.get('/style.css', function(req, res) {
    	res.sendFile(__dirname + "/html/" + "style.css");
    	});
}