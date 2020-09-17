import React, { createContext, useReducer } from "react";
import uuid from "react-uuid";

import profileReducers from "./profileReducers";

const initialState = {
  profiles: [
    { id: uuid(), name: "Saheed", email: "saheed@gmail.com", stack: "MERN", contact: "23312" },
    { id: uuid(), name: "John", email: "john@gmail.com", stack: "JAM", contact: "23312" },
    { id: uuid(), name: "Saheed", email: "saheed@gmail.com", stack: "MEAN", contact: "23312" },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducers, initialState);

  const removeProfile = (profileId) => {
    dispatch({
      type: "REMOVE_PROFILE",
      payload: profileId,
    });
  };
  return (
    <>
      <GlobalContext.Provider
        value={{
          profiles: state.profiles,
          removeProfile,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  );
};
