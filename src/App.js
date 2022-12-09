import { Routes , Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/Login';
import ParticipantList from './pages/ParticipantList';
import Register from './pages/Register';
import Table from './components/table';
function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/HomePage' element={<HomePage/>}/>
        <Route path="/Login" element={<LoginPage />}/>
        <Route path='/Admin' element={<MainPage/>}/>
        <Route path="/Participantlist" element={<ParticipantList/>} />
        <Route path="/register" element={<Register/>} />
     </Routes>
    </div>
  );
}

export default App;
