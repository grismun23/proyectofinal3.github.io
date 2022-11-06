import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UncontrolledExample from './slider/index'
import Contact from './Contact/Form'
function App() {
  return (
    <div className="App">
     <div>
   <UncontrolledExample />
   </div>
   <div>
   <Contact/>
   </div>
    </div>
  );
}

export default App;
