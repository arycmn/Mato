import React, { useEffect, useState } from "react";
import { Container, Fragment } from "./style";
import { unckecked, checked } from "../../../icons";

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
            <img src={checked} alt="Check"></img>
          ) : (
            <img src={unckecked} alt="noCheck"></img>
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
            <img src={checked} alt="Check"></img>
          ) : (
            <img src={unckecked} alt="NoCheck"></img>
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
            <img src={checked} alt="Check"></img>
          ) : (
            <img src={unckecked} alt="NoCheck"></img>
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
            <img src={checked} alt="Check"></img>
          ) : (
            <img src={unckecked} alt="NoCheck"></img>
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
            <img src={checked} alt="Check"></img>
          ) : (
            <img src={unckecked} alt="NoCheck"></img>
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
            <img src={checked} alt="Check"></img>
          ) : (
            <img src={unckecked} alt="NoCheck"></img>
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
            <img src={checked} alt="Check"></img>
          ) : (
            <img src={unckecked} alt="NoCheck"></img>
          )}
          Motorhome
        </button>
      </Fragment>
    </Container>
  );
};

export default SearchFilterBox;
