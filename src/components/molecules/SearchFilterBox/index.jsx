import { useState } from "react";
import { useDispatch } from "react-redux";

import { Container, Fragment } from "./style";
import { uncheckedIcon, checkedIcon } from "../../../utils/icons";

import {
  addSearchPreferences,
  removeSearchPreferences,
} from "../../../store/modules/searchPreferences/actions";

const SearchFilterBox = () => {
  const [filters, setFilters] = useState([
    {
      name: "Horse",
      status: false,
    },
    {
      name: "Relaxation",
      status: false,
    },
    {
      name: "Fishing",
      status: false,
    },
    {
      name: "Climbing",
      status: false,
    },
    {
      name: "Exploration",
      status: false,
    },
    {
      name: "Camping",
      status: false,
    },
    {
      name: "Motorhome",
      status: false,
    },
  ]);

  const dispatch = useDispatch();

  return (
    <Container>
      {filters.map((preference, index) => (
        <Fragment key={index}>
          <button
            className="Button"
            onClick={() => {
              preference.status = !preference.status;

              preference.status
                ? dispatch(addSearchPreferences(preference.name))
                : dispatch(removeSearchPreferences(preference.name));

              setFilters([...filters]);
            }}
          >
            {preference.status ? (
              <img src={checkedIcon} alt="Check" />
            ) : (
              <img src={uncheckedIcon} alt="noCheck" />
            )}
            {preference.name}
          </button>
        </Fragment>
      ))}
    </Container>
  );
};

export default SearchFilterBox;
