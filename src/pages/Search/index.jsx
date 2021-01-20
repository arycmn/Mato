import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, LocationList, Input } from "./style";
import { search } from "../../utils/icons";
import { useSelector } from "react-redux";
import Title from "../../components/atoms/Title";
import TextField from "../../components/atoms/TextField";
import Button from "../../components/atoms/Button";
import SearchFilterBox from "../../components/molecules/SearchFilterBox";
import Picture from "../../components/atoms/Picture";

const locations = [
  {
    url: "https://picsum.photos/150",
    nome: "Location 1",
    id: 1,
    activities: ["Fishing"],
  },
  {
    url: "https://picsum.photos/150",
    nome: "Location 2",
    id: 2,
    activities: ["Fishing"],
  },
  {
    url: "https://picsum.photos/150",
    id: 3,
    nome: "Location 3",
    activities: ["Horse"],
  },
  {
    url: "https://picsum.photos/150",
    nome: "Location 4",
    id: 4,
    activities: ["Climbing"],
  },
  {
    url: "https://picsum.photos/150",
    nome: "Location 5",
    activities: ["Horse", "Climbing"],
    id: 5,
  },
  {
    url: "https://picsum.photos/150",
    nome: "Location 6",
    activities: ["Motorhome", "Relaxation"],
    id: 6,
  },
  {
    url: "https://picsum.photos/150",
    nome: "Location 7",
    activities: ["Motorhome"],
    id: 7,
  },
  {
    url: "https://picsum.photos/150",
    activities: ["Climbing"],
    nome: "Location 8",
    id: 8,
  },
  {
    activities: ["Horse"],
    url: "https://picsum.photos/150",
    nome: "Location 9",
    id: 9,
  },
  {
    activities: ["Exploration"],
    url: "https://picsum.photos/150",
    nome: "Location 10",
    id: 10,
  },
  {
    url: "https://picsum.photos/150",
    id: 11,
    nome: "Location 11",
    activities: ["Horse", "Climbing"],
  },
  {
    id: 12,
    activities: ["Horse", "Climbing"],
    url: "https://picsum.photos/150",
    nome: "Location 12",
  },
  {
    id: 13,
    url: "https://picsum.photos/150",
    nome: "Location 13",
    activities: ["Horse", "Relaxation"],
  },
  {
    url: "https://picsum.photos/150",
    nome: "Location 1",
    id: 1,
    activities: ["Fishing"],
  },
  {
    url: "https://picsum.photos/150",
    nome: "Location 2",
    id: 2,
    activities: ["Fishing"],
  },
  {
    url: "https://picsum.photos/150",
    id: 3,
    nome: "Location 3",
    activities: ["Horse"],
  },
  {
    url: "https://picsum.photos/150",
    nome: "Location 4",
    id: 4,
    activities: ["Climbing"],
  },
  {
    url: "https://picsum.photos/150",
    nome: "Location 5",
    activities: ["Horse", "Climbing"],
    id: 5,
  },
  {
    url: "https://picsum.photos/150",
    nome: "Location 6",
    activities: ["Motorhome", "Relaxation"],
    id: 6,
  },
  {
    url: "https://picsum.photos/150",
    nome: "Location 7",
    activities: ["Motorhome"],
    id: 7,
  },
  {
    url: "https://picsum.photos/150",
    activities: ["Climbing"],
    nome: "Location 8",
    id: 8,
  },
  {
    activities: ["Horse"],
    url: "https://picsum.photos/150",
    nome: "Location 9",
    id: 9,
  },
  {
    activities: ["Exploration"],
    url: "https://picsum.photos/150",
    nome: "Location 10",
    id: 10,
  },
  {
    url: "https://picsum.photos/150",
    id: 11,
    nome: "Location 11",
    activities: ["Horse", "Climbing"],
  },
  {
    id: 12,
    activities: ["Horse", "Climbing"],
    url: "https://picsum.photos/150",
    nome: "Location 12",
  },
  {
    id: 13,
    url: "https://picsum.photos/150",
    nome: "Location 13",
    activities: ["Horse", "Relaxation"],
  },
];

const Search = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [wantedPlaces, setWantedPlaces] = useState(locations);

  const { searchPreferences } = useSelector((state) => state);

  useEffect(() => {
    const newList = locations.filter((location) =>
      location.nome.includes(searchText)
    );
    setWantedPlaces(newList);

    if (searchPreferences.length > 0) {
      const filtered = locations.filter(({ activities }) =>
        activities.find((item) => searchPreferences.includes(item))
      );

      setWantedPlaces(filtered);
    }
  }, [searchText, searchPreferences]);

  const history = useHistory();

  const handleClickShowFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleNavigateToLocation = (id) => () => {
    history.push(`/location/${id}`);
  };

  return (
    <Container>
      <Title text={"Pesquisa"} />
      <input
        placeholderText="Pesquisa"
        icon={search}
        type="search"
        width={50}
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
    </Container>
  );
};

export default Search;
