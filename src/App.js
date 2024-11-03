import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Reason from './Components/Reason';
import Platform from './Components/Platform';

import Opinion from './Components/Opinion';
import Companies from './Components/Companies';
import TryHexnode from './Components/TryHexnode';
import Copyright from './Components/Copyright';
import Management from './Components/Management';
import Achievement from './Components/Achievement';
import Home from './Components/Home';
import BackToTopButton from './Components/BackToTopButton';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
    AOS.refresh(); // Refresh AOS on component update
  }, []);
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Achievement/>
      <Reason/>
      <Management/>
      <Platform/>
      <Opinion/>
      <Companies/>
      <TryHexnode/>
      <BackToTopButton/>
      <Copyright/>
      </div>
  );
}

export default App;
