import './Navbar.css';
import React , {useState } from 'react'
import Woman from '../Woman'
import Man from '../Man'
import Kids from '../Kids'
import Jeans from '../Jeans'
import Active from '../Active'
import Pride from '../Pride'
import Hover from '../Hover'
import {Link, Route, Routes} from "react-router-dom"

function Navbar() {
    const [isShownM, setIsShownM] = useState(false);
    const [isShownW, setIsShownW] = useState(false);
    const [isShownK, setIsShownK] = useState(false);
    const [isShownJ, setIsShownJ] = useState(false);
    const [isShownA, setIsShownA] = useState(false);
    const [isShownP, setIsShownP] = useState(false);
    return (
        <div className='Navbar'>  
            <div>
                <Link to="/" className="header-logo">Abercrombie & Fitch</Link>  
            </div>        
            <div className="App-header-clothes" >
                <div className="category">
                    <Link to="/man" onMouseEnter={() => setIsShownM(true)}
                    onMouseLeave={() => setIsShownM(false)}>Hombre</Link>
                    {isShownM && (
                        <Man/>
                    )}
                </div>
                <div className="category">
                    <Link to="/woman" onMouseEnter={() => setIsShownW(true)}
                    onMouseLeave={() => setIsShownW(false)}>Mujer</Link>
                    {isShownW && (
                        <Woman/>
                    )}
                </div>
                <div className="category">
                    <Link to="/kids" onMouseEnter={() => setIsShownK(true)}
                    onMouseLeave={() => setIsShownK(false)}>kids</Link>
                    {isShownK && (
                        <Kids/>
                    )}
                </div>
                <div className="category">
                    <Link to="/Jeans" onMouseEnter={() => setIsShownJ(true)}
                    onMouseLeave={() => setIsShownJ(false)}>Jeans</Link>
                    {isShownJ && (
                        <Jeans/>
                    )}
                </div>
                <div className="category">
                    <Link to="/Active" onMouseEnter={() => setIsShownA(true)}
                    onMouseLeave={() => setIsShownA(false)}>Active</Link>
                    {isShownA && (
                        <Active/>
                    )}
                </div>   
                <div className="category">
                    <Link to="/pride" onMouseEnter={() => setIsShownP(true)}
                    onMouseLeave={() => setIsShownP(false)}>Orgullo</Link>
                    {isShownP && (
                        <Pride/>
                    )}
                </div> 
            </div> 
            <div className="new-page">  
                <Routes> 
                    <Route path="/man"  element={<Hover/>}/>    
                    <Route path="/woman"  element={<Woman/>}/> 
                    <Route path="/kids"  element={<Kids/>}/> 
                    <Route path="/jeans"  element={<Jeans/>}/> 
                    <Route path="/active"  element={<Active/>}/> 
                    <Route path="/pride"  element={<Pride/>}/> 
                    
                </Routes>  
            </div> 
        </div>   
    
    );
}


export default Navbar;