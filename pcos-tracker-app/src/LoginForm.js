// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const LoginForm = ({ onLogin }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post(
//                 'http://localhost:9090/PCOS/User/login',
//                 { email, password },
//                 { timeout: 5000 }
//             );
//             console.log('Login response:', response);
//             if (response.status === 200) {
//                 onLogin(email); // Pass user email to parent component
//                 navigate('/information'); // Redirect to informational pages
//             } else {
//                 setError('Invalid email or password');
//             }
//         } catch (error) {
//             console.error('Login error:', error);
//             setError('Failed to login. Please try again.');
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <form onSubmit={handleLogin} className="login-form">
//                 <h2 className="text-center">Login</h2>
//                 {error && <div className="alert alert-danger">{error}</div>}
//                 <div className="form-group">
//                     <label>Email</label>
//                     <input
//                         type="email"
//                         className="form-control"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder="Email"
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Password</label>
//                     <input
//                         type="password"
//                         className="form-control"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         placeholder="Password"
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="btn btn-primary btn-block mt-3">Login</button>
//             </form>
//         </div>
//     );
// };

// export default LoginForm;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css'; // Import the CSS file

const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:9090/PCOS/User/login',
                { email, password },
                { timeout: 5000 }
            );
            console.log('Login response:', response);
            if (response.status === 200) {
                onLogin(email); // Pass user email to parent component
                navigate('/information'); // Redirect to informational pages
            } else {
                setError('Invalid email or password');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('Failed to login. Please try again.');
        }
    };

    return (
        <div className="login-page">
            <div className="container mt-5">
                <form onSubmit={handleLogin} className="login-form">
                    <h2 className="text-center">Welcome back!</h2>
                    <p className="text-center">Lets tackle pcos together</p>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="rememberMe" />
                        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                    </div>
                    <div className="text-right">
                        <a href="#" className="forgot-password">Forgot password</a>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mt-3">Log in now</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
