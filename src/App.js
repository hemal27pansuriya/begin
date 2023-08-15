import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light')

  const handleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      <Navbar title='TextUtils' mode={mode} changeMode={handleMode} />
      <div className='container my-3'>
        {/* <About /> */}
        <TextForm heading='Enter Your Text Below' mode={mode}/>
      </div>
    </>
  );
}

export default App;
