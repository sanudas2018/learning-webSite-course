import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Link, useLoaderData } from "react-router-dom";
import "./CourseDetails.css";

const CourseDetails = () => {
  const singleCourseDetails = useLoaderData();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
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
  return (
    <div className="mb-44">
      <div
        className="hero min-h-screen bg-base-200 mb- rounded-3xl"
        ref={componentRef}
      >
        <div className="hero-content flex-col lg:flex-row h-[600px] bg-slate-200 ">
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
          </div>
        </div>
      </div>
      <div className="buttonContainer w-[100%] lg:w-[100%] md:w-[100%] mx-auto flex flex-row lg:justify-end justify-around md:justify-end align-middle border ">
        <div className="inner border  w-[100%] md:w-[40%]">
          <div className="card-actions justify-end mt-4">
            <Link to={`/checkOut/${id}`}>
              <button className="btn btn-primary w-[100%]">
                Join To The Course
              </button>
            </Link>
          </div>
          <div className="card-actions justify-end mt-4">
            <Link>
              <button className="btn btn-info w-[100%]" onClick={handlePrint}>
                Download Course Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
