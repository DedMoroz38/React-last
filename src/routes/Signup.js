import { useState } from 'react';
import firebase from 'firebase';
import { NavLink } from 'react-router-dom';
import Header from '../components/header/header';
import { analytics } from '../services/firebase';



export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handlePassChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
        } catch (error) {
            console.log('failed');
            setError(error.message);
        }
    };

    return (
        <div className='top'>
            <Header />
            <div className='container'>
                <h1 className='reg-heading'>Registration</h1>
                <form className='reg-box' onSubmit={handleSubmit}>
                    <p>Fill in the form below to register new account.</p>
                    <div>
                        <input className='reg-inputs'
                            placeholder="Email"
                            name="email"
                            type="email"
                            onChange={handleEmailChange}
                            value={email}
                        />
                    </div>
                    <div>
                        <input className='reg-inputs'
                            placeholder="Password"
                            name="password"
                            onChange={handlePassChange}
                            value={password}
                            type="password"
                        />
                    </div>
                    <div>
                        {error && <p>{error}</p>}
                        <button className='reg-button' type="submit">Login</button>
                    </div>
                    <p>
                        Already have an account? <NavLink className='reg-link' to="/login">Sign in</NavLink>
                    </p>
                </form>
            </div>
        </div>
    );
};
