import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'

function Field() {
    const [dropdown , setDropdown] =useState(false); //nos indica el estado del booleano si es false esta cerrado
    const abrirCerrarDropdown=()=>{
        setDropdown(!dropdown)   //este metodo hace que cuando este abierto se cierre viceversa
    }
    const accionPrueba=()=>{
        alert("Soy la accion 1")
    }
    
    return (
        <div >
            <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} direction="right" size="large">{/* direccion en que se despliega*/}
                <DropdownToggle caret className="botonDropdown"> {/* caret agrega la flechita al aldo */}
                    Dropdown Ejemplo
                </DropdownToggle>

            <DropdownMenu>
            <DropdownItem header>Encabezado</DropdownItem> {/* header hace que este sea solo el encabezado y no un link */}
                <DropdownItem divider/>
                <DropdownItem onClick={accionPrueba}>Accion 1</DropdownItem>
                <DropdownItem>Accion 2</DropdownItem>
                <DropdownItem disabled>Accion 3 deshabilitada</DropdownItem> {/* disabled deshabilita la opcion */}
            </DropdownMenu>
            </Dropdown>      
        </div>
    );
}
export default Field;
