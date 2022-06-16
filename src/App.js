import './App.css';
//import {Link, Route, Routes} from "react-router-dom"
//import Man from './components/Man'
import Field from './components/field/Field'
import Navbar from './components/navbar/Navbar'
import Hover from './components/Hover'
import ChangeColor from './components/ChageColor';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
        
      <body>
        <Field/>
        <Hover/>
        <ChangeColor/>
      <h2>Soy el body</h2>
      </body>
    </div>
  );
}

export default App;
