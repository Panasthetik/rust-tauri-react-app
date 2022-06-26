import logo from './logo.svg';
import './App.css';
import Tauri from './Tauri';

// With the Tauri global script, enabled when `tauri.conf.json > build > withGlobalTauri` is set to true:


function App() {

  return (

      
    <div className="App">
 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Tauri />
          {/* Edit <code>src/App.js</code> and save to reload. */}
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
