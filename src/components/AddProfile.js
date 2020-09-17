import React, { useContext, useReducer } from "react";
import uuid from "react-uuid";
import { useHistory } from "react-router-dom";

import { GlobalContext } from "../contexts/globalState";

const initialState = {
  name: "",
  email: "",
  contact: "",
  stack: "",
};

function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}

function AddProfile() {
  const { addProfile } = useContext(GlobalContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e) => {
    dispatch({
      field: e.target.name,
      value: e.target.value,
    });
  };
  const { name, email, contact, stack } = state;
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProfile = {
      id: uuid(),
      name,
      email,
      stack,
      contact,
    };
    addProfile(newProfile);
    history.push("/profiles");
  };
  return (
    <div className='container'>
      <h4>Register New Profile</h4>
      <div className='row'>
        <form className='col s12' onSubmit={handleSubmit}>
          <div className='row'>
            <div className='input-field col s12'>
              <input
                id='name'
                name='name'
                type='text'
                className='validate'
                value={name}
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
                value={email}
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
                value={stack}
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
                value={contact}
                onChange={handleChange}
                required
              />
              <label htmlFor='contact'>Contact</label>
            </div>
          </div>
          <button className='btn waves-effect waves-light' type='submit'>
            REGISTER
            <i className='material-icons right'>send</i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProfile;
