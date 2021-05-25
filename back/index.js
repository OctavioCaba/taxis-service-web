require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.static('../front/build'));

app.get('/server/', (req, res) => {
  res.send('<h1>Taxis service server</h1>');
});

app.listen(port, () => {
  console.log(`Now running on port ${port}`);
});
