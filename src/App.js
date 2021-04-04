import Home from './pages/index';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './pages/signin';
import SignUp from './pages/signup';

function App() {

  /* Render Sidebar, Navbar Component using React Router*/

  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignIn} exact />
        <Route path="/signup" component={SignUp} exact />
      </Switch>
    </Router>
  );
}

export default App;
