import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {

    const {createUser , setUser} = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const formTarget = e.target;

        const name = formTarget.name.value;
        const email = formTarget.email.value;
        const photoURL = formTarget.photoURL.value;
        const password = formTarget.password.value;

        // console.log(name ,email , photoURL , password)

        if(!name || !email || !photoURL || !password){
            toast.error("You must fill all the fields to continue")
            return
        }
        if(password.length < 6){
            toast.error("Password must be at least 6 characters long");
            return
        }
        if(!/[a-z]/.test(password)){
            toast.error("Password must be at least one lower case letter");
            return
        }
        if(!/[A-Z]/.test(password)){
            toast.error("Password must be at least one upper case letter");
            return
        }
        if(!/\d/.test(password)){
            toast.error("Password must be at least one number letter");
            return
        }
        
        createUser(email,password)
        .then((result)=>{
            const user = result.user;
            // console.log(user)
            setUser(user)
            toast.success("You have successfully created a new account!");
        })
        .catch((error)=>{
            toast.error(error);
        })

    }
    return (
        <div>
            <ToastContainer/>
            <div className="card mt-20 mb-30 bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-2xl text-[#403F3F] font-semibold text-center">Register to your account</h1>
                    <div className="divider"></div>
                    <form onSubmit={handleRegister} className="fieldset">
                        <label className="label font-bold text-[#403F3F]">Name</label>
                        <input type="text" name="name" className="input" placeholder="Name" />

                        <label className="label font-bold text-[#403F3F]">Email Address</label>
                        <input type="email" name="email" className="input" placeholder="Email" />

                        <label className="label font-bold text-[#403F3F]">Photo URL</label>
                        <input type="photoURL" name="photoURL" className="input" placeholder="Photo URL" />

                        <label className="label font-bold text-[#403F3F]">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" />

                        <button type="submit" className="btn btn-neutral mt-4">Register</button>
                        <NavLink to="/auth/login" className="text-center mt-5">Already have an account? <span className="underline text-blue-800"> Login here!</span></NavLink>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;