import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

function Home() {
  return (<div>'home'</div>);
}

function About() {
  return <div>'about'</div>;
}

function Dashboard() {
  return <div>'dashboard'</div>;
}

function App() {
  return (
    <Router>
      <div className="App">
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </header>
        <div>
          
          
          <hr/>
          
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
    ;
}

export default App;
