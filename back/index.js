require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.static('../front/build'));
app.get('*', (req, res) => {
  res.sendFile('index.html', {root: '../front/build/'});
});

app.listen(port, () => {
  console.log(`Now running on port ${port}`);
});
