import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState('light');
  

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils"/> */}
      <Navbar title='TextUtils' aboutText='About' mode={mode} toggleMode={toggleMode} />
      {/* <Navbar/> */}
      <div className="container">
        <TextForm mode={mode} />
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
