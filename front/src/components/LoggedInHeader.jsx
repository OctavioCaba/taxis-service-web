import { Link } from 'react-router-dom';

export const LoggedInHeader = () => {
  const handleClick = () => {
    localStorage.removeItem('userLogged');
    window.location.replace('/');
  };

  const user = JSON.parse(localStorage.getItem('userLogged'));

  const handleThemeChange = () => {
    if (localStorage.getItem('themed') === null) {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('themed', true);
    } else {
      document.body.removeAttribute('data-theme');
      localStorage.removeItem('themed');
    };
  };

  return (
    <header className="header">
      <div className="logged-in-header">
        <p>Hola, {user.name}</p>
        <button className="theme-button" onClick={handleThemeChange}>Theme</button>
        <Link className="link" to="/" onClick={handleClick}>LogOut</Link>
      </div>
    </header>
  );
}
