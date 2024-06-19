const express = require('express');
const ideasRouter = require('./routes/ideas');
const connectDB = require('./config/db');
require('dotenv').config();

const port = process.env.PORT || 5000;
connectDB();

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/ideas', ideasRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Random Ideas API' });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
