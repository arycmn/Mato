import { useState } from "react";

import { Container, LocationList, Title } from "./style";

import { search } from "../../utils/icons";

import TextField from "../../components/atoms/TextField";
import Button from "../../components/atoms/Button";
import SearchFilterBox from "../../components/molecules/SearchFilterBox";
import Picture from "../../components/atoms/Picture";
import FooterMenu from "../../components/molecules/FooterMenu";

const Search = () => {
  const [showFilters, setShowFilters] = useState(false);

  const handleClickShowFilters = () => {
    setShowFilters(!showFilters);
  };

  const locations = [
    {
      url: "https://picsum.photos/150",
      nome: "Location",
    },
    {
      url: "https://picsum.photos/150",
      nome: "Location",
    },
    {
      url: "https://picsum.photos/150",
      nome: "Location",
    },
    {
      url: "https://picsum.photos/150",
      nome: "Location",
    },
    {
      url: "https://picsum.photos/150",
      nome: "Location",
    },
    {
      url: "https://picsum.photos/150",
      nome: "Location",
    },
    {
      url: "https://picsum.photos/150",
      nome: "Location",
    },
    {
      url: "https://picsum.photos/150",
      nome: "Location",
    },
    {
      url: "https://picsum.photos/150",
      nome: "Location",
    },
    {
      url: "https://picsum.photos/150",
      nome: "Location",
    },
    {
      url: "https://picsum.photos/150",
      nome: "Location",
    },
    {
      url: "https://picsum.photos/150",
      nome: "Location",
    },
    {
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

      <LocationList>
        {locations.map((location) => (
          <Picture
            src={location.url}
            alt={location.nome}
            width="150px"
            height="150px"
            pictureType="location"
          />
        ))}
      </LocationList>

      <FooterMenu />
    </Container>
  );
};

export default Search;
