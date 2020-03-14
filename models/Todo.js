const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define schema for todo items
const todoSchema = new Schema({
  name: {
    type: String,
    minlength: 1
  },
  done: {
    type: Boolean,
  },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
