import React from 'react';
import Viewport from './Viewport.jsx';

const Gameboy = ({ isOn, setIsOn }) => {
  return (
    <div id="gameboy">
      <div id="top">
        <div id="bezel">
          <div id="inner-screen">{isOn ? <Viewport /> : null}</div>
        </div>
      </div>
      <div id="bottom">
        <div id="controls-top">
          <div id="dpad">
            <div className="dpad-group">
              <div className="dpad-square"></div>
              <div className="dpad-square"></div>
            </div>
            <div className="dpad-group">
              <div className="dpad-square"></div>
              <div className="dpad-square"></div>
            </div>
          </div>
          <div id="buttons">
            <div className="button" style={{ marginTop: '2em' }}>
              <span className="button-text">B</span>
            </div>
            <div className="button">
              <span className="button-text">A</span>
            </div>
          </div>
        </div>
        <div id="controls-bottom">
          <div id="bottom-button-group">
            <div className="bottom-button">
              <span className="bottom-text">SELECT</span>
            </div>
            <div className="bottom-button" onClick={() => setIsOn(!isOn)}>
              <span className="bottom-text">START</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gameboy;
