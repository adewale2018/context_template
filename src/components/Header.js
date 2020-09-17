import React from "react";
import { Link } from "react-router-dom";

function Heading() {
  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to='/profiles' className='brand waves-effect waves-light'>
          Profile Register
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link to='/profiles' className='waves-effect waves-light'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/profile/new' className='waves-effect waves-light'>
              Add New Profile
            </Link>
          </li>
          <li>
            <a
              href='https://github.com/adewale2018/context_template'
              rel='noopener noreferrer'
              target='_blank'
            >
              Visit on Github
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Heading;
