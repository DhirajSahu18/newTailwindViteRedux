import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './features/Auth/Login';
import Signup from './features/Auth/Signup';
import ProfileOptions from './components/Profile';
import AttendancePage from './components/AttendancePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AttendancePage />} /> {/* Default route */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
