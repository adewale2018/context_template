import React, { useContext } from "react";
import { FcEditImage, FcEmptyTrash } from "react-icons/fc";

import { GlobalContext } from "../contexts/globalState";

function ProfileItem({ id, name, email, contact, stack }) {
  const { removeProfile } = useContext(GlobalContext);
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{contact}</td>
      <td>{stack}</td>
      <td>
        <FcEditImage className='edit' />
      </td>
      <td>
        <FcEmptyTrash className='delete' onClick={() => removeProfile(id)} />
      </td>
    </tr>
  );
}

export default ProfileItem;
