import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./RightSideNav.css";

const RightSideNav = () => {
  //localhost:5000/courses-categories
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://open-door-learner-server.vercel.app/courses-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  });
  // console.log(categories);
  return (
    <div>
      <div className="categories-container md:absolute md:top-20 md:right-[-35px] lg:right-[0px] shadow-2xl">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr className="text-center">
                <th>NO</th>
                <th>Course Name</th>
              </tr>
            </thead>
            <tbody className="cursor-pointer">
              {/* <!-- row 1 --> */}
              {categories.map((category, index) => (
                <tr key={category.id} className="hover text-center">
                  <th>{index + 1}</th>
                  <td className="text-left">
                    <Link
                      key={category.id}
                      to={`/courses/details/${category.id}`}
                    >
                      {category.name}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
