import React from "react";
import { Link } from "react-router-dom";

const SingleCourseCart = ({ course }) => {
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
  } = course;
  return (
    <div>
      <div className="card card-compact w-[95%] bg-base-100 shadow-xl">
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
            {description.length > 100
              ? description.slice(0, 70) + " ...Read More"
              : description}
          </p>
          {/* <p className="">
            <span className="font-bold">Certificate:</span> {certificate}
          </p> */}
          {/* <p className="">
            <span className="font-bold">Phone Number:</span> {phone}
          </p> */}
          <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary w-[70%]">
              <Link to={`/courses/details/${id}`}>Course Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourseCart;
