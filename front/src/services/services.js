import axios from 'axios';

const login = async credentials => {
  const baseUrl = '/login';
  //const baseUrl = 'http://localhost:3001/login';
  const { data } = await axios.post(baseUrl, credentials);
  return data;
}

const register = async credentials => {
  const baseUrl = '/register';
  //const baseUrl = 'http://localhost:3001/register';
  const { data } = await axios.post(baseUrl, credentials);
  return data;
}

const getTimes = async () => {
  const baseUrl = '/get-times';
  //const baseUrl = 'http://localhost:3001/get-times';
  const { data } = await axios.get(baseUrl);
  return data;
}

const reservationDone = async info => {
  const baseUrl = '/reservation/done';
  //const baseUrl = 'http://localhost:3001/reservation/done';
  const { data } = await axios.post(baseUrl, info);
  return data;
}

const reservationCancel = async info => {
  const baseUrl = '/reservation/cancel';
  //const baseUrl = 'http://localhost:3001/reservation/cancel';
  const { data } = await axios.post(baseUrl, info);
  return data;
}

const getUserReservations = async email => {
  const baseUrl = '/get-user-reservations';
  //const baseUrl = 'http://localhost:3001/get-user-reservations';
  const { data } = await axios.post(baseUrl, email);
  return data;
}

const validateEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const services = {
  login,
  register,
  getTimes,
  reservationDone,
  reservationCancel,
  getUserReservations,
  validateEmail
};

export default services;
