 
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
     <>
     <Navbar title="TextUtils" home="Home"/>
     <TextForm></TextForm>
     <About></About>
     </>
  );
}

export default App;
