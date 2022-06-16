import React from 'react';


function ChangeColor() {

  function changeBackground(e) {
    e.target.style.background = 'red';
  }

  return (
    <div className="App">
      <button onMouseOver={changeBackground}>Hover over me!</button>
    </div>
  );
}

export default ChangeColor;
