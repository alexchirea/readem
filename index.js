const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const configs = require('./app/config/config');
const app = express();
const port = 3000;

/** DB Connection */
global.db = (global.db ? global.db : mongoose.createConnection(configs.mongooseUrl()));

/** Routes */
const userRoutes = require('./app/routes/users');

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/users', userRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
