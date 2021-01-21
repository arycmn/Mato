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
      id: 0,
      name: "Natação",
      status: false,
    },
    {
      id: 1,
      name: "Corrida",
      status: false,
    },
    {
      id: 2,
      name: "Ciclismo",
      status: false,
    },
    {
      id: 3,
      name: "Pesca",
      status: false,
    },
    {
      id: 4,
      name: "Trilha",
      status: false,
    },
    {
      id: 5,
      name: "Surf",
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
                ? dispatch(addSearchPreferences(preference.id))
                : dispatch(removeSearchPreferences(preference.id));

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
