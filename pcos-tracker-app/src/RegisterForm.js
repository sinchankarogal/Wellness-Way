// import React, { useState } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const RegisterForm = () => {
//     const [name, setName] = useState('');
//     const [phone, setPhone] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleRegister = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post(
//                 'http://localhost:9090/PCOS/User/register',
//                 {
//                     name,
//                     phone,
//                     email,
//                     password
//                 },
//                 {
//                     timeout: 5000 // Timeout in milliseconds (adjust as needed)
//                 }
//             );
//             console.log('User registered:', response.data);
//             alert('Registration successful!');
//         } catch (error) {
//             console.error('Registration error:', error);
//             setError('Failed to register. Please try again.');
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <form onSubmit={handleRegister} className="register-form">
//                 <h2 className="text-center">Register</h2>
//                 {error && <div className="alert alert-danger">{error}</div>}
//                 <div className="form-group">
//                     <label>Name</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         placeholder="Name"
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Phone</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={phone}
//                         onChange={(e) => setPhone(e.target.value)}
//                         placeholder="Phone"
//                         required
//                     />
//                 </div>
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
//                 <button type="submit" className="btn btn-primary btn-block mt-3">Register</button>
//             </form>
//         </div>
//     );
// };

// export default RegisterForm;

import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterForm.css'; // Import the CSS file

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:9090/PCOS/User/register',
                {
                    name,
                    phone,
                    email,
                    password
                },
                {
                    timeout: 5000 // Timeout in milliseconds (adjust as needed)
                }
            );
            console.log('User registered:', response.data);
            alert('Registration successful!');
        } catch (error) {
            console.error('Registration error:', error);
            setError('Failed to register. Please try again.');
        }
    };

    return (
        <div className="register-page">
            <div className="container mt-5">
                <form onSubmit={handleRegister} className="register-form">
                    <h2 className="text-center">Join us today!</h2>
                    <p className="text-center">Sign up to start your wellness journey.</p>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Phone"
                            required
                        />
                    </div>
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
                    <button type="submit" className="btn btn-primary btn-block mt-3">Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
