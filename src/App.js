import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Employees from './Pages/Employees'
import ViewEmployee from './Pages/ViewEmployee'
import Header from './Components/Header';
import { tokenAuthorisationContext } from './Context/TokenAuth';
import { useContext } from 'react';
import Payment from './Pages/Payment';

function App() {
  const { isAuthorized, setIsAuthorized } = useContext(tokenAuthorisationContext)
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/employees' element={isAuthorized ? <Employees /> : <Home />} />
        <Route path='/viewEmployee/:id' element={isAuthorized ? <ViewEmployee /> : <Home />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/*' element={<Navigate to={'/'} />} />
      </Routes>
    </div>
  );
}

export default App;
