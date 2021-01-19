export const searchPreferencesReducer = (state = [], action) => {
  switch (action.type) {
    case "@searchPreferences/add":
      const { preference } = action;

      return [...state, preference];

    case "@searchPreferences/remove":
      const { preferenceName } = action;

      return state.filter((preference) => preference !== preferenceName);

    default:
      return state;
  }
};

export default searchPreferencesReducer;
