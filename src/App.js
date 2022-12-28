import { Routes , Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/Login';
import Shop from './components/Shop';
import Register from './pages/Register';
import Exchanges from './components/Exchanges';
import Wishlist from './components/Wishlist';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/Login" element={<LoginPage />}/>
        <Route path='/Admin' element={<MainPage/>}/>
        <Route path="/shop" element={<Shop/>} />
        <Route path="/register" element={<Register/>} />
        <Route path='/exchanges' element={<Exchanges/>} />
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
       
     </Routes>
    </div>
  );
}

export default App;
