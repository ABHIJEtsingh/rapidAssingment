import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './home';
import ContactUs from './contactUs';
import TaskPage from './taskPage';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/tasks">Task Page</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/tasks" element={<TaskPage />} />
      </Routes>
    </Router>
  );
}

export default App;
