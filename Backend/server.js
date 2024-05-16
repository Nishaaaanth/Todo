const { todo } = require("./database.js");
const { createTodo, updateTodo } = require("./types.js");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3002;

app.use(express.json());
app.use(cors());

app.get("/todos", async function(req, res) {
    const todos = await todo.find({});
    res.json({ todos: todos });
});

app.post("/addTodo", async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.json({ msg: "Invalid input" });
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: createPayload.completed
    });
    res.json({ msg: "Added a new Task" });
});

app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if (!parsedPayload.success) {
        res.json({ msg: "Invalid input" });
        return;
    }

    await todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    });

    res.json({ msg: "Task successfully completed" });
});

app.delete("/remove", async function(req, res) {
    await todo.deleteMany({});
    res.json({ msg: "Deleted all the Todos" });
});

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));
