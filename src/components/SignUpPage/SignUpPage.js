import React, { useContext, useEffect, useState } from 'react';
import './SignUpPage.css';
import logo from '../../images/header/logo2.png';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';
import { cartContext } from '../../App';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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

    const [newUser, setNewUser] = useState(false);




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
        if (users.password !== users.confirmPassword) {
            return alert(`Password Didn't Match`)
        }
        else {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, users.email, users.password)
                .then((userCredential) => {
                    const user = { ...users };
                    setPriceAndCart({ ...priceAndCart, email: user.email });
                    history.replace(from)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });

        }
        event.preventDefault()
    }


    return (
        <div className="signup-container">
            <div>
                <div className="signup-logo">
                    <img className="img-fluid mb-5" src={logo} alt="" />
                </div>
                <div className="signup-logo">
                    <form onSubmit={signUpSubmit}>
                        <input onBlur={handleBlur} defaultValue="" name="name" type="text" placeholder="Name" />
                        <input onBlur={handleBlur} defaultValue="" type="email" name="email" id="" placeholder="Email" />
                        <input onBlur={handleBlur} defaultValue="" type="password" name="password" id="" placeholder="Password" />
                        <input onBlur={handleBlur} defaultValue="" type="password" name="confirmPassword" id="" placeholder="Confirm Password" />
                        <input className="input-btn" type="submit" value="Sign Up" />
                        <p style={{textAlign: 'center', color:'red'}}>Already have an account</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;