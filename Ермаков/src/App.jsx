import React, { useState } from 'react';
import gameBoard from './gameBoard';
import './App.css';

function App() {
  const [happiness, setHappiness] = useState(0);

  return (
    <div className="App">
      <gameBoard setHappiness={setHappiness} />
    </div>
  );
}

export default App;
