import { useState } from "react";
import { useHistory } from "react-router-dom";

import { Container, LocationList, Title } from "./style";

import { search } from "../../utils/icons";

import TextField from "../../components/atoms/TextField";
import Button from "../../components/atoms/Button";
import SearchFilterBox from "../../components/molecules/SearchFilterBox";
import Picture from "../../components/atoms/Picture";
import FooterMenu from "../../components/molecules/FooterMenu";

const Search = () => {
  const [showFilters, setShowFilters] = useState(false);

  const history = useHistory();

  const handleClickShowFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleNavigateToLocation = (id) => () => {
    history.push(`/location/${id}`);
  };

  const locations = [
    {
      url: "https://picsum.photos/150",
      nome: "Location",
      id: 1,
    },
    {
      url: "https://picsum.photos/150",
      nome: "Location",
      id: 2,
    },
    {
      url: "https://picsum.photos/150",
      id: 3,
      nome: "Location",
    },
    {
      url: "https://picsum.photos/150",
      nome: "Location",
      id: 4,
    },
    {
      url: "https://picsum.photos/150",
      nome: "Location",
      id: 5,
    },
    {
      url: "https://picsum.photos/150",
      nome: "Location",
      id: 6,
    },
    {
      url: "https://picsum.photos/150",
      nome: "Location",
      id: 7,
    },
    {
      url: "https://picsum.photos/150",
      nome: "Location",
      id: 8,
    },
    {
      url: "https://picsum.photos/150",
      nome: "Location",
      id: 9,
    },
    {
      url: "https://picsum.photos/150",
      nome: "Location",
      id: 10,
    },
    {
      url: "https://picsum.photos/150",
      id: 11,
      nome: "Location",
    },
    {
      id: 12,
      url: "https://picsum.photos/150",
      nome: "Location",
    },
    {
      id: 13,
      url: "https://picsum.photos/150",
      nome: "Location",
    },
  ];

  return (
    <Container>
      <Title>Pesquisa</Title>
      <TextField
        placeholderText="Pesquisa"
        icon={search}
        type="search"
        width={90}
      />
      <Button width="100px" onClick={handleClickShowFilters}>
        Filtrar
      </Button>

      {showFilters && <SearchFilterBox />}

      <LocationList minimized={showFilters}>
        {locations.map((location, index) => (
          <Picture
            key={index}
            src={location.url}
            alt={location.nome}
            width="150px"
            height="150px"
            onClick={handleNavigateToLocation(location.id)}
          />
        ))}
      </LocationList>

      <FooterMenu />
    </Container>
  );
};

export default Search;
