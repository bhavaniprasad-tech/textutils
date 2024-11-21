import { useState } from 'react';
import './App.css';
import About from './About';
import Navbar from './components/Navbar';
import TextForm from './TextForm';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Routes, // Use Routes instead of Switch
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); 

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
   } ,2000);
  }

  const removeBodyClasses= () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }
  
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
       showAlert("Dark mode has been enabled", "success");
      //  document.title = 'Text editor - Dark mode';
    } else {
      setMode('light');
       document.body.style.backgroundColor = 'white';
       showAlert("Light mode has been enabled", "success");
      //  document.title = 'Text editor - Light mode';
    }
  }

  return (
    <>
    <Router>
      <Navbar title= "Bhavani's" mode = {mode} toggleMode = {toggleMode} aboutText = "About us"/>
      <Alert alert = {alert}/>
      <div className='container my-3'>
        <Routes> {/* Replace Switch with Routes */}
          <Route exact path="/about" element={<About mode= {mode}/>} /> {/* Use element instead of component */}
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="TextEditor- Word counter,Character counter, Download text" mode={mode} />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;

