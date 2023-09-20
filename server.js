const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

const { createUser } = require('./database')

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});


app.post('/createUser', (req, res) => {
    const { id, username, phone, email, password } = req.body;
    createUser(id, username, phone, email, password).catch(err => {
        res.status(500).json({ error: `Internal Server Error: ${err}` })
    })
    res.end()
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


