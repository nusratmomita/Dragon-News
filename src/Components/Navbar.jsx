import React from 'react';
import logo from '../assets/logo.png'
import { format } from "date-fns"

const Navbar = () => {
    
    const now = new Date();
    const day = format(now , "EEEE");
    const DateName = format(now , "MMMM MM , yyyy")

    return (
        <div className='mt-20 flex flex-col justify-center items-center gap-3 '>
            <img src={logo} alt="logo" />
            <p className='text-2xl  text-accent'>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-2xl'>
                <span>{day}</span>
                <span className='text-accent'>, {DateName}</span>
            </p>
        </div>
    );
};
export default Navbar;