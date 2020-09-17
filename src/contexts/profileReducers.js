export default (state, action) => {
  switch (action.type) {
    case "REMOVE_PROFILE":
      return {
        profiles: state.profiles.filter(
          (profile) => profile.id !== action.payload
        ),
      };
    case "ADD_PROFILE":
      return {
        profiles: [action.payload, ...state.profiles],
      };
    case "EDIT_PROFILE":
      let currentProfile = action.payload;
      const updateProfile = state.profiles.map((profile) => {
        if (profile.id === currentProfile.id) {
          return currentProfile;
        }
        return profile;
      });
      return {
        profiles: updateProfile,
      };
    default:
      return state;
  }
};
