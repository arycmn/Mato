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
      name: "Trilha",
      status: false,
    },
    {
      name: "Pesca",
      status: false,
    },
    {
      name: "Ciclismo",
      status: false,
    },
    {
      name: "Surf",
      status: false,
    },
    {
      name: "Natação",
      status: false,
    },
    {
      name: "Corrida",
      status: false,
    },
    {
      name: "Praia",
      status: false,
    },
    {
      name: "Montanha",
      status: false,
    },
    {
      name: "Rios",
      status: false,
    },
    {
      name: "Floresta",
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
