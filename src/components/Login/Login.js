import React, { useContext, useState } from 'react';
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
// import firebaseConfig from '../../firebase.config'
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import firebaseConfig from '../../firebase.config';

firebase.initializeApp(firebaseConfig);


const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        newUser: false,
        name: '',
        email: '',
        phone: ''
    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                sessionStorage.setItem('loggedInUser', loggedInUser);
                history.replace(from);

            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }
    return (
        <div className="d-flex justify-content-center align-items-center  flex-column">
            TaskDo
            <div className="d-flex justify-content-center align-items-center flex-column login-form border mt-5">
                <p className="login-text">Login With</p>

                <div className="">
                    <svg className="google-logo" width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                            <path d="M30.9999 16.2334C30.9999 15.1547 30.9128 14.0702 30.7268 13.0089H15.8108V19.1198H24.3525C23.998 21.0907 22.8592 22.8341 21.1915 23.942V27.9071H26.2875C29.28 25.1432 30.9999 21.0615 30.9999 16.2334Z" fill="#4285F4" />
                            <path d="M15.811 31.7381C20.0761 31.7381 23.6729 30.3328 26.2935 27.9071L21.1975 23.9421C19.7797 24.91 17.9494 25.4581 15.8168 25.4581C11.6913 25.4581 8.19322 22.6651 6.93811 18.9099H1.67944V22.9974C4.36398 28.3561 9.83183 31.7381 15.811 31.7381Z" fill="#34A853" />
                            <path d="M6.93224 18.9099C6.26983 16.939 6.26983 14.8049 6.93224 12.834V8.74646H1.67939C-0.563539 13.2305 -0.563539 18.5134 1.67939 22.9974L6.93224 18.9099Z" fill="#FBBC04" />
                            <path d="M15.811 6.27995C18.0656 6.24497 20.2446 7.09629 21.8774 8.659L26.3923 4.12831C23.5334 1.4344 19.739 -0.0466772 15.811 -2.9236e-05C9.83183 -2.9236e-05 4.36398 3.38195 1.67944 8.74646L6.9323 12.834C8.1816 9.073 11.6854 6.27995 15.811 6.27995Z" fill="#EA4335" />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="31" height="31.7381" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <div className="d-flex justify-content-center google-btn  border align-items-center">
                        <p onClick={handleSignIn} className="pt-3">
                            continue with Google</p>
                    </div>

                </div>

                <small>Don’t have an account? <span className="pt-3 text-primary">Create an account</span></small>



            </div>
        </div>
    );
};

export default Login;

// import React from 'react';

// const Login = () => {
//     return (
//         <div>
//             this is login
//         </div>
//     );
// };

// export default Login;