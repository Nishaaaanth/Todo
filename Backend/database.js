const mongoose = require("mongoose");
require(dotenv).config();

mongoose.connect(process.env.MONGO_URI || 3000);

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const todo = mongoose.model("todo", todoSchema);

module.exports = {
    todo
};
