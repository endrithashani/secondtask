import Tabs from './components/Tabs';
import Toggle from './components/Toggle';
import NestedToggle from './components/NestedToggle';
import {useState} from 'react';
const image= require('./components/images/user.png');
function App() {
  const [openToggle,setOpenToggle] = useState(false);
  return (
    <div className="App"> 
    <Tabs/>
    <Toggle/>
    <button onClick={()=>{setOpenToggle(true);}} className='btn-toggle'>
    <img src={image} alt='about'></img>
    <div className="inside-button">
    <h3>About Us</h3>
    <p>4 articles in this Topic</p>
    </div>
    <div className="arrow">
    <p>⮟</p>
    </div>
    </button>
    {openToggle && <NestedToggle closeToggle={setOpenToggle}/>}
    </div>
  );
}

export default App;
