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


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Achievement/>
      <Reason/>
      <Management/>
      <Platform/>
      <Opinion/>
      <Companies/>
      <TryHexnode/>
      <Copyright/>
      </div>
  );
}

export default App;
