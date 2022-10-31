import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Courses.css";
import SingleCourseCart from "./SingleCourseCart/SingleCourseCart";

const Courses = () => {
  const Courses = useLoaderData();
  const allCourses = Courses.data;

  return (
    <div className="z-0 mb-48 coursesBg ">
      <div className="courseHeader text-center mb-6">
        <h1 className="font-extrabold text-4xl">All Courses</h1>
        <p className="text-xl italic ">We found 6 products available for you</p>
      </div>
      <div className="divider my-5">***</div>
      <div className="courseContainer grid lg:grid-cols-2 md:grid-cols-1 gap-3 mx-auto w-[100%]">
        {allCourses.map((course) => (
          <SingleCourseCart course={course} key={course.id}></SingleCourseCart>
        ))}
      </div>
    </div>
  );
};

export default Courses;
