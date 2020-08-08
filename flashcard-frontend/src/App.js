import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

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
        <MyButton text="Click Me" />
      </header>
    </div>
  );
}

function MyButton({text}) {
  const [count, setCount] = useState(0)
  function clickHandler() {
    setCount(count+1)
  }
  return (
  <button onClick={clickHandler}>Clicked: {count}</button>
  )
}

export default App;
