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
    default:
      return state;
  }
};
