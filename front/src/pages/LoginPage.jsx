import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Notification } from '../components/Notification';
import services from '../services/services';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notificationContent, setNotificationContent] = useState({ type: null, message: null });

  if (localStorage.getItem('userLogged')) return <Redirect to="/" />;

  const handleEmailChange = ({ target }) => setEmail(target.value);

  const handlePasswordChange = ({ target }) => setPassword(target.value);
  
  const handleSubmit = async e => {
    e.preventDefault();
    const user = await services.login({ email, password });

    if (user.type === 'error') return triggerNotification(user.type, user.message);
    localStorage.setItem('userLogged', JSON.stringify(user));
    window.location.replace('/');
  }

  const triggerNotification = (type, message) => {
    setNotificationContent({ type: type, message: message });
    return setTimeout(() => {
      setNotificationContent({ type: null, message: null });
    }, 5000);
  }

  return (
    <div className="login-component">
      <h2>Login</h2>
      <Notification type={notificationContent.type} message={notificationContent.message} />
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-field">
          <input type="email" name="email" id="email" value={email} onChange={handleEmailChange} placeholder="Email" />
        </div>
        <div className="form-field">
          <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
        </div>
        <button className="login-button">Login</button>
      </form>
    </div>
  );
}
