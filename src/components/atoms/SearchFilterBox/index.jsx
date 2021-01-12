import React, { useEffect, useState } from "react";
import { Container, Fragment } from "./style";
import NoCheck from "./Rectangle 2.svg";
import Check from "./Component 1.svg";

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
            <img src={Check} alt="Check"></img>
          ) : (
            <img src={NoCheck} alt="noCheck"></img>
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
            <img src={Check} alt="Check"></img>
          ) : (
            <img src={NoCheck} alt="NoCheck"></img>
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
            <img src={Check} alt="Check"></img>
          ) : (
            <img src={NoCheck} alt="NoCheck"></img>
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
            <img src={Check} alt="Check"></img>
          ) : (
            <img src={NoCheck} alt="NoCheck"></img>
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
            <img src={Check} alt="Check"></img>
          ) : (
            <img src={NoCheck} alt="NoCheck"></img>
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
            <img src={Check} alt="Check"></img>
          ) : (
            <img src={NoCheck} alt="NoCheck"></img>
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
            <img src={Check} alt="Check"></img>
          ) : (
            <img src={NoCheck} alt="NoCheck"></img>
          )}
          Motorhome
        </button>
      </Fragment>
    </Container>
  );
};

export default SearchFilterBox;
