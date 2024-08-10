import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Applicant = () => {

    const { email } = useParams();

    return (
        <div>
            <h2 className='p-8'>{email}</h2>
            <Link to={"/allJobs"} className='border p-4 bg-purple-400'>View All Jobs</Link>
        </div>
    )
}

export default Applicant;
