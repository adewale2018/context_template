import React from "react";
import { FcEditImage, FcEmptyTrash } from 'react-icons/fc';
function ProfileItem({ id, name, email, contact, stack }) {
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
        <FcEmptyTrash className='delete' />
      </td>
    </tr>
  );
}

export default ProfileItem;
