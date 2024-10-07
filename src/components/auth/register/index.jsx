import React, { useState } from 'react';
import { doCreateUserEmailAndPassword, doSendEmailVerification } from '/Users/jbmac/Desktop/Projects/Personal/FitnessWebApp/fitjoy/src/firebase/auth.js';

function Register(){
    // Store user input
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        try{
            await doCreateUserEmailAndPassword(email, password);

            await doSendEmailVerification();
            setMessage('A verification email has been sent to your email. Please check email for your verification link.')
        } catch(error){
            setError(error.message);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            {error && <p style={{color:'red'}}>{error}</p>}
            {message && <p style={{color: 'green' }}>{message}</p>}
            <form onSubmit={handleRegister}>
                <input 
                type="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <input 
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type='submit'>Register</button>
            </form>
        </div>
    );
}

export default Register;