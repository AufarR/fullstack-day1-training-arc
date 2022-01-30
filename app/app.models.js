const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Todo', todoSchema);