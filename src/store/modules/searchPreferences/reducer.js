const defaultState = [
  {
    name: "Horse",
    state: false,
  },
  {
    name: "Relaxation",
    state: false,
  },
  {
    name: "Fishing",
    state: false,
  },
  {
    name: "Climbing",
    state: false,
  },
  {
    name: "Exploration",
    state: false,
  },
  {
    name: "Camping",
    state: false,
  },
  {
    name: "Motorhome",
    state: false,
  },
];

export const searchPreferencesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "@searchPreferences/STORE":
      const { searchPreferences } = action;

      return searchPreferences;

    default:
      return state;
  }
};

export default searchPreferencesReducer;
