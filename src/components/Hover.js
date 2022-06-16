import React, { useState } from 'react';
import Man from './Man'


function Hover() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="App">
      <button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        Hover over me!
      </button>
      {isShown && (
        <div>
          Hola loco
        </div>
      )}
    </div>
  );
}

export default Hover;

//https://upmostly.com/tutorials/react-onhover-event-handling-with-examples