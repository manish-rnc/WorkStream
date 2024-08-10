import React, { useRef } from 'react'

const AddJob = () => {

    const jobName = useRef(null);
    const jobDescription = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // post
        
        alert("Job Posted Successfully");
        // window.history.back();

    };

    return (

        <div>
            <form onSubmit={handleSubmit()}>
                <input
                    ref={jobName}
                    type='text'
                    placeholder='Enter the Job Name'
                    className='border-2 m-4'
                />
                <br />
                <textarea
                    ref={jobDescription}
                    placeholder='Enter the Job Description'
                    className='border-2 m-4'
                    rows='4'
                    cols='50'
                />
                <br />
                <button
                    type='submit'
                    className='m-4 bg-green-500 p-2 rounded-sm px-3'
                >
                    Add
                </button>
            </form>
        </div>
    )
}

export default AddJob;
