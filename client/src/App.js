import logo from './logo.svg';
import './App.css';
import MainPage from './Pages/MainPage';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
        <MainPage path="/"/>
      </Router>
    </div>
  );
}

export default App;
