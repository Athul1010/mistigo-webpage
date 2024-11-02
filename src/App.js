import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Reason from './Components/Reason';
import Platform from './Components/Platform';

import Opinion from './Components/Opinion';
import Companies from './Components/Companies';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Reason/>
      <Platform/>
      <Opinion/>
      <Companies/>
    </div>
  );
}

export default App;
