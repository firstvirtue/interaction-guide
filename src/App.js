import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { canvasButton } from './lib/canvas-button';
import { SplitText } from './lib/split-text';
import { RevealText } from './lib/reveal-text';

function App() {
  useEffect(() => {
    if(window.flag) return;
    window.flag = true;
    
    canvasButton('#fff');
    new SplitText(document.querySelector('.tit'));
    new RevealText({el: document.querySelector('.title')});
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="btn">aaa</button>
        <h2 className='h2 title'>EDGAR MAIN</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className='tit'>EXRS</p>
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
