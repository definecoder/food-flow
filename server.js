const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());
// Enable CORS for all routes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); // Replace with your frontend origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


const { createUser, createFirm } = require('./database')

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});


app.post('/createUser', async (req, res) => {
    try {
        const { username, phone, email, password } = req.body;

        await createUser(username, phone, email, password)
        res.sendStatus(200);
    } catch (err) {
        console.error(`Internal Server Error: ${err}`);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
});

app.post('/createFirm', async (req, res) => {

    try {
        const { reg_no, name, proprietor, nominee, phone, email, trade_license, uid } = req.body
        await createFirm(reg_no, name, proprietor, nominee, phone, email, trade_license, uid)
        res.sendStatus(200);
    }
    catch (err) {
        console.error(`Internal Server Error: ${err}`);
        res.status(500).json({ error: `Internal Server Error: ${err}` })
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


