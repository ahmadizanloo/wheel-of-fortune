import React from 'react';
import WheelOfFortune from './WheelOfFortune'; // Ensure the path matches your file structure
import './WheelOfFortune.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Wheel of Fortune!</h1>
      </header>
      <main>
        <WheelOfFortune />
      </main>
    </div>
  );
}

export default App;
