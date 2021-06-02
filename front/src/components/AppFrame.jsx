import { LoggedInHeader } from './LoggedInHeader';
import { NotLoggedInHeader } from './NotLoggedInHeader';

export const AppFrame = ({ children }) => {
  return (
    <div className="app-wrapper">
      {
        localStorage.getItem('userLogged')
        ? <LoggedInHeader />
        : <NotLoggedInHeader />
      }
      <div className="content-wrapper">
        {children}
      </div>
      <footer className="footer">
        <small>
          Designed and developed by <a href="https://www.github.com/octaviocaba" rel="noreferrer noopener" target="_blank" className="link">Octavio Caba</a>
        </small>
      </footer>
    </div>
  );
}
