import React from "react";
import { Link } from "react-router-dom";
import Header from "../Shared/Header/Header";
import { AiFillGoogleCircle } from "react-icons/ai";
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
          <div className="card flex-shrink-0 w-fullshadow-2xl bg-base-100">
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
              <div className="divider">OR</div>

              <div className="socialAccount grid grid-cols-3 gap-2">
                <div className="google ">
                  <Link>
                    <button className="btn gap-2 cursor-pointer btnGoogle">
                      <label>
                        <AiFillGoogleCircle className="" />
                      </label>
                      <p>Google</p>
                    </button>
                  </Link>
                </div>
                <div className="github">
                  <Link>
                    <button className="btn gap-2 cursor-pointer btnGithub">
                      <AiFillGoogleCircle className="" />
                      GitHub
                    </button>
                  </Link>
                </div>
                <div className="facebook">
                  <Link>
                    <button className="btn gap-2 cursor-pointer btnFacebook">
                      <AiFillGoogleCircle className="" />
                      Facebook
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
