import './App.css';
import Login from './componants/Login';
import Registration from './componants/Registration';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
     
       {/* <Registration/> */}
       
      <Routes>
<Route path='/' element={<Registration/>}></Route>
<Route path='registration' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
