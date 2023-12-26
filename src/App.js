

import {Route,Routes} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About';
import Navbar from './components/Navbar';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Finance from './components/Finance';

function App() {
  
  return (
    <>
   
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>   
          <Route path="/form" element={<Finance/>}/>
          <Route path="/form/step1" element={<Step1/>}/>
          <Route path="/form/step2" element={<Step2/>}/>     
        </Routes>
       
    </>
  );
}

export default App;
