import React from 'react';
import { NavLink } from 'react-router';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/career'>Career</NavLink></li>
    </>

    
    return (
        <div className='flex justify-between items-center'>
            <div className='left-side'></div>
            <div>
                <ul className='ml-40 flex gap-3 justify-center items-center text-accent font-semibold text-xl'>
                {
                    links
                }
                </ul>
               
            </div>
            <div className="mr-20 login-btn flex gap-3 items-center">
                <CgProfile size={35}></CgProfile>
                <button className='btn btn-primary w-25'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;