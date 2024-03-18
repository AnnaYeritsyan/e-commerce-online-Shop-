const express = require('express');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())
app.use(cors());
app.use(express.static('public'));

function readData(callback) {
    fs.readFile('./db.json', 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
            return;
        }

        const jsonData = JSON.parse(data || "{}");
        callback(null, jsonData);
    });
}

// Write data to JSON file
function writeData(data, callback) {
    fs.writeFile('./db.json', JSON.stringify(data), 'utf8', (err) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null);
    });
}

app.get('/products', (req, res) => {
    readData((err, data) => {
        if (err) {
            res.status(500).send({ error: 'Error reading data from database' });
            return;
        }
        res.send(data?.products || []);
    });
});

app.post('/products', (req, res) => {
    readData((err, data) => {
        if (err) {
            res.status(500).send({error: 'Error reading data from database'});
            return;
        }
        const products = data?.products || []
        const newData = {
            ...data,
            products: products.concat(req.body)
        };
        writeData(newData, (err) => {
            if (err) {
                res.status(500).send({error: 'Error writing data to database'});
                return;
            }
            res.send(newData);
        });
    });
});

// Signin route
app.post('/signin', (req, res) => {
    const { username, password } = req.body;
    readData((err, data) => {
        if (err) {
            res.status(500).send({error: 'Error reading data from database'});
            return;
        }
        const users = data?.users || []
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            res.send({message: 'Signin successful', user });
        } else {
            res.status(401).send({error: 'Invalid username or password'});
        }
    });
});

// Signup route
app.post('/signup', (req, res) => {
    const {username, password, email} = req.body;
    readData((err, data) => {
        if (err) {
            res.status(500).send({error: 'Error reading data from database'});
            return;
        }
        const users = data?.users || []
        const existingUser = users.find(user => user.username === username);
        if (existingUser) {
            res.status(400).send({error: 'The user already exists'});
            return;
        }

        const newUser = {id: Date.now(), username, password, email};
        const newData = {
            ...data,
            users: [...users, newUser]
        };

        writeData(newData, (err) => {
            if (err) {
                res.status(500).send({error: 'Error writing data to database'});
                return;
            }
            res.status(201).send({message: 'Signup successful', user: newUser});
        });
    });
});

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});