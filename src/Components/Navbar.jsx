import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../Provider/AuthProvider";
// import { use } from "react";

const Navbar = () => {
  const {user} = useContext(AuthContext);

  // for login btn to go to login page
  const navigate = useNavigate();

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );

  return (
    <div className="flex justify-between items-center">
      <div className="left-side"></div>
      <div>
        <ul className="ml-40 flex gap-3 justify-center items-center text-accent font-semibold text-xl">
          {links}
        </ul>
      </div>

      <div className="mr-20 login-btn flex gap-3 items-center">
        <h1 className="text-lg font-bold text-red-600 p-2 rounded-2xl border-2 border-red-400">Hi , {user ? `${user.displayName===null ? `${user.email}`: `${user.displayName}`}` : "user"}</h1>
        <CgProfile size={35}></CgProfile>
        <button
          onClick={() => navigate("/auth/login")}
          className="btn btn-primary w-25"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
