const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://100xdev:100xdev@cluster0.9ifckxi.mongodb.net/todo");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const todo = mongoose.model("todo", todoSchema);

module.exports = {
    todo
};
