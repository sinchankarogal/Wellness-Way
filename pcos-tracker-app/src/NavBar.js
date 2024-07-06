// import React from 'react';
// import { Link } from 'react-router-dom';
// import './NavBar.css';

// const Navbar = ({ isLoggedIn, onLogout }) => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#264653' }}>
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">PCOS Info</Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             {!isLoggedIn ? (
//               <>
//                 <NavItem to="/login" text="Login" />
//                 <NavItem to="/register" text="Register" />
//               </>
//             ) : (
//               <>
//                 <NavItem to="/information" text="Information" />
//                 <NavItem to="/symptoms" text="Symptom Tracker" />
//                 <NavItem to="/periods" text="Period Tracker" />
//                 <NavItem to="/chat" text="Chatbot" />
//                 <li className="nav-item">
//                   <button className="btn btn-outline-danger" onClick={onLogout}>Logout</button>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// const NavItem = ({ to, text }) => (
//   <li className="nav-item">
//     <Link className="nav-link" to={to}>{text}</Link>
//   </li>
// );

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#264653' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Wellness Way</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {!isLoggedIn ? (
              <>
                <NavItem to="/login" text="Login" />
                <NavItem to="/register" text="Register" />
              </>
            ) : (
              <>
                <NavItem to="/information" text="Information" />
                <NavItem to="/blog" text="Blog" /> 
                <NavItem to="/symptoms" text="Symptom Tracker" />
                <NavItem to="/periods" text="Period Tracker" />
                <NavItem to="/chat" text="Chatbot" />
                <li className="nav-item">
                  <button className="btn btn-outline-danger" onClick={onLogout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ to, text }) => (
  <li className="nav-item">
    <Link className="nav-link" to={to}>{text}</Link>
  </li>
);

export default Navbar;
