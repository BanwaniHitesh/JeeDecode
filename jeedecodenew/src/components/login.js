import React, { useState } from 'react';
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/physics');
        } catch (err) {
            setError("Invalid email or password");
        }
    };
    return (
        <>
            <div className='row justify-content-center align-items-center' style={{ height: '750px' }}>
                <div className='container text-center p-3 pt-5' style={{ maxWidth: '300px', backgroundColor: '#ffffff', borderRadius: '10px' }}>

                    <h2 style={{ fontFamily: 'Times New Roman, Times, serif' }}>Welcome Back!</h2>
                    <form onSubmit={handleLogin} >
                        <input
                            className='mt-3'
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <br />
                        <input
                            className='mt-3'
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <br />
                        <input type="checkbox" className='mt-3' onClick={() => setShowPassword(!showPassword)} /> Show Password
                        <br />
                        <button type="submit" className='btn btn-primary m-3'>
                            Log In
                        </button>
                    </form>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <Link to="/signup">Don't have an account? Sign up here</Link>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
