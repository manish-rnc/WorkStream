import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex justify-evenly p-6 text-white'>
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
                    src={"https://images.squarespace-cdn.com/content/v1/5bb2150629f2cc293bb4a64c/1538470376075-4VBU00K24O2NF1BQDL5K/bg-banner-royal-blue.png"}
                    alt="background image"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>
            <div className='flex'>
                <div className='w-[450px] bg-blue-200 pb-[152px] text-black rounded-xl'>
                    <h1 className='ms-24 p-8 font-bold text-3xl'>For Recruiters</h1>
                    <div className='p-8 py-10'>
                        <p className='font-medium'>We are the market–leading candidate hiring platform to identify and hire developers with the right skills.</p>
                        <Link to={"/recruiter/register"}>
                            <p className='my-4 bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded text-center'>Register</p>
                        </Link>
                        <Link to={"/recruiter/login"}>
                            <p className='bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded text-center'>Sign In</p>
                        </Link>
                    </div>
                </div>
                <div className='w-[450px] pb-[152px]'>
                    <h1 className='ms-20 p-8 font-bold text-3xl'>For Applicants</h1>
                    <div className='p-8 py-10'>
                        <p className='font-medium'>Join over 1 million developers, find jobs, apply and get hired.</p>
                        <Link to={"/applicant/register"}>
                            <p className='my-4 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded text-center border'>Register</p>
                        </Link>
                        <Link to={"/applicant/login"}>
                            <p className=' hover:bg-blue-900 text-white font-bold py-2 px-4 rounded text-center border'>Sign In</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
