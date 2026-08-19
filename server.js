const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

const users = []; // Temporary in-memory database

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (users.find(u => u.username === username)) {
        return res.status(400).send('User already exists!');
    }
    users.push({ username, password });
    res.send('User created successfully!');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.send(`Welcome back, ${username}!`);
    } else {
        res.status(401).send('Invalid credentials');
    }
});

app.listen(3000, () => console.log('App running on port 3000'));
