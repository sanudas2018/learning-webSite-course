import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./RightSideNav.css";

const RightSideNav = () => {
  //localhost:5000/courses-categories
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  });
  // console.log(categories);
  return (
    <div>
      <div className="categories-container">
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
                  <td className="text-left">{category.name}</td>
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
