import React from 'react';


function ChangeColor() {

  function changeBackgroundRed(e) {
    e.target.style.background = 'red';
  }
  function changeBackgroundWhite(e) {
    e.target.style.background = 'white';
  }

  return (
    <div className="App">
      <button onMouseOver={changeBackgroundRed} onMouseLeave={changeBackgroundWhite}>Hover over me!</button>
    </div>
  );
}

export default ChangeColor;
