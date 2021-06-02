require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');
const bcrypt = require('bcrypt');
const {
  getAllTimes,
  getUserByEmail,
  registerUser,
  taxiReservationDone,
  taxiReservationCancel,
  reservationOrder,
  getReservationsByEmail,
  deleteReservationOrderByHour
} = require('./data/dataServices');

app.use(cors());
app.use(express.json());

app.get('/get-times', (req, res) => {
  getAllTimes((err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
});

app.post('/get-user-reservations', (req, res) => {
  const { body } = req;

  getReservationsByEmail(body.email, (err, rows) => {
    if (err) throw err;

    return res.send(rows);
  });
});

app.use(express.static('../front/build'));
app.get('*', (req, res) => res.sendFile('index.html', {root: '../front/build/'}));

app.post('/login', (req, res) => {
  const { body } = req;

  getUserByEmail(body.email, async (err, rows) => {
    if (err) throw err;
    if (rows[0] === undefined) return res.send({ type: 'error', message: 'Invalid email or password' });

    const passwordCorrect = await bcrypt.compare(body.password, rows[0].password);

    if (!passwordCorrect) return res.send({ type: 'error', message: 'Invalid email or password' });

    return res.send({
      name: rows[0].name,
      email: rows[0].email
    });
  });
});

app.post('/register', (req, res) => {
  const { body } = req;

  const result = registerUser(body);
  if (!result) return res.status(500).send({ type: 'error', message: 'Something went wrong with the registration' });

  res.status(200).send({ type: 'success', message: 'Successful registration' })
});

app.post('/reservation/done', (req, res) => {
  const { body } = req;

  const flag1 = reservationOrder(body.email, body.hour, (err, rows) => {
    if (err) throw err;

    if (!(rows.affectedRows >= 1)) return res.send({ type: 'error', message: 'Something went wrong, please try again' });
    return true;
  });

  const flag2 = taxiReservationDone(body.hour, (err, rows) => {
    if (err) throw err;

    if (!(rows.affectedRows >= 1)) return res.send({ type: 'error', message: 'Invalid reservation' });
    return true;
  });

  if (flag1 && flag2) return res.send({ type: 'success', message: 'Successful reservation' });
});

app.post('/reservation/cancel', (req, res) => {
  const { body } = req;

  taxiReservationCancel(body.hour, (err, rows) => {
    if (err) throw err;

    if (!(rows.affectedRows >= 1)) return res.send({ type: 'error', message: 'Invalid operation' });
    deleteReservationOrderByHour(body.hour, err => {
      if (err) throw err;
    });
    return res.send({ type: 'success', message: 'Reservation canceled' });
  });
});

app.listen(port, () => console.log(`Now running on port ${port}`));
