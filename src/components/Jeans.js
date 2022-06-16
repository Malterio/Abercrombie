import React  from 'react'
import Menu from './Menu'

function Jeans() {

    let generos = ["Recién llegados", "Prendas Superiores", "Prendas Inferiores"]
  
    return (
        <div >
            <Menu generos={generos}/>
        </div>
    );
}
export default Jeans;