import { Routes , Route } from 'react-router-dom';
import './App.css';
import OrgRegistration from './pages/Superadmin/OrgRegistration';
import LoginPage from './pages/Login';
import Index from './components/Index';
import Register from './pages/Register';
import ListParticipants from './pages/Superadmin/ListParticipants';
import ListOrganization from './pages/Superadmin/ListOrganization';
import ListOrganizationParticipants from './pages/Organization/ListParticipants';
import Mywishlist from './pages/Participants/Mywishlist';
import Receiver from './pages/Participants/Receiver';

function App() {
  return (
     <Routes>
         <Route path='/' element={<Index/>}/>
         <Route path="/Login" element={<LoginPage />}/>
         <Route path="/register" element={<Register/>} />
         <Route path='/superadmin' element={<ListOrganization/>}/>
         <Route path='/superadmin/participants' element={<ListParticipants/>}/>
         <Route path='/superadmin/neworg' element={<OrgRegistration/>}/>
         <Route path='/organization/' element={<ListOrganizationParticipants/>}/>
         <Route path='/participants/' element={<Receiver/>}/>
         <Route path='/participants/mywishlist' element={<Mywishlist/>}/>
     </Routes>
   
  );
}

export default App;
