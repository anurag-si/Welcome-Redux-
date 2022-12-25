import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Welcome from './Pages/Welcome/Welcome';
import Header from './Components/Header/Header';
import Login from './Pages/Login/Login'
import { useState, useEffect } from 'react'
import {  useDispatch } from 'react-redux';
import { clear } from './Actions';
import FetchNews from './Components/News/FetchNews';

function App() {
  const dispatch= useDispatch();
  const[name, setName]=useState("");
  
  return (
    <div className="App">
        <BrowserRouter>
          <Header />
          <FetchNews/>
          <Routes>
              <Route path="/" element={<Login
             name={name} 
             setName={setName}    
              />}/>
              <Route path="/welcome" element={<Welcome
             name={name} 
             setName={setName}    
              />}/>
                  
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
