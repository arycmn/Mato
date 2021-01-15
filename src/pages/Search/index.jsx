import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Container, LocationList, Title } from "./style";

import { search } from "../../utils/icons";

import TextField from "../../components/atoms/TextField";
import Button from "../../components/atoms/Button";
import SearchFilterBox from "../../components/molecules/SearchFilterBox";
import Picture from "../../components/atoms/Picture";
import FooterMenu from "../../components/molecules/FooterMenu";

const locations = [
  {
    url: "https://picsum.photos/150",
    nome: "Location 1",
    id: 1,
  },
  {
    url: "https://picsum.photos/150",
    nome: "Location 2",
    id: 2,
  },
  {
    url: "https://picsum.photos/150",
    id: 3,
    nome: "Location 3",
  },
  {
    url: "https://picsum.photos/150",
    nome: "Location 4",
    id: 4,
  },
  {
    url: "https://picsum.photos/150",
    nome: "Location 5",
    id: 5,
  },
  {
    url: "https://picsum.photos/150",
    nome: "Location 6",
    id: 6,
  },
  {
    url: "https://picsum.photos/150",
    nome: "Location 7",
    id: 7,
  },
  {
    url: "https://picsum.photos/150",
    nome: "Location 8",
    id: 8,
  },
  {
    url: "https://picsum.photos/150",
    nome: "Location 9",
    id: 9,
  },
  {
    url: "https://picsum.photos/150",
    nome: "Location 10",
    id: 10,
  },
  {
    url: "https://picsum.photos/150",
    id: 11,
    nome: "Location 11",
  },
  {
    id: 12,
    url: "https://picsum.photos/150",
    nome: "Location 12",
  },
  {
    id: 13,
    url: "https://picsum.photos/150",
    nome: "Location 13",
  },
];

const Search = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [wantedPlaces, setWantedPlaces] = useState(locations);

  useEffect(() => {
    const newList = locations.filter((location) =>
      location.nome.includes(searchText)
    );

    setWantedPlaces(newList);
  }, [searchText]);

  const history = useHistory();

  const handleClickShowFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleNavigateToLocation = (id) => () => {
    history.push(`/location/${id}`);
  };

  return (
    <Container>
      <Title>Pesquisa</Title>
      <TextField
        placeholderText="Pesquisa"
        icon={search}
        type="search"
        width={90}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Button width="100px" onClick={handleClickShowFilters}>
        Filtrar
      </Button>

      {showFilters && <SearchFilterBox />}

      <LocationList minimized={showFilters}>
        {wantedPlaces.map((location, index) => (
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
