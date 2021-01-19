export const addSearchPreferences = (preference) => ({
  type: "@searchPreferences/add",
  preference,
});

export const removeSearchPreferences = (preferenceName) => ({
  type: "@searchPreferences/remove",
  preferenceName,
});
