// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import RegisterForm from './RegisterForm';
// import LoginForm from './LoginForm';
// import InformationalPages from './InformationalPages';
// import SymptomTracker from './SymptomTracker';
// import PeriodTrackerList from './PeriodTrackerList';
// import Navbar from './NavBar';
// import ChatBot from './ChatBot'; // Ensure correct path

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userEmail, setUserEmail] = useState('');

//   const handleLogin = (email) => {
//     setIsLoggedIn(true);
//     setUserEmail(email);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUserEmail('');
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
//         <Routes>
//           <Route path="/register" element={<RegisterForm />} />
//           <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
//           <Route path="/information" element={isLoggedIn ? <InformationalPages /> : <Navigate to="/login" replace />} />
//           <Route path="/symptoms" element={isLoggedIn ? <SymptomTracker userEmail={userEmail} /> : <Navigate to="/login" replace />} />
//           <Route path="/periods" element={isLoggedIn ? <PeriodTrackerList userEmail={userEmail} /> : <Navigate to="/login" replace />} />
//           <Route path="/chat" element={isLoggedIn ? <ChatBot /> : <Navigate to="/login" replace />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import InformationalPages from './InformationalPages';
import SymptomTracker from './SymptomTracker';
import PeriodTrackerList from './PeriodTrackerList';
import Navbar from './NavBar';
import ChatBot from './ChatBot';
import BlogSection from './BlogSection'; // Import BlogSection component

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleLogin = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
  };

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/information" element={isLoggedIn ? <InformationalPages /> : <Navigate to="/login" replace />} />
          <Route path="/symptoms" element={isLoggedIn ? <SymptomTracker userEmail={userEmail} /> : <Navigate to="/login" replace />} />
          <Route path="/periods" element={isLoggedIn ? <PeriodTrackerList userEmail={userEmail} /> : <Navigate to="/login" replace />} />
          <Route path="/chat" element={isLoggedIn ? <ChatBot /> : <Navigate to="/login" replace />} />
          <Route path="/blog" element={isLoggedIn ? <BlogSection /> : <Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
