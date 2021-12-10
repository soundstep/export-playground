import logo from './logo.svg';
import './App.css';

// import { info } from 'export-playground';
import { login } from 'export-playground/auth';
import { commercial } from 'export-playground/deep/ads';

// info();

login();
commercial();
// logout();

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
