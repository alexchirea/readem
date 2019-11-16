const express = require('express');
const app = express();
const port = 3000;

/** Routes */
const userRoutes = require('./app/routes/users');

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/users', userRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
