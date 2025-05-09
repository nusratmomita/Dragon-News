import React from 'react';
import { NavLink } from 'react-router';

const Register = () => {
    return (
        <div>
            <div className="card mt-20 mb-30 bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-2xl text-[#403F3F] font-semibold text-center">Register to your account</h1>
                    <div className="divider"></div>
                    <form className="fieldset">
                        <label className="label font-bold text-[#403F3F]">Name</label>
                        <input type="text" className="input" placeholder="Name" />

                        <label className="label font-bold text-[#403F3F]">Email Address</label>
                        <input type="email" className="input" placeholder="Email" />

                        <label className="label font-bold text-[#403F3F]">Photo URL</label>
                        <input type="photoURL" className="input" placeholder="Photo URL" />

                        <label className="label font-bold text-[#403F3F]">Password</label>
                        <input type="password" className="input" placeholder="Password" />

                        
                        <button className="btn btn-neutral mt-4">Register</button>
                        <NavLink to="/auth/login" className="text-center mt-5">Already have an account? <span className="underline text-blue-800"> Login here!</span></NavLink>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;