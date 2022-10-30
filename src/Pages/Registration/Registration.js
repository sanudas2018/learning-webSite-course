import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Shared/Header/Header";
import { AiFillGoogleCircle } from "react-icons/ai";
import "./Registration.css";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../contexts/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const { googleLogin, createUser, updateUserProfile, verifyEmail } =
    useContext(AuthContext);
  const [terms, setTerms] = useState(false);
  const [errorCheck, setErrorCheck] = useState("");
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  // google signin
  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };
  // email and password auth
  const handleEmailAndPassword = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.img.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      setErrorCheck("Please add at last 6 Character");
      return;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      setErrorCheck("Please add at last one UpperCase");
      return;
    }

    if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setErrorCheck("Please add at last one Special Character");
      return;
    }
    setErrorCheck("");
    createUser(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        console.log(user);
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        handleVerifyEmail();
        // navigate("/login");
        toast.success("Please check you Email and Verify your mail", {
          position: "top-center",
          autoClose: 3000,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error(errorMessage, {
          position: "top-center",
          autoClose: 3000,
        });
      });
  };

  // update user profile
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.log(error));
  };
  // email verifyEmail
  const handleVerifyEmail = () => {
    verifyEmail()
      .then(() => {})
      .then((error) => console.log(error));
  };
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
          <div className="card flex-shrink-0   shadow-2xl bg-base-100 overflow-hidden">
            <p className="text-red-500 font-bold text-center mt-4 overflow-hidden">
              {errorCheck}
            </p>
            <form onSubmit={handleEmailAndPassword}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image URL</span>
                  </label>
                  <input
                    type="text"
                    name="img"
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
                    name="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input input-bordered"
                    required
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
                <div className="divider">OR</div>

                <div className="socialAccount grid grid-cols-3 gap-2">
                  <div className="google ">
                    <Link>
                      <button
                        onClick={handleGoogleLogin}
                        className="btn gap-2 cursor-pointer btnGoogle"
                      >
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
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Registration;
