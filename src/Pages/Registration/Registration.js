import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Shared/Header/Header";
import "./Registration.css";

const Registration = () => {
  const [terms, setTerms] = useState(false);

  // terms and condition
  const handleTerms = (e) => {
    setTerms(e.target.checked);
  };

  return (
    <div>
      <Header></Header>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse bg-slate-400 rounded-2xl shadow-2xl">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-slate-200">
              Registration Now
            </h1>
            <p className="py-6 text-white">
              If you want to use everything on our website, you must register.
              Please Create your account Fast
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Image URL"
                  className="input input-bordered"
                />
              </div>
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
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <Link to="/termsAndCondition">
                    <span className="label-text">
                      Accept Terms And Condition
                    </span>
                  </Link>
                  <input
                    type="checkbox"
                    onClick={handleTerms}
                    className="checkbox checkbox-accent"
                  />
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" disabled={!terms}>
                  Registration
                </button>
              </div>
              <p className="mt-2 text-gray-500">
                Already have an account?
                <Link to="/login">
                  <code className="text-pink-500"> Log in</code>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
