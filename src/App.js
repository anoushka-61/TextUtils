
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  const [mode, setmode] = useState('light');
   const [alert, setalert] = useState(null);
   const showAlert = (message,type)=>{
    setalert({
      msg:message,
      tp:type
    })
    setTimeout(()=>{setalert(null);},1500)
   }
 const  togglemode = ()=>{
    if(mode ==='light'){
      setmode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode has been enabled","success");
    
    }
    else{
      setmode ('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");    
    }
  }
  return (
   <>
   <Router>
     <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
     <div className="container my-3">

     <Routes>
          <Route  exact path="/About" element={<About />}>
            
          </Route>
          <Route exact path="/" element={
          <TextForm alert={showAlert} heading="Enter the text to analyse" mode={mode}/>}>
         </Route>
        </Routes>
         
     </div>
      </Router>
   </>
  )
}

export default App;
