export default (state, action) => {
  switch (action.type) {
    case "REMOVE_PROFILE":
      return {
        profiles: state.profiles.filter(
          (profile) => profile.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
