import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UncontrolledExample from './slider/index'
import Contact from './Contact/Form'
import AutoLayoutExample from './texto/texto'





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
   <Contact/>
   </div>
    </div>
  );
}

export default App;
