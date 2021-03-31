import Home from './pages/index';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  /* Render Sidebar, Navbar Component using React Router*/

  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
