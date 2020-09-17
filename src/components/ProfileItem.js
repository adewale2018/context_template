import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { FcEditImage, FcEmptyTrash } from "react-icons/fc";

import { GlobalContext } from "../contexts/globalState";

function ProfileItem({ id, name, email, contact, stack }) {
  let history = useHistory();
  const { removeProfile } = useContext(GlobalContext);
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{contact}</td>
      <td>{stack}</td>
      <td>
        <FcEditImage
          className='edit'
          onClick={() => history.push(`/profile/edit/${id}`)}
        />
      </td>
      <td>
        <FcEmptyTrash className='delete' onClick={() => removeProfile(id)} />
      </td>
    </tr>
  );
}

export default ProfileItem;
