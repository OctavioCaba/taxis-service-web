import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AppFrame } from './components/AppFrame';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { GuestReservationDonePage } from './pages/GuestReservationDonePage';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AppFrame>
            <HomePage />
          </AppFrame>
        </Route>
        <Route exact path="/login">
          <AppFrame>
            <LoginPage />
          </AppFrame>
        </Route>
        <Route exact path="/register">
          <AppFrame>
            <RegisterPage />
          </AppFrame>
        </Route>
        <Route exact path="/guest-reservation-done">
          <AppFrame>
            <GuestReservationDonePage />
          </AppFrame>
        </Route>
        <Route>
          <AppFrame>
            <NotFoundPage />
          </AppFrame>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
