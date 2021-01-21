const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case "@profile/GET":
      const { profile } = action;
      return profile;

    default:
      return state;
  }
};

export default profileReducer;
