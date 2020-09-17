import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className='container nf'>
      <div className='notfound'>
        SORRY!, <br />
        Page Not Found
      </div>

      <Link to='/profiles' className='back-home'>Back to homepage</Link>
    </div>
  );
}

export default NotFound;
