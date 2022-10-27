import React from "react";
import { Link } from "react-router-dom";
import RightSideNav from "../RightSideNav/RightSideNav";
import "./Header.css";

const Header = () => {
  const user = {};
  return (
    <div className="bg-cyan-600">
      <div className="navbar bg-cyan-600 w-[95%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-teal-500 rounded-box w-52"
            >
              <li>
                <Link to="/home">Home</Link>
              </li>

              <li>
                <Link to="/about">About-M</Link>
              </li>
              <div className="ml-4">
                <RightSideNav></RightSideNav>
              </div>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Daily News
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/home">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
            {user?.uid && (
              <li>
                <Link to="/Profile">Profile</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal p-0">
            {user?.uid ? (
              <li>
                <Link to="/registration">{user?.displayName}</Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/registration">Registration</Link>
                </li>

                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {/* {user?.photoURL ? (
                  <img src={user.photoURL} />
                ) : (
                  <img src="https://placeimg.com/80/80/people" />
                )} */}
                <img
                  src="https://placeimg.com/80/80/people"
                  alt="profile img"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link>Logout</Link>
                {/* <Link onClick={() => logOut()} to="/login">
                  Logout
                </Link> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
