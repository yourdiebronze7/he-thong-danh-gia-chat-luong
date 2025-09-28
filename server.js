const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Quality Assessment System! We are glad to have you here.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});