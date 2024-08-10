import React, { useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { checkValidData } from '../utils/validation';

const Register = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const ageRef = useRef(null);
    const phoneRef = useRef(null);
    const qualificationRef = useRef(null);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);

    const location = useLocation();
    const userType = location.pathname === '/recruiter/register' ? 'recruiter' : 'applicant';

    const handleRegister = async (e) => {

        e.preventDefault();

        const details = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        if (userType === 'applicant') {
            details.age = ageRef.current.value;
            details.phone = phoneRef.current.value;
            details.qualification = qualificationRef.current.value;
        }

        const validationMessage = checkValidData(emailRef.current.value, passwordRef.current.value);
        setErrorMessage(validationMessage);
        if (validationMessage) return;

        try {

            const response = await axios.post(`http://localhost:8080/${userType}/register`, details);
            const data = response.data;
            console.log(data);

            if (data.message === 'Successfully registered') {
                alert('Successfully Registered');
                navigate(`/login/${userType}`);
            }

        }
        catch (error) {
            console.log(error);
        }

    }


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
                onSubmit={handleRegister}
                className='w-[425px] absolute p-12 bg-black my-8 mx-auto left-0 right-0 text-white rounded-md bg-opacity-85'
            >
                <input
                    ref={nameRef}
                    type='text'
                    placeholder='Enter name'
                    className='p-3 my-3 w-full border rounded-md bg-transparent'
                />
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
                {
                    userType === 'applicant' &&
                    <div>
                        <input
                            ref={ageRef}
                            type='text'
                            placeholder='Enter age'
                            className='p-3 my-3 w-full border rounded-md bg-transparent'
                        />
                        <input
                            ref={phoneRef}
                            type='text'
                            placeholder='Enter phone number'
                            className='p-3 my-3 w-full border rounded-md bg-transparent'
                        />
                        <input
                            ref={qualificationRef}
                            type='text'
                            placeholder='Enter your qualification'
                            className='p-3 my-3 w-full border rounded-md bg-transparent'
                        />
                    </div>
                }
                <p className='text-red-600 font-medium'>{errorMessage}</p>
                <button
                    type='submit'
                    className="p-3 my-4 w-full rounded-md font-semibold"
                    style={{ backgroundColor: "blue" }}
                >
                    Register
                </button>
            </form>
        </div>
    )
}

export default Register;
