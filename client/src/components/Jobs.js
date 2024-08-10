import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from '../components/JobCard';

const Jobs = ({email}) => {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/applicant/applyJobs`);
      const data = response.data;
      console.log(data);
      setJobs(data);
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>{email}</div>
      <div className='flex flex-wrap gap-6 m-10'>
        {
          jobs.map((job) => (
            <JobCard key={job._id} job={job}/>
          ))
        }
      </div>
    </div>
  )
}

export default Jobs;
