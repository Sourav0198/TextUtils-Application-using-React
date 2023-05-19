//import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(type, message)=>
  {
    setAlert({
      msg:message, //left side msg is a new variable it can also be named as message but would also be treated as new variable.
      type:type

    })
    setTimeout(()=>
    {
      setAlert(null)
    },1500
    );
 
  }
  const toggleMode=()=>
  {
    if(mode==='dark')
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Success","Light Mode has been enabled")
    
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#0f032a';
      showAlert("Success","Dark Mode has been enabled")
   
    }
  }
  return (
    <>
          <Router>
          <Navbar title ="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert}/>
          <div className="container my-3">
          {/* <TextForm  heading="Enter text to analyze" mode={mode} showAlert={showAlert}/> */}
          <Routes>
          <Route exact path='/' element={<TextForm  heading="Enter text to analyze" mode={mode} showAlert={showAlert}/>} />
          <Route exact path='/About' element={ <About mode={mode} toggleMode={toggleMode}/>} /> 
          {/* <Route path="/About">
            <About />
          </Route> */}
          {/* <Route path="/">
          <TextForm  heading="Enter text to analyze" mode={mode} showAlert={showAlert}/>
          </Route> */}
         
  
        </Routes>
      

          </div>
         </Router>
    

    </>
      
    );
}

export default App;
