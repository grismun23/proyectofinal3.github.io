import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UncontrolledExample from './slider/index';

import AutoLayoutExample from './texto/texto';
import Acordeon from './imagencondesplegable/index';
function App() {
  return (
    <div className="App">
     <div>
   <UncontrolledExample />
   </div>
   <div>
    <AutoLayoutExample />
    </div>
    <div>
      <Acordeon />
    </div>
   
    </div>
  );
}

export default App;