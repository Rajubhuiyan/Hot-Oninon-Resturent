import React, { useContext,  useState } from 'react';
import './SignUpPage.css';
import logo from '../../images/header/logo2.png';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';
import { cartContext } from '../../App';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useHistory, useLocation } from 'react-router';

initializeApp(firebaseConfig);

const SignUpPage = () => {


    const [priceAndCart, setPriceAndCart] = useContext(cartContext);

    const [users, setUsers] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        photo: '',
        error: '',
        success: false,
    });

    const [newUser, setNewUser] = useState(true);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleBlur = (event) => {
        let isFieldValid = true;
        if (event.target.name === 'name') {
            isFieldValid = event.target.value;
        }
        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value)
        }
        if (event.target.name === 'password') {
            isFieldValid = event.target.value.length > 6 && /\d{1}/.test(event.target.value);
        }
        if (event.target.name === 'confirmPassword') {
            isFieldValid = event.target.value;
        }
        if (isFieldValid) {
            //[...cart, newCart]
            const newUserInfo = { ...users };
            newUserInfo[event.target.name] = event.target.value;
            setUsers(newUserInfo);
        }
    }

    const signUpSubmit = (event) => {
        if (newUser && users.password !== users.confirmPassword) {
            return alert(`Password Didn't Match`)
        }
        else {
            if (newUser) {
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, users.email, users.password)
                    .then((userCredential) => {
                        const user = { ...users };
                        setPriceAndCart({ ...priceAndCart, email: user.email, name: user.name });
                        updateUserName(users.name)
                        history.replace(from)
                    })
                    .catch((error) => {
                        const errorMessage = error.message;
                        const user = { ...users }
                        user.error = errorMessage;
                        setUsers(user)
                    });
            }
            if (newUser === false) {
                const auth = getAuth();
                signInWithEmailAndPassword(auth, users.email, users.password)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        setPriceAndCart({ ...priceAndCart, email: user.email, name: user.displayName });
                        history.replace(from)

                    })
                    .catch((error) => {
                        const errorMessage = error.message;
                        const user = { ...users }
                        user.error = errorMessage;
                        setUsers(user)
                    });
            }

        }
        event.preventDefault()
    }
    const updateUserName = name => {
        const auth = getAuth();
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(() => {
            
        }).catch((error) => {

        });
    }


    return (
        <div className="signup-container">
            <div>
                <div className="signup-logo">
                    <img className="img-fluid mb-5" src={logo} alt="" />
                </div>
                <div className="signup-logo">
                    <form onSubmit={signUpSubmit}>
                        {
                            newUser && <input required onBlur={handleBlur} defaultValue="" name="name" type="text" placeholder="Name" />
                        }
                        <input required onBlur={handleBlur} defaultValue="" type="email" name="email" id="" placeholder="Email" />
                        <input required onBlur={handleBlur} defaultValue="" type="password" name="password" id="" placeholder="Password" />
                        {
                            newUser && <input required onBlur={handleBlur} defaultValue="" type="password" name="confirmPassword" id="" placeholder="Confirm Password" />
                        }
                        {
                            newUser ? <input className="input-btn" type="submit" value="Sign Up" /> : <input className="input-btn" type="submit" value="Sign In" />
                        }
                        {
                            newUser ? <p onClick={() => setNewUser(false)} style={{ textAlign: 'center', color: 'red', cursor: 'pointer' }}>Already have an account</p>
                                : <p onClick={() => setNewUser(true)} style={{ textAlign: 'center', color: 'red', cursor: 'pointer' }}>Create New Account</p>
                        }
                        <p>{users.error}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;