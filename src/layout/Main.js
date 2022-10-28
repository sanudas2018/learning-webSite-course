import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import RightSideNav from "../Pages/Shared/RightSideNav/RightSideNav";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="mx-auto w-[94%]  mt-4">
        <div className="content-body row grid md:grid-cols-4  gap-3">
          <div className="newsBody  col-span-4 md:col-span-3">
            <Outlet></Outlet>
          </div>

          <div className="rightSide  sm:hidden md:block mt-14 z-0 relative">
            <RightSideNav></RightSideNav>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
