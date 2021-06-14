const { connection } = require('./dbConfig');
const bcrypt = require('bcrypt');

const getAllTimes = callback => connection.query("SELECT * FROM times", callback);

const getUserByEmail = (email, callback) => connection.query(`SELECT * FROM users WHERE email = ${connection.escape(email)}`, callback);

const registerUser = async ({ name, email, password }) => {
  const passwordHash = await bcrypt.hash(password, 10);

  try {
    connection.query(`INSERT INTO users VALUES(NULL, ${connection.escape(name)}, ${connection.escape(email)}, '${passwordHash}')`);
  } catch (error) {
    throw error;
  }

  return true;
}

const reservationOrder = (email, hour, callback) => connection.query(`INSERT INTO reservations VALUES(NULL, ${connection.escape(email)}, ${connection.escape(hour)}, NOW())`, callback);

const taxiReservationDone = (hour, callback) => connection.query(`UPDATE times SET taxis_availability = (taxis_availability - 1) WHERE hour = ${connection.escape(hour)}`, callback);

const taxiReservationCancel = (hour, callback) => connection.query(`UPDATE times SET taxis_availability = (taxis_availability + 1) WHERE hour = ${connection.escape(hour)}`, callback);

const getReservationsByEmail = (email, callback) => connection.query(`SELECT * FROM times t INNER JOIN reservations r ON t.hour = r.reserved_for WHERE r.user_email = ${connection.escape(email)}`, callback);

const deleteReservationOrderByHour = (hour, callback) => connection.query(`DELETE FROM reservations WHERE reserved_for = ${connection.escape(hour)}`, callback);

module.exports = {
  getUserByEmail,
  registerUser,
  getAllTimes,
  taxiReservationDone,
  taxiReservationCancel,
  reservationOrder,
  getReservationsByEmail,
  deleteReservationOrderByHour
};
