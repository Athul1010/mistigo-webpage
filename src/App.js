import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Reason from './Components/Reason';
import Platform from './Components/Platform';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Reason/>
      <Platform/>
    </div>
  );
}

export default App;
