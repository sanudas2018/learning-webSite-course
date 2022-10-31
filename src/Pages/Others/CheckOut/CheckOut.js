import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../contexts/UserContext";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const singleCourseDetails = useLoaderData();
  const {
    id,
    amount,
    certificate,
    liveClass,
    description,
    image,
    modules,
    name,
    phone,
    time,
  } = singleCourseDetails;

  const handleCheckout = (e) => {
    e.preventDefault();
    toast("Your Course Enrollment successfully ", {
      position: "top-center",
      autoClose: 3000,
    });
  };
  return (
    <div className="mb-20">
      <h1 className="text-4xl font-bold mb-3 text-center">Billing details</h1>
      <div className="hero checOutbg rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div className="card w-96  shadow-xl">
              <figure>
                <img src={image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h1 className="card-title ">{name}</h1>
                <p className="font-bold">{amount} Tk</p>
                <p className="">
                  <span className="font-bold">Registration Deadline: </span>
                  {time}
                </p>
                <p className="">
                  <span className="font-bold">Live Class:</span> {liveClass}
                </p>

                <p className="">
                  <span className="font-bold">Phone Number:</span> {phone}
                </p>
              </div>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="fastName flex w-100% justify-between">
                <div className="form-control w-[60%]">
                  <label className="label">
                    <span className="label-text">Fast Name</span>
                  </label>
                  <input
                    type="text"
                    readOnly
                    defaultValue={user?.displayName}
                    placeholder="Fast Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control w-[35%]">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="input input-bordered"
                  />
                </div>
              </div>
              {/* ...  */}
              <div className="country flex w-100% justify-between">
                <div className="form-control w-[50%]">
                  <label className="label">
                    <span className="label-text">COUNTRY / REGION</span>
                  </label>
                  <input
                    type="text"
                    placeholder="COUNTRY / REGION"
                    className="input input-bordered"
                  />
                </div>
                {/* ...  */}
                <div className="form-control w-[45%]">
                  <label className="label">
                    <span className="label-text">TOWN / CITY</span>
                  </label>
                  <input
                    type="text"
                    placeholder="TOWN / CITY"
                    className="input input-bordered"
                  />
                </div>
              </div>
              {/* ...  */}
              <div className="dis flex w-[100%] justify-between">
                <div className="form-control w-[50%]">
                  <label className="label">
                    <span className="label-text">DISTRICT</span>
                  </label>
                  <input
                    type="text"
                    placeholder="DISTRICT"
                    className="input input-bordered"
                  />
                </div>
                {/* ...  */}
                <div className="form-control w-[45%]">
                  <label className="label">
                    <span className="label-text">POSTCODE / ZIP </span>
                  </label>
                  <input
                    type="text"
                    placeholder="POSTCODE / ZIP "
                    className="input input-bordered"
                  />
                </div>
              </div>
              {/* ...  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PHONE </span>
                </label>
                <input
                  type="text"
                  placeholder="PHONE"
                  className="input input-bordered"
                />
              </div>
              {/* ...  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">EMAIL ADDRESS </span>
                </label>
                <input
                  type="text"
                  readOnly
                  defaultValue={user?.email}
                  placeholder="EMAIL ADDRESS"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button onClick={handleCheckout} className="btn btn-primary">
                  CheckOut Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CheckOut;
