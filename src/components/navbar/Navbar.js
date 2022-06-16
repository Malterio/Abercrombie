import React , {useState } from 'react'
import Woman from '../Woman'
import Man from '../Man'
import {Link, Route, Routes} from "react-router-dom"

function Navbar() {
    const [isShown, setIsShown] = useState(false);
    return (
        <div className='Navbar'>  
        <p className="App-header-logo">Abercrombie & Fitch</p> 
        <div className="App-header-clothes" >
            <Link to="/woman" onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>Mujer</Link>
            <Link to="/man" onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>Hombre</Link>
            <Routes> 
              <Route path="/woman"  element={isShown && (<Woman/>)}/> 
              <Route path="/man"  element={isShown && (<Man/>)}/>
            </Routes>  
        </div>   
        </div>
    );
}


export default Navbar;