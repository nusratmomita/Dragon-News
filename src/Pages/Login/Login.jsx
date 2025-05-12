import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { Login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    
    const formTarget = e.target;
    const email = formTarget.email.value;
    const password = formTarget.password.value;
    

    Login(email, password)
      .then(() => {
            toast.success("You have successfully logged in!");
            setTimeout(()=>{
              navigate(`${location.state ? location.state : "/"}`)
            },2000)
      })
      .catch(() => {
        toast.error("Wrong Credentials. Try again");
      });
  };

  return (
    <div>
      <ToastContainer></ToastContainer>
      <div className="card mt-20 bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl text-[#403F3F] font-semibold text-center">
            Login to your account
          </h1>
          <div className="divider"></div>
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label font-bold text-[#403F3F]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />

            <label className="label font-bold text-[#403F3F]">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>

            <NavLink to="/auth/register" className="text-center mt-5">
              Don't have an account?{" "}
              <span className="underline text-blue-800"> Register Now!</span>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
