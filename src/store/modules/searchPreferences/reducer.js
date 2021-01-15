export const searchPreferencesReducer = (state = [], action) => {
  switch (action.type) {
    case "@searchPreferences/STORE":
      const { searchPreferences } = action;
      return searchPreferences;

    default:
      return state;
  }
};

export default searchPreferencesReducer;
