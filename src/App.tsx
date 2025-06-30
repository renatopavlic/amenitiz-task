import { Route, Routes } from 'react-router';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import Navbar from './components/Navbar';
import Container from './components/Container';

function App() {
  return (
    <div className="flex flex-col gap-6 min-h-screen bg-[#302e2a] text-white">
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile/:username" element={<ProfilePage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
