import { Link } from 'react-router-dom';

export const NotLoggedInHeader = () => {
  let url = window.location.pathname.substring(1);

  if (url !== 'login' && url !== 'register') {
    return (
      <header className="header">
        <div className="not-logged-in-header">
          <Link className="link" to="/register">Register</Link>
          <Link className="link" to="/login">Login</Link>      
        </div>
      </header>
    );
  } else {
    return (
      <header className="header">
        <Link className="link" to="/">Main page</Link>
      </header>
    );
  }
}
