const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

let tasks = []; // In-memory task array

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Get all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Add task
app.post('/tasks', (req, res) => {
    const task = { id: Date.now(), text: req.body.text };
    tasks.push(task);
    res.json(task);
});

// Delete task
app.delete('/tasks/:id', (req, res) => {
    tasks = tasks.filter(t => t.id != req.params.id);
    res.sendStatus(200);
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
