import { Route, Routes } from 'react-router-dom';
import Rockets from './components/Rockets/Rockets';
import Navbar from './components/Navbar/Navbar';
import Missions from './components/Missions/Missions';
import MyProfile from './components/MyProfile/MyProfile';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/Rockets" element={<Rockets />} />
          <Route path="/Missions" element={<Missions />} />
          <Route path="/MyProfile" element={<MyProfile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
