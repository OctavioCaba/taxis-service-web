import { Link } from 'react-router-dom';

export const NotLoggedInHeader = () => {
  let url = window.location.pathname.substring(1);

  const handleThemeChange = () => {
    if (localStorage.getItem('themed') === null) {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('themed', true);
      console.log('dark now');
    } else {
      document.body.removeAttribute('data-theme');
      localStorage.removeItem('themed');
      console.log('light now');
    };
  };

  if (url !== 'login' && url !== 'register') {
    return (
      <header className="header">
        <div className="not-logged-in-header">
          <button className="theme-button" onClick={handleThemeChange}>Theme</button>
          <Link className="link" to="/register">Register</Link>
          <Link className="link" to="/login">Login</Link>      
        </div>
      </header>
    );
  } else {
    return (
      <header className="header">
        <div className="not-logged-in-header">
          <button className="theme-button" onClick={handleThemeChange}>Theme</button>
          <Link className="link" to="/">Main page</Link>
        </div>
      </header>
    );
  };
};
