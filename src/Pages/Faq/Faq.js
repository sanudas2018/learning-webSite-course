import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <div>
      <div className="collapseHome mt-10 mb-72 ">
        <h2 className="text-3xl font-extrabold text-center mb-3">
          Don't know some common questions and answers...
        </h2>
        <div className="totalCollapse grid grid-cols-1 lg:grid-cols-2 gap-6 w-[95%] mx-auto mt-9 bg-teal-100 p-10 rounded-2xl">
          <div className="leftCol ">
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title text-xl font-medium">
                I am new how can I do this
              </div>
              <div className="collapse-content">
                <p>
                  First of all welcome, if you want to do anything in
                  freelancing or web sector first of all it is necessary to have
                  a computer and internet connection. If you have everything
                  ready, you can first watch our Day0 videos from YouTube, if
                  you want, you can also learn from YouTube, as well as our Hand
                  Holding Support program is also running, where you learn by
                  holding through live classes from start to finish.
                </p>
              </div>
            </div>
            {/* 2- side  */}
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3"
            >
              <div className="collapse-title text-xl font-medium">
                I only know HTML, CSS, so what do I do now?
              </div>
              <div className="collapse-content">
                <p>
                  What you start with will depend on your current activity and
                  your needs. If your need is to earn very fast then WordPress
                  is best for you, and if you are from CSE background or If you
                  are passionate about programming and have enough time in your
                  hands then I would say that starting with JavaScript or
                  Laravel is the best.
                </p>
              </div>
            </div>
            {/* 3- slide  */}
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title text-xl font-medium">
                Will Jhonkar Bhai take live classes?
              </div>
              <div className="collapse-content">
                <p>
                  It is not possible for me to take all the classes, but what
                  happens is that I do not attend the classes of the marketplace
                  myself and am connected with all the batches, meet and listen.
                  The classes keep improving day by day.
                </p>
              </div>
            </div>
          </div>
          <div className="rightCol">
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title text-xl font-medium">
                Do you have any courses?
              </div>
              <div className="collapse-content">
                <p>
                  All the courses we have till now Hand Holding Support For
                  HTML(Day-0) to Advance React Hand Holding Support form
                  WordPress(Day-35) Basic to Advance Full MERN Stack JavaScript
                  Course Python with PHP
                </p>
              </div>
            </div>
            {/* 2- side  */}
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box  my-3"
            >
              <div className="collapse-title text-xl font-medium">
                What is market place support and how can I get it?
              </div>
              <div className="collapse-content">
                <p>
                  If you are a student of Hand Holding Support then you will get
                  Lifetime Marketplace Support, In Market Place Support, your
                  client's message review, whether to take a job or not to take
                  a job, how to get a job, do not understand a client's
                  requirement, with what plugging or how to do the overall
                  support is provided from start to finish. But what is not
                  done, you have got a task to do it yourself, our support team
                  will support but not directly.
                </p>
              </div>
            </div>
            {/* 3- slide  */}
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title text-xl font-medium">
                How many days will it take to complete the course?
              </div>
              <div className="collapse-content">
                <p>
                  If you enroll in our HTML to WordPress Advanced Course then it
                  will take around 7-8 months to complete the course. And if you
                  enroll in WordPress to advance course then it will take about
                  5-6 months to complete the course.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
