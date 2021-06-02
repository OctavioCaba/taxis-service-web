import { Link } from 'react-router-dom';

export const LoggedInHeader = () => {
  const handleClick = () => {
    localStorage.removeItem('userLogged');
    window.location.replace('/');
  }
  const user = JSON.parse(localStorage.getItem('userLogged'));

  return (
    <header className="header">
      <div className="logged-in-header">
        <p>Hola, {user.name}</p>
        <Link className="link" to="/" onClick={handleClick}>LogOut</Link>
        {/* <form action="/logout" method="post">
          <button className="link">LogOut</button>
        </form> */}
      </div>
    </header>
  );
}
