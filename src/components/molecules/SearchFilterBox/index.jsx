import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Fragment } from "./style";
import { uncheckedIcon, checkedIcon } from "../../../utils/icons";

import { storeSearchPreferencesThunk } from "../../../store/modules/searchPreferences/thunk";

const SearchFilterBox = () => {
  const { searchPreferences } = useSelector((state) => state);

  const dispatch = useDispatch();
  console.log(searchPreferences);

  return (
    <Container>
      {searchPreferences.map((preference, index) => (
        <Fragment key={index}>
          <button
            className="Button"
            onClick={() => dispatch(storeSearchPreferencesThunk(preference))}
          >
            {preference.state ? (
              <img src={checkedIcon} alt="Check"></img>
            ) : (
              <img src={uncheckedIcon} alt="noCheck"></img>
            )}
            {preference.name}
          </button>
        </Fragment>
      ))}
    </Container>
  );
};

export default SearchFilterBox;
