const express = require('express');
const ideasRouter = require('./routes/ideas');

const port = 5000;
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
