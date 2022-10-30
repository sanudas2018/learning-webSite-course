import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <div className="bolgContainer w-[90%] mx-auto mt-10 mb-[360px] bg-cyan-100 p-[20px]">
        {/* 1 */}
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            what is cors?
          </div>
          <div className="collapse-content">
            <p>
              CORS is a node. js package for providing a Connect/Express
              middleware that can be used to enable CORS with various options.
              CORS acts as a middleware that allows the server side to use the
              data
            </p>
          </div>
        </div>
        {/* 2 */}
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </div>
          <div className="collapse-content">
            <p>
              Firebase Authentication provides backend services, easy-to-use
              SDKs, and ready-made UI libraries to authenticate users to your
              app. It supports authentication using passwords, phone numbers,
              popular federated identity providers like Google, Facebook and
              Twitter, and more.Usually, authentication by a server entails the
              use of a user name and password. Other ways to authenticate can be
              through cards, retina scans, voice recognition, and fingerprints.
            </p>
          </div>
        </div>
        {/* 3 */}
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            How does the private route work?
          </div>
          <div className="collapse-content">
            <p>
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated (Logged in).
            </p>
          </div>
        </div>
        {/* 4 */}
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is Node? How does Node work?
          </div>
          <div className="collapse-content">
            <p>
              It is a used as backend service where javascript works on the
              server-side of the application.Node.js is an open source server
              environment Node.js is free Node.js runs on various platforms
              (Windows, Linux, Unix, Mac OS X, etc.) This way javascript is used
              on both frontend and backend. Node. js runs on chrome v8 engine
              which converts javascript code into machine code, it is highly
              scalable, lightweight, fast, and data-intensive.<br></br> Node.js
              uses asynchronous programming!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
