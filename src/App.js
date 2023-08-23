import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { ReactPropTypes } from 'react';
import { useState } from 'react';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

let name="Harry3";
function App() {
   const [mode,setMode]=useState(false);
  const toggleMode=()=>
  {
    if(mode==='light')
    {
    setMode('dark')
    }
    else
    {
      setMode('light')
    }
  }
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
    msg:message,
    type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  return (
    <>
    
  
  <Router>
  <Navbar title="abc" about="about you" mode='dark'  toggleMode={toggleMode} />
  <div className="container">
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" />
      </Route>
    </Switch>
  </div>
</Router>

  <div>
      {/* Some content in your component */}
      <button onClick={() => showAlert('This is a warning message.', 'warning')}>
        Show Alert
      </button>

      <Alert alert={alert} />
    </div>
    </>
  );
}

export default App;
