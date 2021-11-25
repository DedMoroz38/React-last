import { useState } from 'react';
import firebase from "firebase";
import { NavLink } from 'react-router-dom';
import Header from '../components/header/header';


export const Login = () => {
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
            await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='top'>
            <Header />
            <div className='container '>
                <h1 className='reg-heading'>Login</h1>
                <form className='reg-box' onSubmit={handleSubmit}>
                    <p>Fill in the form below to login to your account.</p>
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
                        Don't have an account? <NavLink className='reg-link' to="/signup">Sign up</NavLink>
                    </p>
                </form>
            </div>
        </div>
    );
};

