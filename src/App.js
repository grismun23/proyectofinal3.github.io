import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UncontrolledExample from './slider/index'
import Contact from './Contact/Form'
import AutoLayoutExample from './texto/texto'
import Acordeon from './imagencondesplegable/index'
import Slider2 from './Contact/slider2/slider2'


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
    <div>
   <Slider2/>
   </div>
   <div>
   <Contact/>
   </div>
    </div>
  );
}

export default App;
