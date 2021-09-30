import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <h1>404 - Not Found!</h1>

      <Link to="/">
        <h1>Go Home</h1>
      </Link>
    </div>
  );
};

export default PageNotFound;
