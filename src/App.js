import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message,
      type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const handleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode has been enabled!', 'Success')
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled!', 'Success')
    }
  }

  return (
    <>
      <Navbar title='TextUtils' mode={mode} changeMode={handleMode} />
      <Alert alert={alert}/>
      <div className='container my-3'>
        {/* <About /> */}
        <TextForm heading='Enter Your Text Below' mode={mode} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
