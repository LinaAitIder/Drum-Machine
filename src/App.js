import logo from './logo.svg';
import './App.css';
import Drum from './Drum.js';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <div className="App">
      <div className="p-3 text-light custom-font">Drum Machine</div>
      <Drum />
    </div>
    
  );
}

export default App;
