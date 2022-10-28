import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Courses.css";
import SingleCourseCart from "./SingleCourseCart/SingleCourseCart";

const Courses = () => {
  const Courses = useLoaderData();
  const allCourses = Courses.data;
  console.log(allCourses);
  return (
    <div className="z-0 mb-48">
      <p>courses</p>
      <div className="courseContainer grid grid-cols-2 gap-3 mx-auto w-[100%]">
        {allCourses.map((course) => (
          <SingleCourseCart course={course} key={course._id}></SingleCourseCart>
        ))}
      </div>
    </div>
  );
};

export default Courses;
