import React, { useState } from 'react';
import Gameboy from './Gameboy';

const App = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div id="game-container">
      <Gameboy isOn={isOn} setIsOn={setIsOn} />
    </div>
  );
};

export default App;
