import React from 'react'

const JobCard = ({ job }) => {
    return (
        <div className='w-[300px] h-52 p-2 border-2 border-slate-400 rounded-md bg-slate-50'>
            <strong className='text-2xl'>{job.jobName}</strong>
            <p>{job.jobDescription}</p>
            <button className='p-[3px] border-2 border-green-800 bg-green-600 text-white rounded-md'>Apply</button>
        </div>
    )
}

export default JobCard;
