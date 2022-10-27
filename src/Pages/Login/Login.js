import React from "react";
import { Link } from "react-router-dom";
import Header from "../Shared/Header/Header";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <Header></Header>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse mt-[-60px] bg-slate-400 rounded-2xl shadow-2xl">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-slate-200">Login now!</h1>
            <p className="py-6 text-white ">
              If you are already a member of our website then login from here.
              If not, please register.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="Password"
                  placeholder="Password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="mt-2 text-gray-500">
                No account yet?
                <Link to="/registration">
                  <code className="text-pink-500"> SignUp Now</code>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
