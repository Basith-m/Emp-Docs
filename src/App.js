import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Employees from './Pages/Employees'
import ViewEmployee from './Pages/ViewEmployee'
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/employees' element={<Employees />} />
        <Route path='/viewEmployee' element={<ViewEmployee />} />
      </Routes>
    </div>
  );
}

export default App;
