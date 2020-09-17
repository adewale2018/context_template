import React from "react";
import { Link } from "react-router-dom";

function Heading() {
  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to='/profiles' className='brand'>Profile Register</Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link to='/profiles'>Home</Link>
          </li>
          <li>
            <Link to='/profile/new'>Add New Profile</Link>
          </li>
          <li>
            <a
              href='https://www.github.com'
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
