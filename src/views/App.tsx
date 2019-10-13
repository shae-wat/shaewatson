import React from 'react';
import logo from '../images/logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          shaewatson.com
        </p>
      </header>
    </div>
  );
}

export default App;
