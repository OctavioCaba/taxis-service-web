import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AppFrame } from './components/AppFrame';
import { WelcomePage } from './pages/WelcomePage';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AppFrame>
            <WelcomePage />
          </AppFrame>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
