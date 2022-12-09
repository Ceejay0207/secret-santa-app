import { Routes , Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/Login';
import ParticipantList from './pages/ParticipantList';
import Register from './pages/Register';

import Welcome from './pages/participant/Welcome';
import DrawName from './pages/participant/DrawName';
import MyWishList from './pages/participant/MyWishList';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/Login" element={<LoginPage />}/>
        <Route path='/Admin' element={<MainPage/>}/>
        <Route path="/Participantlist" element={<ParticipantList/>} />
        <Route path="/register" element={<Register/>} />

        {/* Participant Routes */}
        <Route path='/participant/' element={<Welcome/>}/>
        <Route path='/participant/drawname' element={<DrawName/>}/>
          <Route path='/participant/mywishlist' element={<MyWishList/>}/>
     </Routes>
    </div>
  );
}

export default App;
