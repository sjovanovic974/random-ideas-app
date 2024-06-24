const path = require('path');
const express = require('express');
const cors = require('cors');
const ideasRouter = require('./routes/ideas');
const connectDB = require('./config/db');
require('dotenv').config();

const port = process.env.PORT || 5000;
connectDB();

const app = express();

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Cors middleware
app.use(
  cors({
    origin: ['http://localhost:5000', 'http://localhost:3000'],
    credentials: true,
  })
);

app.use('/api/ideas', ideasRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Random Ideas API' });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
