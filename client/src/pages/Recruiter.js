import React from 'react';
import AddJob from '../components/AddJob';
import { Link } from 'react-router-dom';

const Recruiter = () => { 

  return (
    <div>
      <h1>Hello Recruiter</h1>
      <div className="m-4 border-2 w-52 h-32">
        <p>Want to post a new job !</p>
        <Link to={'/recruiter/addJob'}>Add Job</Link>
      </div>
      <div className="m-4 border-2 w-52 h-32">
        <p>Want to show all the jobs posted by you</p>
        <button className="border-2">Show</button>
      </div>
    </div>
  )
}

export default Recruiter;
