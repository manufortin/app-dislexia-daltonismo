import './App.css';
import React, { useState, useEffect } from 'react';
import Home from '../src/pages/Home'
import Login from '../src/pages/Login'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import GeneralTest from './pages/GeneralTest';
import TestUno from './pages/TestUno';
import Loading from './pages/Loading';
import TestDos from './pages/TestDos';
import TestTres from './pages/TestTres';
import TestCuatro from './pages/TestCuatro';
import TestCinco from './pages/TestCinco';
import Working from './pages/Working';
import DaltUno from './pages/DaltUno';

//Funcion App principal
function App() {
  const [isLoading, setIsLoading] = useState(true);

  //Set pagina de carga
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1100);
  }, []);

  //Retorno App
  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/testgeneral" element={<GeneralTest />} />
            <Route path="/testuno" element={<TestUno />} />
            <Route path="/loading" element={<Loading />} />
            <Route path='/testdos' element={<TestDos />} />
            <Route path='/testtres' element={<TestTres />} />
            <Route path='/testcuatro' element={<TestCuatro />} />
            <Route path='/testcinco' element={<TestCinco />} />
            <Route path='/working' element={<Working />} />
            <Route path='/daltuno' element={<DaltUno />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
