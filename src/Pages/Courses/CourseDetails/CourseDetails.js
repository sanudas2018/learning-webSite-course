import React from "react";
import { useLoaderData } from "react-router-dom";
import "./CourseDetails.css";

const CourseDetails = () => {
  const singleCourseDetails = useLoaderData();
  const {
    _id,
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
  return (
    <div>
      {/* <div className="card card-compact w-[95%] bg-base-100 shadow-xl">
        <figure>
          <img className="" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h1 className="card-title "> {name}</h1>
          <p className="font-bold">{amount} Tk</p>
          <p className="">
            <span className="font-bold">Registration Deadline: </span>
            {time}
          </p>
          <p className="">
            <span className="font-bold">Live Class:</span> {liveClass}
          </p>
          <p className="">
            <span className="font-bold pr-3">Course Duration:</span>
            {description}
          </p>
          <p className="">
            <span className="font-bold">Certificate:</span> {certificate}
          </p>
          <p className="">
            <span className="font-bold">Phone Number:</span> {phone}
          </p>
          <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary w-[70%]">Course Details</button>
          </div>
        </div>
      </div> */}
      <div className="hero min-h-screen bg-base-200 mb-8 rounded-3xl">
        <div className="hero-content flex-col lg:flex-row h-[600px] bg-slate-200">
          <img
            src={image}
            className="max-w-sm shadow-2xl h-[100%] rounded-3xl"
            alt=""
          />
          <div className="lg:mt-0 md:mt-4 mt-4 flex flex-col gap-4">
            <h1 className="card-title "> {name}</h1>
            <p className="font-bold">{amount} Tk</p>
            <p className="">
              <span className="font-bold">Registration Deadline: </span>
              {time}
            </p>
            <p className="">
              <span className="font-bold">Live Class:</span> {liveClass}
            </p>
            <p className="">
              <span className="font-bold pr-3">Course Duration:</span>
              {description}
            </p>
            <p className="">
              <span className="font-bold">Certificate:</span> {certificate}
            </p>
            <p className="">
              <span className="font-bold">Phone Number:</span> {phone}
            </p>
            <div className="card-actions justify-center mt-4">
              <button className="btn btn-primary w-[70%]">
                Join To The Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
