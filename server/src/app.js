const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.set('db', pool);

app.get('/', (req, res) => {
  res.send('API is working!');
});

module.exports = app;
