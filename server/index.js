const express = require("express");
const app = express();
//const cors = require("cors");
const dotenv = require('dotenv');
const poolItems = require('./DBconfig.js')


dotenv.config();

const PORT = process.env.PORT;


// const corsOptions = {
//     origin: "https://pern-app-frontend.onrender.com", 
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true,
// };



// Middleware --> app.use()
//app.use(cors(corsOptions));
app.use(express.json());


// Routes //


// Create a todo
app.post("/todos", async(req,res) => {
    try {
        const { description } = req.body;
        const newTodo = await poolItems.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);


        res.json(newTodo.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
});

// Get all todos
app.get("/", async(req, res) => {
    //res.send("Hello, I am working");
    try {
        const allTodos = await poolItems.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (error) {
        console.error(error.message);
    }
})

// Get a todo
app.get("/todos/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const todo = await poolItems.query("SELECT * FROM todo WHERE todo_id = $1", [id]);

        res.json(todo.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})


// Update a todo

app.put("/todos/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {description} = req.body;
        const upDateTodo = await poolItems.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);

        res.json("Todo was updated.")
    } catch (error) {
        console.error(error.message);
    }
}) 

// Delete a todo
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await poolItems.query("DELETE FROM todo WHERE todo_id = $1", [id]);

        res.json("Request was deleted");
    } catch (error) {
        console.error(error.message);
    }
}) 

app.listen(PORT, () => {
    console.log(`server has started on port ${PORT}`);
});

