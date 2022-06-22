import './App.css';
import { Routes, Route} from "react-router-dom"
import { useState } from 'react';
import NextPage from './pages/NextPage';
import Homa from './pages/Homa';
import Admin from './pages/Admin';


function App() {
  const [token, setToken] = useState(window.localStorage.getItem('token'))

  return (
    <div className="w-full h-full ">
      <Routes>
        {
          token ? 
          <Route path='/*' element={<Homa  />} /> : 
          <Route path='/*' element={<NextPage setToken={setToken} />} />
        }
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
