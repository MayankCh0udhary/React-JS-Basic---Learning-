import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <>
      {/* <Navbar title="TextUtils"/> */}
      <Navbar title='TextUtils' aboutText='About'/>
      {/* <Navbar/> */}
      
      {/* <TextForm/> */}
      <About/>
    </>
  );
}

export default App;
