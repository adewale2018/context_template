import React, { useContext } from "react";
import {
  FcPhone,
  FcFeedback,
  FcFullTrash,
  FcServices,
  FcReuse,
} from "react-icons/fc";

import { GlobalContext } from "../contexts/globalState";
import ProfileItem from "../components/ProfileItem";

function ProfilesList() {
  const { profiles } = useContext(GlobalContext);
  return (
    <div className='container'>
      <table className='centered responsive-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>
              Email
              <br />
              <FcFeedback />
            </th>
            <th>
              Stack
              <br />
              <FcServices />
            </th>
            
            <th>
              Contact
              <br />
              <FcPhone />
            </th>
            <th>Edit
            <br />
            <FcReuse />
            </th>
            <th>
              Delete
              <br />
              <FcFullTrash />
            </th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile) => (
            <ProfileItem key={profile.id} {...profile} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProfilesList;
