import React from 'react';
import './App.css';
import TicTacToeContainer from './TicTacToeContainer';

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
            <button className="btn">Template Button</button>
          </div>
        </div>
      </nav>
      <main>
        <div className="container">
            <TicTacToeContainer />
        </div>
      </main>
    </div>
  );
}

export default App;