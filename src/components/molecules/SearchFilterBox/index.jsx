import React, { useEffect, useState } from "react";
import { Container, Fragment } from "./style";
import { uncheckedIcon, checkedIcon } from "../../../utils/icons";

const SearchFilterBox = () => {
  const [Horse, SetHorse] = useState(false);
  const [Relaxation, SetRelaxation] = useState(false);
  const [Fishing, SetFishing] = useState(false);
  const [Climbing, SetClimbing] = useState(false);
  const [Exploration, SetExploration] = useState(false);
  const [Camping, SetCamping] = useState(false);
  const [Motorhome, SetMotorhome] = useState(false);

  return (
    <Container>
      <Fragment>
        <button
          onClick={() => {
            SetHorse(!Horse);
          }}
          className="Button"
        >
          {Horse ? (
            <img src={checkedIcon} alt="Check"></img>
          ) : (
            <img src={uncheckedIcon} alt="noCheck"></img>
          )}
          Horseback riding
        </button>
      </Fragment>
      <Fragment>
        <button
          onClick={() => {
            SetRelaxation(!Relaxation);
          }}
          className="Button"
        >
          {Relaxation ? (
            <img src={checkedIcon} alt="Check"></img>
          ) : (
            <img src={uncheckedIcon} alt="NoCheck"></img>
          )}
          Relaxation
        </button>
      </Fragment>
      <Fragment>
        <button
          onClick={() => {
            SetFishing(!Fishing);
          }}
          className="Button"
        >
          {Fishing ? (
            <img src={checkedIcon} alt="Check"></img>
          ) : (
            <img src={uncheckedIcon} alt="NoCheck"></img>
          )}
          Fishing
        </button>
      </Fragment>
      <Fragment>
        <button
          onClick={() => {
            SetClimbing(!Climbing);
          }}
          className="Button"
        >
          {Climbing ? (
            <img src={checkedIcon} alt="Check"></img>
          ) : (
            <img src={uncheckedIcon} alt="NoCheck"></img>
          )}
          Climbing
        </button>
      </Fragment>
      <Fragment>
        <button
          onClick={() => {
            SetExploration(!Exploration);
          }}
          className="Button"
        >
          {Exploration ? (
            <img src={checkedIcon} alt="Check"></img>
          ) : (
            <img src={uncheckedIcon} alt="NoCheck"></img>
          )}
          Guided Exploration
        </button>
      </Fragment>
      <Fragment>
        <button
          onClick={() => {
            SetCamping(!Camping);
          }}
          className="Button"
        >
          {Camping ? (
            <img src={checkedIcon} alt="Check"></img>
          ) : (
            <img src={uncheckedIcon} alt="NoCheck"></img>
          )}
          Camping
        </button>
      </Fragment>
      <Fragment>
        <button
          onClick={() => {
            SetMotorhome(!Motorhome);
          }}
          className="Button"
        >
          {Motorhome ? (
            <img src={checkedIcon} alt="Check"></img>
          ) : (
            <img src={uncheckedIcon} alt="NoCheck"></img>
          )}
          Motorhome
        </button>
      </Fragment>
    </Container>
  );
};

export default SearchFilterBox;
