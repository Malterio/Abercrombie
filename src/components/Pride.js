import React  from 'react'
import Menu from './Menu'

function Pride() {

    let generos = ["Recién llegados", "Prendas Superiores", "Prendas Inferiores"]
  
    return (
        <div >
            <Menu generos={generos}/>
        </div>
    );
}
export default Pride;