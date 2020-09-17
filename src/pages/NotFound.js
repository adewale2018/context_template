import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      Page Not Found
      <br />
      <Link to='/profiles'>Back to homepage</Link>
    </div>
  );
}

export default NotFound;
