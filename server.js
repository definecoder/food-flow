const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

const { createUser, createFirm } = require('./database')

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});


app.post('/createUser', (req, res) => {
    const { id, username, phone, email, password } = req.body;
    createUser(id, username, phone, email, password).catch(err => {
        res.status(500).json({ error: `Internal Server Error: ${err}` })
    })
    res.sendStatus(200);
});

app.post('/createFirm', (req, res) => {
    const { id, reg_no, name, proprietor, nominee, phone, email, trade_license, uid } = req.body
    createFirm(id, reg_no, name, proprietor, nominee, phone, email, trade_license, uid).catch(err => {
        res.status(500).json({ error: `Internal Server Error: ${err}` })
    })
    res.sendStatus(200);
})

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


