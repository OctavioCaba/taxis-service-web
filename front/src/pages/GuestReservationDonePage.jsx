import { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { BiMapPin } from 'react-icons/bi';
import { Notification } from '../components/Notification';

export const GuestReservationDonePage = () => {
  const [notificationContent, setNotificationContent] = useState({ type: null, message: null });

  useEffect(() => {
    setNotificationContent({ type: 'success', message: 'Successful reservation' });
    setTimeout(() => {
      setNotificationContent({ type: null, message: null });
      sessionStorage.removeItem('guest');
    }, 5000);
  }, []);

  if (localStorage.getItem('userLogged')) return <Redirect to="/" />;
  if (!sessionStorage.getItem('guest')) return <Redirect to="/" />;

  return (
    <div className="guest-reservation">
      <Notification type={notificationContent.type} message={notificationContent.message} />
      <h2>Thanks for the reservation!&nbsp;&nbsp;<BiMapPin /></h2>
      <p>If you need to cancel the reservation, please get it contact with us at <span>john@doe.com</span></p>
      <Link to="/" className="link">To main Page</Link>
    </div>
  );
}
