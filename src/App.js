import Home from './pages/index';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './pages/signin';

function App() {

  /* Render Sidebar, Navbar Component using React Router*/

  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignIn} exact />
      </Switch>
    </Router>
  );
}

export default App;
