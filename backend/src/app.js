const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./models/db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use('/api/movies', require('./routes/movieRoutes'));

module.exports = app;
