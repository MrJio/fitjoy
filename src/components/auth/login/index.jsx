import React, {useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import { doSignInWithGoogle } from "/Users/jbmac/Desktop/Projects/Personal/FitnessWebApp/fitjoy/src/firebase/auth.js";

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try{
            await signInWithEmailAndPassword(auth, email, password);
            window.location.href = '/dashboard';
        } catch (error) {
            setError(error.message);
        }
    };

    const handleGoogleLogin = async () => {
        try{
            await doSignInWithGoogle();
            window.location.href = '/dashboard';
        } catch (error){
            setError(error.message);
            window.location.href = '/register';
        }
    };
    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{color:'red'}}>{error}</p>}
            <form onSubmit={handleLogin}>
                <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />
                <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                <button type="submit">Login</button>
            </form>
            <button onClick={handleGoogleLogin}>Login with Google</button>
        </div>
    );
}

export default Login;