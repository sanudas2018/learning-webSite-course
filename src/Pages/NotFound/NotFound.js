import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { notfounpage } from "../../images/404page.jpg";
import "./NotFound.css";

export class NotFound extends Component {
  render() {
    return (
      <div>
        <Link to={"/"}>
          <img
            className="w-[100%] h-[100vh]"
            alt="404 pages"
            src="https://res.cloudinary.com/dwac7hlfp/image/upload/v1665584815/404page_azt7pc.jpg"
          ></img>
        </Link>
      </div>
    );
  }
}

export default NotFound;
