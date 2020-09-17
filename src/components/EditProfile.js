import React, { useContext, useState, useEffect } from "react";
import { useRouteMatch, Link, useHistory } from "react-router-dom";

import { GlobalContext } from "../contexts/globalState";

function EditProfile() {
  const [selectedProfile, setSelectedProfile] = useState({
    name: "",
    email: "",
    contact: "",
    stack: "",
  });
  let match = useRouteMatch();
  let history = useHistory();
  let currentProfileId = match.params.id;
  const { profiles, editProfile } = useContext(GlobalContext);

  useEffect(() => {
    const selectedProfile = profiles.find(
      (profile) => profile.id === currentProfileId
    );
    setSelectedProfile(selectedProfile);
  }, [profiles, currentProfileId]);

  const handleChange = (e) => {
    setSelectedProfile({ ...selectedProfile, [e.target.name]: e.target.value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    editProfile(selectedProfile);
    history.push("/profiles");
  };

  return (
    <div className='container'>
      <h4>Update Your Profile</h4>
      <div className='row'>
        <form className='col s12' onSubmit={handleEdit}>
          <div className='row'>
            <div className='input-field col s12'>
              <input
                id='name'
                name='name'
                type='text'
                className='validate'
                value={selectedProfile.name}
                onChange={handleChange}
                required
              />
              <label htmlFor='name'>Name</label>
            </div>
            <div className='input-field col s12'>
              <input
                id='email'
                name='email'
                type='email'
                className='validate'
                value={selectedProfile.email}
                onChange={handleChange}
                required
              />
              <label htmlFor='email'>Email</label>
            </div>
            <div className='input-field col s12'>
              <input
                id='stack'
                name='stack'
                type='text'
                className='validate'
                value={selectedProfile.stack}
                onChange={handleChange}
                required
              />
              <label htmlFor='stack'>Stack</label>
            </div>
            <div className='input-field col s12'>
              <input
                id='contact'
                name='contact'
                type='tel'
                className='validate'
                value={selectedProfile.contact}
                onChange={handleChange}
                required
              />
              <label htmlFor='contact'>Contact</label>
            </div>
          </div>
          <button className='btn waves-effect waves-light' type='submit'>
            UPDATE
            <i className='material-icons right'>send</i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
