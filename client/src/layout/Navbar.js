import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='p-5 text-sky-600 font-bold text-3xl bg-slate-200'>
        <Link to={"/"}>Job Portal</Link>
    </div>
  )
}

export default Navbar;
