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
      <div className="container mx-auto w-[95%] border border-red-800 mt-4">
        <div className="content-body row grid md:grid-cols-4  gap-3">
          <div className="newsBody border col-span-4 md:col-span-3">
            <Outlet></Outlet>
          </div>
          <div className="rightSide border border-green-900 sm:hidden lg:block">
            <RightSideNav></RightSideNav>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
