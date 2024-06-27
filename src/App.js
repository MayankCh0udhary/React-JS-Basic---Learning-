import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from "react";
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Dark Mode has been enabled!', 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled!', 'success');
    }
  }
  return (
    <>
      <Router>
        {/* <Navbar title="TextUtils"/> */}
        <Navbar title='TextUtils' aboutText='About' mode={mode} toggleMode={toggleMode} />
        {/* <Navbar/> */}
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path='/about' element={<About />}></Route>
            <Route exact path='/' element={<TextForm mode={mode} showAlert={showAlert} />}></Route>
          </Routes>
        </div>
        {/* <About /> */}
      </Router>
    </>
  );
}

export default App;
