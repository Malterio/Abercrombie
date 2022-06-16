import React, { useState } from 'react';


function Hover() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div >
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