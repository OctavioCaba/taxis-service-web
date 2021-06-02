import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Notification } from '../components/Notification';
import services from '../services/services';

export const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notificationContent, setNotificationContent] = useState({ type: null, message: null });

  if (localStorage.getItem('resultLogged')) return <Redirect to="/" />;

  const handleNameChange = ({ target }) => setName(target.value);

  const handleEmailChange = ({ target }) => setEmail(target.value);

  const handlePasswordChange = ({ target }) => setPassword(target.value);
  
  const handleSubmit = async e => {
    e.preventDefault();
    const result = await services.register({ name, email, password });

    if (result.type === 'error') return triggerNotification(result.type, result.message);

    if (result.type === 'success') {
      setTimeout(async () => {
        const user = await services.login({ email, password });

        if (user.type === 'error') {
          return triggerNotification(user.type, user.message);
        }
        localStorage.setItem('userLogged', JSON.stringify(user));
        window.location.replace('/');
      }, 1000);
    }
  }

  const triggerNotification = (type, message) => {
    setNotificationContent({ type: type, message: message });
    return setTimeout(() => {
      setNotificationContent({ type: null, message: null });
    }, 5000);
  }

  return (
    <div className="register-component">
      <h2>Register</h2>
      <Notification type={notificationContent.type} message={notificationContent.message} />
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-field">
          <input type="text" name="name" id="name" value={name} onChange={handleNameChange} placeholder="Name" required/>
        </div>
        <div className="form-field">
          <input type="email" name="email" id="email" value={email} onChange={handleEmailChange} placeholder="Email" required/>
        </div>
        <div className="form-field">
          <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} placeholder="Password" required/>
        </div>
        <button className="login-button">Register</button>
      </form>
    </div>
  );
}
