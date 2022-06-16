import React from 'react';


function Menu(props) {
           
    return (
        <div >
            <ul className="sarasa" >
                { props.generos.map ( (genero, i) => <li key={genero + i}> {genero} </li>)}
            </ul>            
        </div>
    );
}


export default Menu;
