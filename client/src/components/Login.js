import React, { useRef, useState } from 'react';
import axios from 'axios';
import Recruiter from '../pages/Recruiter';
import Applicant from '../pages/Applicant';
import { checkValidData } from '../utils/validation';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const location = useLocation();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    // console.log(location.pathname);
    const userType = location.pathname === '/recruiter/login' ? 'recruiter' : 'applicant';
    // console.log(userType);

    const handleLogin = async (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // const validationMessage = checkValidData(email, password);
        // setErrorMessage(validationMessage);
        // if (validationMessage) return;

        try {
            const response = await axios.post(`http://localhost:8080/${userType}/login`, {
                email,
                password
            });

            const data = response.data;
            console.log(data);
            if (data.message === 'Login successful') {
                navigate(`/${userType}`);
            }
        } catch (error) {
            console.error("ERROR:", error);
        }
    };

    return (
            <div>
                <div className="absolute"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: -1
                    }}>
                    <img
                        src={"https://static.vecteezy.com/system/resources/previews/007/039/559/non_2x/businessman-holding-virtual-human-icon-for-focus-customer-group-or-human-recruitment-and-development-concept-free-photo.jpg"}
                        alt="background image"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                <form
                    onSubmit={handleLogin}
                    className='w-[425px] absolute p-12 bg-black my-24 mx-auto left-0 right-0 text-white rounded-md bg-opacity-85'
                >
                    <input
                        ref={emailRef}
                        type='text'
                        placeholder='Enter email'
                        className='p-3 my-3 w-full border rounded-md bg-transparent'
                    />
                    <input
                        ref={passwordRef}
                        type='password'
                        placeholder='Enter password'
                        className='p-3 my-3 w-full border rounded-md bg-transparent'
                    />
                    <p className='text-red-600'>{errorMessage}</p>
                    <button
                        type='submit'
                        className="p-3 my-4 w-full rounded-md font-semibold"
                        style={{ backgroundColor: "blue" }}
                    >
                        Sign In
                    </button>
                </form>
            </div>
    );
};

export default Login;
