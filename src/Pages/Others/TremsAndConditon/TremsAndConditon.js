import React from "react";
import Header from "../../Shared/Header/Header";

const TremsAndConditon = () => {
  return (
    <div>
      <Header></Header>
      <div className="tremsConteiner bg-slate-200 h-screen py-10 px-16">
        <h1 className="text-center font-extrabold text-3xl">
          Terms and Conditions Template
        </h1>
        <p className="mt-10 font-semibold text-xl text-teal-900">
          A Terms and Conditions agreement is where you let the public know the
          terms, rules and guidelines for using your website or mobile app. They
          include topics such as acceptable use, restricted behavior and
          limitations of liability. This article will get you started with
          creating your own custom Terms and Conditions agreement. We've also
          put together a Sample Terms and Conditions Template that you can use
          to help you write your own.
        </p>
      </div>
    </div>
  );
};

export default TremsAndConditon;
