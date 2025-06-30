import { Route, Routes, NavLink } from 'react-router';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <div>
      <nav className="flex gap-6 border">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile/tester">Profile</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
