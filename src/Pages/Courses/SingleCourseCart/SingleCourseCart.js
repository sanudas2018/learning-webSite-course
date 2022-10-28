import React from "react";

const SingleCourseCart = ({ course }) => {
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
  } = course;
  return (
    <div>
      <div className="card card-compact w-[95%] bg-base-100 shadow-xl">
        <figure>
          <img className="" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h1 className="card-title "> {name}</h1>
          <p>{amount} Tk</p>
          <p>Registration Deadline: {time}</p>
          <p>Live Class: {liveClass}</p>
          <p>
            Course Duration:{" "}
            {description.length > 100
              ? description.slice(0, 70) + " ...Read More"
              : description}
          </p>
          <p>Certificate: {certificate}</p>
          <p>Phone Number: {phone}</p>
          <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary">Join To The Course</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourseCart;
