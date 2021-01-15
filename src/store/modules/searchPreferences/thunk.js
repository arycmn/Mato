import { storeSearchPreferences } from "./actions";

export const storeSearchPreferencesThunk = (preference) => (
  dispatch,
  getState
) => {
  const { searchPreferences } = getState();

  const foundPreference = searchPreferences.find((pref) => pref === preference);

  const listWithoutFoundPrefrence = searchPreferences.filter(
    (preferencer) => preferencer.name !== foundPreference.name
  );

  const newList = listWithoutFoundPrefrence.push({
    name: preference.name,
    state: !preference.state,
  });

  console.log(listWithoutFoundPrefrence);
};
