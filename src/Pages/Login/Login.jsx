import React from "react";
import { NavLink } from "react-router";


const Login = () => {
    return (
        <div>       
            <div className="card mt-20 bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-2xl text-[#403F3F] font-semibold text-center">Login to your account</h1>
                    <div className="divider"></div>
                    <form className="fieldset">
                        <label className="label font-bold text-[#403F3F]">Email Address</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label font-bold text-[#403F3F]">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                        <NavLink to="/auth/register" className="text-center mt-5">Don't have an account? <span className="underline text-blue-800"> Register Now!</span></NavLink>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login