 
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {
  const[mode,setMode]=useState('light');
  const[alert,Setalert]=useState(null);

 const  toggle =()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Enable Dark Mode","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Enable Light Mode","success");
    }
  }
   const showAlert= (mssg, mssgtype)=>{
    Setalert({
      message:mssg,
      type:mssgtype

    })
    setTimeout(() => {
      Setalert(null);
  }, 1500);
   }
  return (
     <>
     <Navbar title="TextUtils" home="Home" mode={mode} toggleMode={toggle}/>
     <Alert alert={alert}></Alert>
     <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
     <About mode={mode} />
     </>
  );
}

export default App;
