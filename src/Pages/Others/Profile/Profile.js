import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../contexts/UserContext";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
// import "./Profile.css";
const Profile = () => {
  const { user } = useContext(AuthContext);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    toast("Your profile update SuccessFully", {
      position: "top-center",
      autoClose: 3000,
    });
  };
  return (
    <div className="profileContainer">
      <Header></Header>
      <div className=" overflow-hidden w-[70%] mx-auto mb-30 mt-10 ">
        <div className="proCart">
          <div className="title  my-10 py-5 rounded-2xl">
            <h1 className="text-3xl font-extrabold text-center profileText">
              My Profile
            </h1>
          </div>
          <div className="profileImg">
            <img
              className="w-[300px] h-[300px] rounded-full mx-auto mb-3"
              src={user?.photoURL}
              alt=""
            />
          </div>
          <div className="proBody ">
            <div className="bodyTileInner text-3xl font-bold text-center rounded-2xl py-10 profileText">
              <h2 className="profileText">{user?.displayName}</h2>
              <p className="profileText">{user?.email}</p>
              <div className="divider">****</div>
            </div>

            {/* form  */}
            <div className="card flex-shrink-0   shadow-2xl bg-base-100 mt-3">
              <p className="py-5 text-center font-semibold text-xl text-black">
                Update Your Profile
              </p>
              <form>
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
                      defaultValue={user?.displayName}
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
                      defaultValue={user?.email}
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
                    />
                  </div>

                  <div className="form-control mt-6">
                    <button
                      onClick={handleProfileUpdate}
                      className="btn btn-primary"
                    >
                      Update Profile
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
};

export default Profile;
