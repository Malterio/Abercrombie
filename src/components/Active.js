import React  from 'react'
import Menu from './Menu'

function Active() {

    let generos = ["Recién llegados", "Prendas Superiores", "Prendas Inferiores"]
  
    return (
        <div >
            <Menu generos={generos}/>
        </div>
    );
}
export default Active;