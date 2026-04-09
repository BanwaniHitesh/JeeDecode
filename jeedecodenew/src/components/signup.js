import React, { useState } from 'react';
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User registered:", userCredential.user);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className='row justify-content-center align-items-center' style={{ height: '750px' }}>
        <div className='container text-center p-3 pt-5' style={{ maxWidth: '300px', margin: 'auto', textAlign: 'center', backgroundColor: '#ffffff', borderRadius: '10px' }}>
          <h2 style={{fontFamily: 'Times New Roman, Times, serif'}}>Sign Up</h2>
          <form onSubmit={handleSignup}>
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
            <input
              className='mt-3'
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <br />
            <input type='checkbox' onChange={() => setShowPassword(!showPassword)} /> Show Password
            <br />
            <button type="submit" className='btn btn-primary m-3'>
              Register
            </button>
          </form>
          <Link to="/">Already have an account? Log in here</Link>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </>
  );
};

export default Signup;
